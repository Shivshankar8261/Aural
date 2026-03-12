import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import { geminiService } from '../services/geminiService';
import { modules } from '../data/lessons';

export default function PronunciationFeedback() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, lesson, audio } = location.state || {};
  const { completeLesson } = useUserStore();
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);

  const currentModule = modules.find(m => m.chapters.some(c => c.lessons.some(l => l.id === lesson?.id)));

  // Prefetch audio
  useEffect(() => {
    if (lesson && currentModule && currentModule.id === 'shlokas') {
      geminiService.generateSpeech(lesson.targetSentence, currentModule.id).catch(console.error);
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices(); // Pre-load native voices
    }
  }, [lesson, currentModule]);

  if (!result || !lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">error_outline</span>
        <h2 className="text-xl font-bold mb-2">No feedback available</h2>
        <p className="text-slate-500 mb-8">Please complete a practice session first.</p>
        <button onClick={() => navigate('/home')} className="bg-primary text-white px-6 py-3 rounded-xl font-bold">
          Go Home
        </button>
      </div>
    );
  }

  const handleContinue = () => {
    // Calculate XP based on score (max 50 XP for a perfect score)
    const xpEarned = Math.max(5, Math.round(result.score / 2));
    
    // Update progress
    completeLesson(lesson.id, result.score, xpEarned);
    
    // Find next lesson
    let nextLessonId = null;
    if (currentModule) {
      const allLessons = currentModule.chapters.flatMap(c => c.lessons);
      const currentIndex = allLessons.findIndex(l => l.id === lesson.id);
      if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
        nextLessonId = allLessons[currentIndex + 1].id;
      }
    }
    
    navigate('/lesson-complete', { state: { result, lesson, nextLessonId, xpEarned } });
  };

  const handleRetry = () => {
    navigate(`/lesson/${lesson.id}`);
  };

  const playRecording = () => {
    if (audio) {
      const audioObj = new Audio(audio);
      audioObj.play();
    }
  };

  const playWithGemini = async () => {
    try {
      const audioBase64 = await geminiService.generateSpeech(lesson.targetSentence, currentModule?.id);
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
        source.onended = () => setIsPlayingOriginal(false);
        source.start();
      }
    } catch (e: any) {
      console.error(e);
      alert(e.message || "Failed to generate speech. Please try again.");
      setIsPlayingOriginal(false);
    }
  };

  const playOriginal = async () => {
    if (isPlayingOriginal) return;
    setIsPlayingOriginal(true);
    
    const langMap: Record<string, string[]> = {
      'eng-hindi': ['hi-IN', 'hi'],
      'eng-marathi': ['mr-IN', 'mr', 'hi-IN', 'hi'], // Fallback to Hindi for Marathi
      'eng-kannada': ['kn-IN', 'kn'],
      'eng-telugu': ['te-IN', 'te'],
      'eng-tamil': ['ta-IN', 'ta']
    };

    const langCodes = currentModule ? langMap[currentModule.id] : null;

    if (langCodes && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const voices = window.speechSynthesis.getVoices();
      let selectedVoice = null;
      let selectedLangCode = langCodes[0];

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

      const utterance = new SpeechSynthesisUtterance(lesson.targetSentence);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      utterance.lang = selectedLangCode;
      utterance.rate = 0.85;
      
      utterance.onend = () => setIsPlayingOriginal(false);
      utterance.onerror = (e) => {
        console.error("Native TTS error:", e);
        playWithGemini();
      };
      
      window.speechSynthesis.speak(utterance);
    } else {
      playWithGemini();
    }
  };

  // Determine color based on score
  let scoreColor = 'text-green-500';
  let scoreBg = 'bg-green-50 dark:bg-green-900/20';
  let scoreBorder = 'border-green-200 dark:border-green-800';
  let icon = 'sentiment_very_satisfied';
  let message = 'Excellent!';

  if (result.score < 60) {
    scoreColor = 'text-red-500';
    scoreBg = 'bg-red-50 dark:bg-red-900/20';
    scoreBorder = 'border-red-200 dark:border-red-800';
    icon = 'sentiment_dissatisfied';
    message = 'Keep practicing!';
  } else if (result.score < 80) {
    scoreColor = 'text-orange-500';
    scoreBg = 'bg-orange-50 dark:bg-orange-900/20';
    scoreBorder = 'border-orange-200 dark:border-orange-800';
    icon = 'sentiment_satisfied';
    message = 'Good job!';
  }

  // Highlight weak word in the sentence
  const renderSentence = () => {
    if (!result.weakWord) return <p className="text-xl font-medium">{lesson.targetSentence}</p>;
    
    const parts = lesson.targetSentence.split(new RegExp(`(${result.weakWord})`, 'gi'));
    return (
      <p className="text-xl font-medium leading-relaxed">
        {parts.map((part: string, i: number) => 
          part.toLowerCase() === result.weakWord.toLowerCase() ? (
            <span key={i} className="text-red-500 bg-red-50 dark:bg-red-900/30 px-1 rounded border-b-2 border-red-500 font-bold">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    );
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white dark:bg-background-dark shadow-xl w-full">
      <header className="flex items-center p-4 border-b border-slate-100 dark:border-slate-800">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10">Feedback</h2>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col items-center text-center mb-6">
          <div className={`size-32 rounded-full ${scoreBg} border-4 ${scoreBorder} flex items-center justify-center mb-4 relative`}>
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
              <circle 
                cx="50" cy="50" r="46" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeDasharray={`${result.score * 2.89} 289`}
                className={`${scoreColor} transition-all duration-1000 ease-out`} 
              />
            </svg>
            <div className="flex flex-col items-center">
              <span className={`material-symbols-outlined text-4xl ${scoreColor} mb-1`}>{icon}</span>
              <span className={`text-3xl font-black ${scoreColor}`}>{result.score}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{message}</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Overall Score</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-700 text-center">
            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Accuracy</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{result.accuracy || result.score}%</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-700 text-center">
            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Fluency</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{result.fluency || result.score}%</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-700 text-center">
            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Pronunciation</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{result.pronunciation || result.score}%</p>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 mb-6 border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Recording</h4>
            <div className="flex gap-2">
              <button onClick={playOriginal} disabled={isPlayingOriginal} className="flex items-center gap-1 text-slate-600 dark:text-slate-300 text-sm font-bold bg-slate-200 dark:bg-slate-700 px-3 py-1.5 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors disabled:opacity-50">
                <span className="material-symbols-outlined text-[18px]">volume_up</span>
                Original
              </button>
              <button onClick={playRecording} className="flex items-center gap-1 text-primary text-sm font-bold bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                Yours
              </button>
            </div>
          </div>
          {renderSentence()}
          
          {result.weakWord && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-500 mt-0.5">error</span>
                <div>
                  <h5 className="font-bold text-red-700 dark:text-red-400 text-sm mb-1">Needs Improvement: "{result.weakWord}"</h5>
                  <p className="text-sm text-red-600/80 dark:text-red-300/80">{result.feedback}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider mb-3">What we heard</h4>
          <p className="text-slate-700 dark:text-slate-300 italic">"{result.recognizedText}"</p>
        </div>
      </main>

      <footer className="p-6 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4">
        <button 
          onClick={handleRetry}
          className="py-4 rounded-xl font-bold text-primary bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">replay</span>
          Try Again
        </button>
        <button 
          onClick={handleContinue}
          className="py-4 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Continue
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
}
