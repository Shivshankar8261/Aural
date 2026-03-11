import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import BottomNav from '../components/BottomNav';

export default function ProgressAnalytics() {
  const navigate = useNavigate();
  const { streak, confidenceScore, xp, completedLessons } = useUserStore();

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = new Date().getDay();
  const currentDayIndex = today === 0 ? 6 : today - 1; // 0 is Monday, 6 is Sunday

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-slate-50 dark:bg-background-dark shadow-xl overflow-hidden relative w-full">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Your Progress</h1>
          <button onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'My Aural Progress',
                text: `I'm on a ${streak} day streak with ${xp} XP on Aural!`,
                url: window.location.href,
              }).catch(console.error);
            } else {
              alert(`I'm on a ${streak} day streak with ${xp} XP on Aural!`);
            }
          }} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">share</span>
          </button>
        </div>
      </header>

      <div className="flex-1 px-4 py-6 mb-20 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-2xl">local_fire_department</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-1">{streak}</h2>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Day Streak</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-2xl">stars</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-1">{xp}</h2>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total XP</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">This Week</h3>
            <span onClick={() => alert('Detailed weekly stats coming soon!')} className="text-sm font-medium text-primary cursor-pointer hover:underline">Details</span>
          </div>
          
          <div className="flex justify-between items-end h-32 mb-4">
            {days.map((day, index) => {
              const isToday = index === currentDayIndex;
              const isPast = index <= currentDayIndex;
              const height = isPast ? (isToday ? '80%' : `${Math.floor(Math.random() * 60) + 20}%`) : '10%';
              
              return (
                <div key={index} className="flex flex-col items-center gap-2 w-8">
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-t-lg h-full flex items-end justify-center relative overflow-hidden">
                    <div 
                      className={`w-full rounded-t-lg transition-all duration-1000 ${isToday ? 'bg-primary' : isPast ? 'bg-primary/40' : 'bg-transparent'}`} 
                      style={{ height }}
                    ></div>
                  </div>
                  <span className={`text-xs font-bold ${isToday ? 'text-primary' : 'text-slate-400'}`}>{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Pronunciation Confidence</h3>
          
          <div className="flex items-center justify-center mb-6">
            <div className="relative size-40 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-slate-100 dark:text-slate-700" />
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="12" 
                  strokeDasharray={`${confidenceScore * 2.51} 251`}
                  className="text-primary transition-all duration-1000 ease-out" 
                />
              </svg>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black text-slate-900 dark:text-slate-100">{confidenceScore}%</span>
                <span className="text-xs font-bold text-slate-500 uppercase">Average</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Vowels</span>
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Consonants</span>
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100">72%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-red-500"></div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Intonation</span>
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100">58%</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Recent Achievements</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            <div className="shrink-0 w-32 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">First Words</h4>
              <p className="text-xs text-slate-500">Complete 1 lesson</p>
            </div>
            
            <div className="shrink-0 w-32 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">local_fire_department</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">On Fire</h4>
              <p className="text-xs text-slate-500">3 day streak</p>
            </div>
            
            <div className="shrink-0 w-32 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center opacity-50 grayscale">
              <div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-500 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">mic</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">Chatterbox</h4>
              <p className="text-xs text-slate-500">10 lessons</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
