import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { modules } from '../../data/lessons';

export default function LanguageSelection() {
  const navigate = useNavigate();
  const setTargetLanguage = useUserStore((state) => state.setTargetLanguage);

  const handleSelectLanguage = (langId: string) => {
    setTargetLanguage(langId);
    navigate('/onboarding/skill');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-md mx-auto bg-white dark:bg-background-dark overflow-x-hidden shadow-xl">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Choose a language</h2>
      </div>

      <div className="px-6 py-8">
        <h3 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-bold leading-tight text-center">I want to learn...</h3>
        <p className="text-slate-500 dark:text-slate-400 text-center mt-2 text-sm">Select your target language to begin your aural journey</p>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-8">
        {modules.filter(m => m.id !== 'shlokas').map((module) => (
          <button 
            key={module.id}
            onClick={() => handleSelectLanguage(module.id)}
            className="flex items-center gap-4 bg-slate-50 dark:bg-primary/10 border border-slate-100 dark:border-primary/20 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
          >
            <div className="flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 text-primary shrink-0 size-12">
              <span className="material-symbols-outlined">translate</span>
            </div>
            <div className="flex flex-col items-start flex-1 overflow-hidden">
              <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal truncate">{module.title}</p>
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{module.subtitle}</span>
            </div>
            <div className="shrink-0 text-slate-400 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </button>
        ))}

        <button 
          onClick={() => handleSelectLanguage('shlokas')}
          className="flex items-center gap-4 bg-primary text-white p-4 rounded-xl hover:bg-primary/90 transition-colors group mt-4 shadow-lg shadow-primary/20"
        >
          <div className="flex items-center justify-center rounded-lg bg-white/20 text-white shrink-0 size-12">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <div className="flex flex-col items-start flex-1 overflow-hidden">
            <p className="text-white text-base font-bold leading-normal truncate">Learning Shlokas (Sanskrit)</p>
            <span className="text-xs text-primary-100/70 uppercase tracking-wider text-white/80">Spiritual & Classical</span>
          </div>
          <div className="shrink-0 text-white/70 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </button>
      </div>

      <div className="mt-auto pb-8 flex flex-col items-center">
        <div className="w-24 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mb-6"></div>
        <p className="text-slate-400 dark:text-slate-500 text-xs">More languages coming soon</p>
      </div>
    </div>
  );
}
