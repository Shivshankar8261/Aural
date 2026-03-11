import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import BottomNav from '../components/BottomNav';

export default function FinalDashboard() {
  const navigate = useNavigate();
  const { name, xp, streak, confidenceScore, completedLessons } = useUserStore();

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-slate-50 dark:bg-background-dark shadow-xl overflow-hidden relative w-full">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary/10">
              <span className="material-symbols-outlined text-primary text-xl">person</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Aural Learner</p>
              <h1 className="text-lg font-bold leading-tight tracking-tight">{name || 'Alex'}</h1>
            </div>
          </div>
          <button onClick={() => alert('Notifications coming soon!')} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">notifications</span>
          </button>
        </div>
      </header>

      <div className="flex-1 px-4 py-6 mb-20 overflow-y-auto">
        <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 mb-6 text-white shadow-lg shadow-primary/20 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 text-white/10">
            <span className="material-symbols-outlined text-[150px]">graphic_eq</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black mb-1">Great job today!</h2>
            <p className="text-primary-100 mb-6">You've completed your daily goal.</p>
            
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Total XP</span>
                <span className="text-2xl font-bold">{xp}</span>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Lessons</span>
                <span className="text-2xl font-bold">{completedLessons.length}</span>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Streak</span>
                <span className="text-2xl font-bold">{streak}</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Your Stats</h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col">
            <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-xl">analytics</span>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Confidence</p>
            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">{confidenceScore}%</h2>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col">
            <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-xl">timer</span>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Time Spent</p>
            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">{completedLessons.length * 12}m</h2>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Recommended Next</h3>
            <button onClick={() => navigate('/home')} className="text-sm font-bold text-primary hover:underline">View All</button>
          </div>
          
          <div onClick={() => navigate('/home')} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary/30 transition-colors">
            <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">play_circle</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Daily Practice</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Continue your learning journey</p>
            </div>
            <span className="material-symbols-outlined text-slate-400">chevron_right</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
