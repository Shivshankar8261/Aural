import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '../data/lessons';
import { geminiService } from '../services/geminiService';

export default function LessonPractice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [isStartingRecording, setIsStartingRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasListened, setHasListened] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [audioMimeType, setAudioMimeType] = useState<string>('audio/webm');
  const [isLooping, setIsLooping] = useState(false);

  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const audioContext = useRef<AudioContext | null>(null);
  const playbackAudio = useRef<HTMLAudioElement | null>(null);
  const currentTimeout = useRef<NodeJS.Timeout | null>(null);

  // Find lesson
  let currentLesson = null;
  let currentModule = null;
  let currentChapter = null;
  let lessonIndex = 0;
  let totalLessons = 0;

  for (const m of modules) {
    const allLessons = m.chapters.flatMap(c => c.lessons);
    const idx = allLessons.findIndex(l => l.id === id);
    if (idx !== -1) {
      currentLesson = allLessons[idx];
      currentModule = m;
      currentChapter = m.chapters.find(c => c.lessons.some(l => l.id === id));
      lessonIndex = idx;
      totalLessons = allLessons.length;
      break;
    }
  }

  if (!currentLesson) return <div>Lesson not found</div>;

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (playbackAudio.current) {
        playbackAudio.current.pause();
        playbackAudio.current = null;
      }
      if (currentTimeout.current) clearTimeout(currentTimeout.current);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Prefetch audio
  useEffect(() => {
    if (currentLesson && currentModule && currentModule.id === 'shlokas') {
      geminiService.generateSpeech(currentLesson.targetSentence, currentModule.id).catch(console.error);
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices(); // Pre-load native voices
    }
  }, [currentLesson, currentModule]);

  // Audio Playback Helpers
  const playNativeTTS = (text: string, lang: string, rate: number): Promise<void> => {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) {
        setTimeout(resolve, 1000); // Fallback delay
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;

      // Find best voice
      const voices = window.speechSynthesis.getVoices();
      const bestVoice = voices.find(v => v.lang.toLowerCase().includes(lang.toLowerCase().split('-')[0]));
      if (bestVoice) utterance.voice = bestVoice;

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve(); // Skip on error

      window.speechSynthesis.speak(utterance);
    });
  };

  const playWithGemini = async (text: string, isNative: boolean): Promise<void> => {
    return new Promise(async (resolve) => {
      try {
        const audioBase64 = await geminiService.generateSpeech(text, isNative ? currentModule?.id : 'en');
        if (audioBase64) {
          if (!audioContext.current) {
            audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
          }
          const ctx = audioContext.current;

          const binaryString = window.atob(audioBase64);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }

          const audioBuffer = ctx.createBuffer(1, bytes.length / 2, 24000);
          const channelData = audioBuffer.getChannelData(0);
          const dataView = new DataView(bytes.buffer);

          for (let i = 0; i < bytes.length / 2; i++) {
            channelData[i] = dataView.getInt16(i * 2, true) / 32768.0;
          }

          const source = ctx.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(ctx.destination);
          source.onended = () => resolve();
          source.start();
        } else {
          resolve();
        }
      } catch (e: any) {
        console.error(e);
        resolve();
      }
    });
  };

  const handlePlayAudio = async () => {
    if (isPlaying) return;
    setIsPlaying(true);

    const langMap: Record<string, string[]> = {
      'eng-hindi': ['hi-IN', 'hi'],
      'eng-marathi': ['mr-IN', 'mr', 'hi-IN', 'hi'], // Fallback to Hindi for Marathi (both use Devanagari script)
      'eng-kannada': ['kn-IN', 'kn'],
      'eng-telugu': ['te-IN', 'te'],
      'eng-tamil': ['ta-IN', 'ta']
    };

    const langCodes = currentModule ? langMap[currentModule.id] : null;

    if (langCodes && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech

      const voices = window.speechSynthesis.getVoices();
      let selectedVoice = null;
      let selectedLangCode = langCodes[0];

      // Try to find a matching voice, including fallbacks
      for (const code of langCodes) {
        selectedVoice = voices.find(v =>
          v.lang.replace('_', '-').toLowerCase() === code.toLowerCase() ||
          v.lang.toLowerCase().startsWith(code.split('-')[0].toLowerCase())
        );
        if (selectedVoice) {
          selectedLangCode = selectedVoice.lang;
          break;
        }
      }

      const utterance = new SpeechSynthesisUtterance(currentLesson.targetSentence);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      utterance.lang = selectedLangCode;
      utterance.rate = 0.85; // Slightly slower for learning

      utterance.onend = () => {
        setIsPlaying(false);
        setHasListened(true);
      };

      utterance.onerror = (e) => {
        console.error("Native TTS error:", e);
        playWithGemini(currentLesson.targetSentence, true).then(() => {
          setIsPlaying(false);
          setHasListened(true);
        });
      };

      window.speechSynthesis.speak(utterance);
    } else {
      await playWithGemini(currentLesson.targetSentence, true);
      setIsPlaying(false);
      setHasListened(true);
    }
  };

  // 3-Step Sequence Logic for Loop Mode
  const runSequence = async () => {
    if (!currentLesson || isRecording) return;
    setIsPlaying(true);

    // Step 1: Slow English
    await playNativeTTS(currentLesson.translation, 'en-US', 0.5); // Very slow

    if (isRecording || !isLooping) {
      setIsPlaying(false);
      return;
    }
    await new Promise(r => currentTimeout.current = setTimeout(r, 800)); // Pause

    // Step 2: Native Translation (Hindi/Marathi/etc)
    const langMap: Record<string, string> = {
      'eng-hindi': 'hi-IN',
      'eng-marathi': 'mr-IN',
      'eng-kannada': 'kn-IN',
      'eng-telugu': 'te-IN',
      'eng-tamil': 'ta-IN'
    };
    const targetLang = currentModule ? langMap[currentModule.id] || 'hi-IN' : 'hi-IN';

    // Use native TTS for regional languages, fallback to gemini if needed
    try {
      await playNativeTTS(currentLesson.targetSentence, targetLang, 0.9);
    } catch (e) {
      await playWithGemini(currentLesson.targetSentence, true);
    }

    if (isRecording || !isLooping) {
      setIsPlaying(false);
      return;
    }
    await new Promise(r => currentTimeout.current = setTimeout(r, 800)); // Pause

    // Step 3: Normal English
    await playNativeTTS(currentLesson.translation, 'en-US', 1.0); // Normal speed

    // Sequence Complete
    setIsPlaying(false);
    setHasListened(true);
  };

  // Effect to handle automatic looping
  useEffect(() => {
    // If loop mode is active, the audio isn't currently playing, 
    // the user has listened at least once, and they aren't recording
    if (isLooping && !isPlaying && hasListened && !isRecording && !isStartingRecording && !recordedAudio) {
      currentTimeout.current = setTimeout(() => {
        runSequence();
      }, 1500); // 1.5 second pause between loops
    }

    return () => {
      if (currentTimeout.current) clearTimeout(currentTimeout.current);
    };
  }, [isLooping, isPlaying, hasListened, isRecording, isStartingRecording, recordedAudio]);

  const toggleLooping = () => {
    if (isLooping) {
      setIsLooping(false);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      setIsLooping(true);
      if (!isPlaying) {
        runSequence();
      }
    }
  };

  const startRecording = async () => {
    if (isStartingRecording || isRecording) return;
    setIsStartingRecording(true);
    try {
      setRecordedAudio(null);
      if (playbackAudio.current) {
        playbackAudio.current.pause();
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorder.current = recorder;
      audioChunks.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunks.current.push(e.data);
      };

      recorder.onstop = async () => {
        const mimeType = mediaRecorder.current?.mimeType || 'audio/webm';
        setAudioMimeType(mimeType);
        const audioBlob = new Blob(audioChunks.current, { type: mimeType });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);

        // Clean up previous URL to avoid memory leaks if recordedAudio already existed
        if (recordedAudio && recordedAudio.startsWith('blob:')) {
          URL.revokeObjectURL(recordedAudio);
        }


        // Stop tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setIsRecording(true);
      // Auto-stop looping if user starts recording manually
      if (isLooping) {
        setIsLooping(false);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Please allow microphone access to practice.");
    } finally {
      setIsStartingRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  const playRecordedAudio = () => {
    if (recordedAudio) {
      if (playbackAudio.current) {
        playbackAudio.current.pause();
      }
      playbackAudio.current = new Audio(recordedAudio);
      playbackAudio.current.play().catch(e => {
        console.error("Audio playback failed:", e);
        alert("Audio playback failed. Your browser might not support this audio format.");
      });
    }
  };

  // This block seems to be a misplaced catch block or error handler.
  // Assuming it was intended to be part of a try-catch for some evaluation logic,
  // but is currently outside any function and causing syntax errors.
  // For now, commenting it out or removing it to fix the structure.
  // console.error(e);
  // setIsProcessing(false);
  // alert("An error occurred during evaluation.");

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white dark:bg-background-dark shadow-xl w-full font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4">
        <button onClick={() => navigate(-1)} className="p-2 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100">Voice Practice</h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </header>

      {/* Progress Section */}
      <div className="px-6 py-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Daily Goal Progress</span>
          <span className="text-sm font-bold text-primary">{lessonIndex + 1}/{totalLessons}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${((lessonIndex + 1) / totalLessons) * 100}%` }}></div>
        </div>
      </div>

      <main className="flex-1 flex flex-col px-6 pt-4 pb-2">
        {/* Step Pill */}
        <div className="flex justify-center mb-4">
          <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
            {!hasListened || isPlaying ? 'STEP 1: LISTEN' : (isRecording || recordedAudio ? 'STEP 3: RECORD' : 'STEP 2: REPEAT')}
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{currentChapter?.title}</p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-2">
            "{currentLesson.targetSentence}"
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 italic">
            {currentLesson.translation}
          </p>
        </div>

        {/* Audio Player Area */}
        <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-3 mb-6 shadow-sm">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayAudio}
              disabled={isPlaying || isRecording}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md shadow-primary/30 hover:bg-primary/90 transition-colors disabled:opacity-50 shrink-0"
              title="Play Normally"
            >
              <span className="material-symbols-outlined text-2xl">{isPlaying ? 'volume_up' : 'play_arrow'}</span>
            </button>
            <button
              onClick={toggleLooping}
              disabled={isRecording}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 ${isLooping ? 'bg-primary/20 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
              title="Play 3-Step Loop Mode"
            >
              <span className={`material-symbols-outlined text-sm ${isLooping ? 'animate-spin-slow text-primary font-bold shadow-sm' : ''}`}>{isLooping ? 'sync' : 'sync_disabled'}</span>
            </button>
          </div>

          {/* Soundwave graphic */}
          <div className="flex-1 flex items-center justify-center gap-1 h-8 px-4 overflow-hidden">
            {isPlaying ? (
              [...Array(20)].map((_, i) => (
                <div key={i} className="w-1.5 bg-primary rounded-full animate-pulse" style={{ height: `${Math.max(20, Math.random() * 100)}%`, animationDelay: `${i * 50}ms` }}></div>
              ))
            ) : (
              [...Array(20)].map((_, i) => (
                <div key={i} className="w-1.5 bg-primary/30 rounded-full" style={{ height: `${20 + Math.abs(Math.sin(i) * 40) + Math.abs(Math.cos(i * 2) * 40)}%` }}></div>
              ))
            )}
          </div>
          {isLooping && <span className="text-[10px] font-bold text-primary shrink-0 uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">Looping</span>}
        </div>

        {/* Recording Area */}
        <div className="flex flex-col items-center justify-center mb-4 flex-1">
          {!recordedAudio ? (
            <>
              <div className="relative mb-3 w-16 h-16 flex items-center justify-center">
                <div className={`absolute inset-0 bg-primary/20 rounded-full scale-[1.3] ${isRecording ? 'animate-ping opacity-100' : 'animate-pulse opacity-70'}`}></div>
                <button
                  onClick={toggleRecording}
                  disabled={isProcessing || isStartingRecording}
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${isRecording ? 'bg-red-500 shadow-red-500/30 text-white' : 'bg-primary shadow-primary/30 hover:scale-105 text-white'} ${(isProcessing || isStartingRecording) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="material-symbols-outlined text-3xl">{isRecording ? 'stop' : 'mic'}</span>
                </button>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium mt-3">
                {isRecording ? 'Recording...' : 'Tap to Record'}
              </p>
            </>
          ) : (
            <div className="w-full flex flex-col gap-3">
              <div className="flex justify-center gap-3">
                <button
                  onClick={startRecording}
                  disabled={isProcessing || isStartingRecording}
                  className="flex-1 py-2.5 rounded-xl font-bold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-sm">replay</span>
                  Retake
                </button>
                <button
                  onClick={playRecordedAudio}
                  disabled={isProcessing}
                  className="flex-1 py-2.5 rounded-xl font-bold text-primary bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">play_arrow</span>
                  Play Back
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Steps Indicator */}
        <div className="flex items-center justify-center gap-4 pb-2 mt-auto">
          <div className="flex flex-col items-center gap-1">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${!hasListened || isPlaying ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>1</div>
            <span className={`text-[10px] font-bold transition-colors ${!hasListened || isPlaying ? 'text-primary' : 'text-slate-400'}`}>Listen</span>
          </div>
          <div className={`w-6 h-[2px] -mt-4 transition-colors ${hasListened && !isPlaying && !isRecording && !recordedAudio ? 'bg-primary/50' : 'bg-slate-200 dark:bg-slate-700'}`}></div>
          <div className="flex flex-col items-center gap-1">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${hasListened && !isPlaying && !isRecording && !recordedAudio ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>2</div>
            <span className={`text-[10px] font-bold transition-colors ${hasListened && !isPlaying && !isRecording && !recordedAudio ? 'text-primary' : 'text-slate-400'}`}>Repeat</span>
          </div>
          <div className={`w-6 h-[2px] -mt-4 transition-colors ${isRecording || recordedAudio ? 'bg-primary/50' : 'bg-slate-200 dark:bg-slate-700'}`}></div>
          <div className="flex flex-col items-center gap-1">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${isRecording || recordedAudio ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>3</div>
            <span className={`text-[10px] font-bold transition-colors ${isRecording || recordedAudio ? 'text-primary' : 'text-slate-400'}`}>Record</span>
          </div>
        </div>
      </main>
    </div>
  );
}
