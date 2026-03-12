import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import BottomNav from '../components/BottomNav';
import { modules } from '../data/lessons';

export default function HomeDashboard() {
  const { name, streak, confidenceScore, completedLessons, targetLanguage, xp } = useUserStore();
  const [showNotifications, setShowNotifications] = useState(false);
  
  const currentModule = modules.find(m => m.id === targetLanguage) || modules[0];
  const allLessons = currentModule.chapters.flatMap(c => c.lessons);
  const moduleCompletedLessons = completedLessons.filter(id => allLessons.some(l => l.id === id));
  const nextLessonIndex = moduleCompletedLessons.length % allLessons.length;
  const currentLesson = allLessons[nextLessonIndex];
  const previousLesson = nextLessonIndex > 0 ? allLessons[nextLessonIndex - 1] : null;
  const progressPercentage = Math.round((moduleCompletedLessons.length / allLessons.length) * 100) || 0;

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-background-light dark:bg-background-dark w-full">
      <header className="flex items-center justify-between p-6 pb-2">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary/10">
            <span className="material-symbols-outlined text-primary text-2xl">person</span>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back,</p>
            <h2 className="text-xl font-bold leading-tight tracking-tight">Hi, {name || 'Alex'}</h2>
          </div>
        </div>
        <button onClick={() => setShowNotifications(true)} className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors relative">
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
        </button>
      </header>

      <div className="grid grid-cols-3 gap-3 px-6 py-3">
        <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-primary text-[16px]">analytics</span>
          </div>
          <p className="text-xl font-black text-primary leading-none mb-1">{confidenceScore || 0}%</p>
          <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Confidence</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="size-8 rounded-full bg-orange-500/10 flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-orange-500 text-[16px]">local_fire_department</span>
          </div>
          <p className="text-xl font-black text-slate-900 dark:text-slate-100 leading-none mb-1">{streak || 0}</p>
          <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Streak</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="size-8 rounded-full bg-yellow-500/10 flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-yellow-500 text-[16px]">stars</span>
          </div>
          <p className="text-xl font-black text-slate-900 dark:text-slate-100 leading-none mb-1">{xp || 0}</p>
          <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Points</p>
        </div>
      </div>

      <div className="px-6 mb-6 mt-2">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm mb-4">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">Current Module</p>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{currentModule.title}</h3>
            </div>
            <span className="text-sm font-black text-primary">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 mb-1.5 overflow-hidden">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 text-right">{moduleCompletedLessons.length} of {allLessons.length} lessons completed</p>
        </div>

        <Link to={`/lesson/${currentLesson.id}`} className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
          <span className="material-symbols-outlined">play_circle</span>
          <span>Start Practice</span>
        </Link>
      </div>

      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Daily Lesson</h3>
          <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-full tracking-wider">TODAY</span>
        </div>
        <Link to={`/lesson/${currentLesson.id}`} className="group bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-4 hover:border-primary/30 transition-colors">
          <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-primary text-2xl">record_voice_over</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">{currentLesson.title}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{currentLesson.description}</p>
          </div>
          <div className="size-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </div>
        </Link>
      </div>

      {previousLesson && (
        <div className="px-6 mb-8">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3">Previous Lesson</h3>
          <Link to={`/lesson/${previousLesson.id}`} className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <div className="size-14 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-2xl">check_circle</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-700 dark:text-slate-300 text-base">{previousLesson.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{previousLesson.description}</p>
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white dark:bg-slate-700 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-600">Review</div>
          </Link>
        </div>
      )}

      {currentModule.id !== 'shlokas' && (
        <div className="px-6 mb-8">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3">Explore</h3>
          <Link to="/shlokas" className="group bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/10 rounded-2xl p-4 border border-orange-200 dark:border-orange-800/50 flex items-center gap-4 hover:shadow-md transition-all relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-orange-200 dark:text-orange-800/30 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[80px]">auto_stories</span>
            </div>
            <div className="size-14 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0 relative z-10">
              <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-2xl">self_improvement</span>
            </div>
            <div className="flex-1 relative z-10">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 text-base">Sanskrit Shlokas</h4>
              <p className="text-xs text-orange-800/70 dark:text-orange-200/70 mt-0.5 line-clamp-1">Practice spiritual mantras</p>
            </div>
            <div className="size-8 rounded-full bg-white/50 dark:bg-slate-800/50 flex items-center justify-center text-orange-600 dark:text-orange-400 relative z-10">
              <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </div>
          </Link>
        </div>
      )}

      <div className="flex-grow"></div>

      {showNotifications && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 w-full max-w-sm shadow-2xl border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Notifications</h3>
              <button onClick={() => setShowNotifications(false)} className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-sm">local_fire_department</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Keep your streak alive!</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Practice for 5 minutes today to maintain your {streak > 0 ? streak : 1}-day streak.</p>
                </div>
              </div>
              <div className="flex gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
                <div className="size-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-500">
                  <span className="material-symbols-outlined text-sm">auto_stories</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">New Shlokas added</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Check out the new Peace Mantras in the Spiritual Learning section.</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowNotifications(false)}
              className="w-full mt-6 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-bold py-3 rounded-xl transition-colors"
            >
              Mark all as read
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
