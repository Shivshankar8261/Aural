import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

export default function LessonComplete() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, lesson, nextLessonId, xpEarned = 10 } = location.state || {};
  const { streak, xp } = useUserStore();

  if (!result || !lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">error_outline</span>
        <h2 className="text-xl font-bold mb-2">No lesson data</h2>
        <button onClick={() => navigate('/home')} className="bg-primary text-white px-6 py-3 rounded-xl font-bold">
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-primary text-white shadow-xl w-full relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10">
        <div className="size-32 bg-white/20 rounded-full flex items-center justify-center mb-8 animate-bounce" style={{ animationDuration: '2s' }}>
          <div className="size-24 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
          </div>
        </div>

        <h1 className="text-4xl font-black tracking-tight mb-2">Lesson Complete!</h1>
        <p className="text-primary-100 text-lg mb-12">You're making great progress.</p>

        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="material-symbols-outlined text-yellow-300">stars</span>
              <span className="text-sm font-bold text-white/80 uppercase tracking-wider">XP Earned</span>
            </div>
            <p className="text-3xl font-bold">+{xpEarned}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="material-symbols-outlined text-orange-400">local_fire_department</span>
              <span className="text-sm font-bold text-white/80 uppercase tracking-wider">Streak</span>
            </div>
            <p className="text-3xl font-bold">{streak}</p>
          </div>
        </div>
        
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 w-full max-w-xs">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-white/80">Total XP</span>
            <span className="text-lg font-bold">{xp}</span>
          </div>
          <div className="w-full bg-black/20 rounded-full h-2">
            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${(xp % 100)}%` }}></div>
          </div>
          <p className="text-xs text-white/60 mt-2 text-left">{100 - (xp % 100)} XP to next level</p>
        </div>
      </main>

      <footer className="p-6 relative z-10 flex flex-col gap-3">
        {nextLessonId && (
          <button 
            onClick={() => navigate(`/lesson/${nextLessonId}`)}
            className="w-full bg-white text-primary font-bold text-lg py-4 rounded-xl shadow-xl hover:bg-slate-50 transition-all active:scale-[0.98]"
          >
            Next Lesson
          </button>
        )}
        <button 
          onClick={() => navigate('/home')}
          className={`w-full font-bold text-lg py-4 rounded-xl transition-all active:scale-[0.98] ${nextLessonId ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white text-primary shadow-xl hover:bg-slate-50'}`}
        >
          Back to Home
        </button>
      </footer>
    </div>
  );
}
