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
  
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const audioContext = useRef<AudioContext | null>(null);
  const playbackAudio = useRef<HTMLAudioElement | null>(null);

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
    };
  }, []);

  const handlePlayAudio = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    
    try {
      const audioBase64 = await geminiService.generateSpeech(currentLesson.targetSentence);
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
        
        const sampleRate = 24000;
        const numChannels = 1;
        const numSamples = bytes.length / 2;
        
        const audioBuffer = ctx.createBuffer(numChannels, numSamples, sampleRate);
        const channelData = audioBuffer.getChannelData(0);
        
        const dataView = new DataView(bytes.buffer);
        for (let i = 0; i < numSamples; i++) {
          const sample = dataView.getInt16(i * 2, true);
          channelData[i] = sample / 32768.0;
        }
        
        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(ctx.destination);
        source.onended = () => {
          setIsPlaying(false);
          setHasListened(true);
        };
        source.start();
      } else {
        alert("Failed to generate speech. Please try again.");
        setIsPlaying(false);
      }
    } catch (e) {
      console.error(e);
      setIsPlaying(false);
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
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = () => {
          setRecordedAudio(reader.result as string);
        };
        
        // Stop tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setIsRecording(true);
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
      playbackAudio.current.play();
    }
  };

  const submitRecording = async () => {
    if (!recordedAudio) return;
    setIsProcessing(true);
    
    try {
      const result = await geminiService.evaluatePronunciation(recordedAudio, currentLesson.targetSentence, audioMimeType);
      setIsProcessing(false);
      
      if (result) {
        navigate('/feedback', { state: { result, lesson: currentLesson, audio: recordedAudio } });
      } else {
        alert("Failed to evaluate pronunciation. Please try again.");
      }
    } catch (e) {
      console.error(e);
      setIsProcessing(false);
      alert("An error occurred during evaluation.");
    }
  };

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
          <button 
            onClick={handlePlayAudio}
            disabled={isPlaying || isRecording}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md shadow-primary/30 hover:bg-primary/90 transition-colors disabled:opacity-50 shrink-0"
          >
            <span className="material-symbols-outlined text-2xl">{isPlaying ? 'volume_up' : 'play_arrow'}</span>
          </button>
          
          {/* Soundwave graphic */}
          <div className="flex-1 flex items-center justify-center gap-1 h-8 px-4 overflow-hidden">
            {isPlaying ? (
              [...Array(20)].map((_, i) => (
                <div key={i} className="w-1.5 bg-primary rounded-full animate-pulse" style={{ height: `${Math.max(20, Math.random() * 100)}%`, animationDelay: `${i * 50}ms` }}></div>
              ))
            ) : (
              [...Array(20)].map((_, i) => (
                <div key={i} className="w-1.5 bg-primary/30 rounded-full" style={{ height: `${20 + Math.abs(Math.sin(i) * 40) + Math.abs(Math.cos(i*2) * 40)}%` }}></div>
              ))
            )}
          </div>
          <span className="text-sm font-medium text-slate-400 shrink-0">0:03</span>
        </div>

        {/* Recording Area */}
        <div className="flex flex-col items-center justify-center mb-4 flex-1">
          {!recordedAudio ? (
            <>
              <div className="relative mb-3 w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-[1.3] animate-pulse"></div>
                <button 
                  onClick={toggleRecording}
                  disabled={isProcessing || isStartingRecording}
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${isRecording ? 'bg-red-500 shadow-red-500/30' : 'bg-primary shadow-primary/30 hover:scale-105'} ${(isProcessing || isStartingRecording) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="material-symbols-outlined text-3xl text-white">{isRecording ? 'stop' : 'mic'}</span>
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
              <button 
                onClick={submitRecording}
                disabled={isProcessing}
                className="w-full py-3 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Submit for Feedback
                  </>
                )}
              </button>
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
