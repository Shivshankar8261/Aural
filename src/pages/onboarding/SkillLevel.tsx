import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';

export default function SkillLevel() {
  const navigate = useNavigate();
  const setSkillLevel = useUserStore((state) => state.setSkillLevel);
  const [selectedLevel, setSelectedLevel] = useState<string>('beginner');

  const levels = [
    { id: 'beginner', title: 'Beginner', desc: "I'm just starting to learn the basics", icon: 'eco' },
    { id: 'intermediate', title: 'Intermediate', desc: 'I can hold simple daily conversations', icon: 'trending_up' },
    { id: 'advanced', title: 'Advanced', desc: 'I can express complex ideas fluently', icon: 'auto_awesome' },
  ];

  const handleContinue = () => {
    if (selectedLevel) {
      setSkillLevel(selectedLevel);
      navigate('/home');
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white dark:bg-background-dark shadow-xl w-full">
      <header className="flex flex-col px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(-1)} className="p-1 -ml-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-900 dark:text-slate-100">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex-1 flex justify-between items-center px-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Step 6 of 8</span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">75% Complete</span>
          </div>
          <button onClick={() => alert('Skill level help coming soon!')} className="flex items-center justify-center size-6 rounded-full bg-slate-400 text-white hover:bg-slate-500 transition-colors">
            <span className="material-symbols-outlined text-[14px] font-bold">question_mark</span>
          </button>
        </div>
        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-3/4 rounded-full"></div>
        </div>
      </header>

      <main className="flex-1 px-6 pt-4 pb-8">
        <h1 className="text-[32px] font-bold leading-[1.1] mb-3 text-slate-900 dark:text-slate-100 tracking-tight">
          What is your speaking<br />level?
        </h1>
        <p className="text-[15px] text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          We'll tailor your audio lessons to match your current proficiency.
        </p>

        <div className="space-y-4">
          {levels.map((level) => (
            <label 
              key={level.id} 
              className={`group relative flex items-center p-5 cursor-pointer rounded-2xl border-2 transition-all duration-200 ${selectedLevel === level.id ? 'border-primary bg-white dark:bg-slate-900' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200'}`}
            >
              <input 
                type="radio" 
                name="skill-level" 
                value={level.id} 
                checked={selectedLevel === level.id}
                onChange={() => setSelectedLevel(level.id)}
                className="sr-only" 
              />
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mr-4">
                <span className="material-symbols-outlined text-[24px]">{level.icon}</span>
              </div>
              <div className="flex-1 pr-4">
                <h3 className="font-bold text-[17px] text-slate-900 dark:text-slate-100 mb-0.5">{level.title}</h3>
                <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-snug">{level.desc}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedLevel === level.id ? 'border-primary bg-primary' : 'border-slate-200 dark:border-slate-700'}`}>
                {selectedLevel === level.id && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
              </div>
            </label>
          ))}
        </div>
      </main>

      <footer className="p-6 bg-white dark:bg-background-dark">
        <button 
          onClick={handleContinue}
          disabled={!selectedLevel}
          className={`w-full font-bold py-4 rounded-full shadow-lg transition-all active:scale-[0.98] text-[16px] ${selectedLevel ? 'bg-primary hover:bg-primary/90 text-white shadow-primary/25' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`}
        >
          Continue
        </button>
        <p className="text-center text-[13px] text-slate-400 mt-4">
          You can change this anytime in your profile settings.
        </p>
      </footer>
    </div>
  );
}
