import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import { modules } from '../data/lessons';
import BottomNav from '../components/BottomNav';

export default function ModuleLessonList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { completedLessons } = useUserStore();
  const [showInfo, setShowInfo] = useState(false);
  
  const currentModule = modules.find(m => m.id === id) || modules[0];
  const allLessons = currentModule.chapters.flatMap(c => c.lessons);
  const completedCount = allLessons.filter(l => completedLessons.includes(l.id)).length;
  const progressPercent = Math.round((completedCount / allLessons.length) * 100);

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white dark:bg-background-dark shadow-xl overflow-hidden relative w-full">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Active Module</span>
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">{currentModule.title}</h1>
          </div>
          <button onClick={() => setShowInfo(true)} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">info</span>
          </button>
        </div>
      </header>

      {showInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-xl font-bold mb-2">{currentModule.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">{currentModule.subtitle}</p>
            <p className="text-sm text-slate-500 mb-6">This module contains {allLessons.length} lessons designed to help you master pronunciation and conversational skills.</p>
            <button 
              onClick={() => setShowInfo(false)}
              className="w-full bg-primary text-white font-bold py-3 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="px-4 py-2">
        <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-5 border border-primary/10">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Module Progress</p>
              <h2 className="text-2xl font-bold text-primary">{progressPercent}% Complete</h2>
            </div>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-1 rounded-md shadow-sm">
              {completedCount} of {allLessons.length} Lessons
            </p>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-[16px]">headset</span>
              <span>{completedCount * 12} minutes practiced</span>
            </div>
            {completedCount < allLessons.length && (
              <Link 
                to={`/lesson/${allLessons.find(l => !completedLessons.includes(l.id))?.id || allLessons[0].id}`}
                className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-1"
              >
                <span>Continue</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 mb-20">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-lg font-bold">Lessons</h3>
          <span onClick={() => setShowInfo(true)} className="text-xs font-medium text-primary cursor-pointer">View Syllabus</span>
        </div>
        
        <div className="space-y-8">
          {currentModule.chapters.map((chapter, chapterIndex) => {
            const chapterCompletedCount = chapter.lessons.filter(l => completedLessons.includes(l.id)).length;
            const chapterProgressPercent = Math.round((chapterCompletedCount / chapter.lessons.length) * 100);

            return (
            <div key={chapter.id}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">{chapter.title}</h4>
                  {chapterCompletedCount === chapter.lessons.length && (
                    <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                  )}
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{chapterCompletedCount}/{chapter.lessons.length}</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-4 overflow-hidden">
                <div className="bg-primary h-1.5 rounded-full transition-all duration-500" style={{ width: `${chapterProgressPercent}%` }}></div>
              </div>
              <div className="space-y-3">
                {chapter.lessons.map((lesson, lessonIndex) => {
                  const globalLessonIndex = allLessons.findIndex(l => l.id === lesson.id);
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isNext = !isCompleted && (globalLessonIndex === 0 || completedLessons.includes(allLessons[globalLessonIndex - 1].id));
                  const isLocked = !isCompleted && !isNext;

                  if (isCompleted) {
                    return (
                      <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                        <div className="flex items-center justify-center size-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 shrink-0">
                          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Lesson {globalLessonIndex + 1}</p>
                          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{lesson.title}</h4>
                        </div>
                        <div className="text-green-500">
                          <span className="material-symbols-outlined">verified</span>
                        </div>
                      </Link>
                    );
                  }

                  if (isNext) {
                    return (
                      <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-primary shadow-md hover:shadow-lg transition-all cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0">
                          <div className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">UP NEXT</div>
                        </div>
                        <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
                          <span className="material-symbols-outlined">play_circle</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-primary uppercase tracking-tighter">Lesson {globalLessonIndex + 1}</p>
                          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{lesson.title}</h4>
                        </div>
                        <div className="text-primary">
                          <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </div>
                      </Link>
                    );
                  }

                  return (
                    <div key={lesson.id} className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 opacity-60 shrink-0">
                      <div className="flex items-center justify-center size-12 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-400 shrink-0">
                        <span className="material-symbols-outlined">lock</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Lesson {globalLessonIndex + 1}</p>
                        <h4 className="text-base font-semibold text-slate-500 dark:text-slate-400">{lesson.title}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>

        {currentModule.id !== 'shlokas' && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Spiritual Learning</h3>
            </div>
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
      </div>

      <BottomNav />
    </div>
  );
}
