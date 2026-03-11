import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';

export default function GoalSelection() {
  const navigate = useNavigate();
  const setGoal = useUserStore((state) => state.setGoal);
  const [selectedGoal, setSelectedGoal] = useState<string>('');

  const goals = [
    { id: 'speaking', title: 'Improve speaking confidence', desc: 'Focus on daily conversations', icon: 'forum' },
    { id: 'school', title: 'School learning', desc: 'Prepare for exams and classes', icon: 'school' },
    { id: 'job', title: 'Job interviews', desc: 'Advance your professional career', icon: 'work' },
    { id: 'travel', title: 'Travel communication', desc: 'Get around easily in new places', icon: 'flight' },
    { id: 'growth', title: 'Personal growth', desc: 'Keep your mind sharp and curious', icon: 'psychology' },
  ];

  const handleContinue = () => {
    if (selectedGoal) {
      setGoal(selectedGoal);
      navigate('/onboarding/language');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="flex items-center px-4 pt-6 pb-2 justify-between max-w-2xl mx-auto w-full">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Onboarding</h2>
      </div>
      
      <div className="flex flex-col gap-3 p-4 max-w-2xl mx-auto w-full">
        <div className="flex gap-6 justify-between items-end">
          <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal">Goal selection</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">1 of 3</p>
        </div>
        <div className="rounded-full bg-primary/10 h-2.5 overflow-hidden">
          <div className="h-full rounded-full bg-primary" style={{ width: '33%' }}></div>
        </div>
      </div>

      <div className="flex flex-col flex-1 max-w-2xl mx-auto w-full px-4 pt-8 pb-10">
        <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-extrabold leading-tight pb-8">
          Why do you want to learn a language?
        </h1>
        
        <div className="flex flex-col gap-4">
          {goals.map((goal) => (
            <label key={goal.id} className={`group relative flex items-center p-5 cursor-pointer rounded-xl border-2 transition-all duration-200 ${selectedGoal === goal.id ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50'}`}>
              <input 
                type="radio" 
                name="goal" 
                value={goal.id} 
                checked={selectedGoal === goal.id}
                onChange={() => setSelectedGoal(goal.id)}
                className="sr-only" 
              />
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mr-4">
                <span className="material-symbols-outlined">{goal.icon}</span>
              </div>
              <div className="flex-1">
                <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">{goal.title}</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{goal.desc}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedGoal === goal.id ? 'border-primary bg-primary' : 'border-slate-200 dark:border-slate-700'}`}>
                {selectedGoal === goal.id && <span className="material-symbols-outlined text-white text-[16px]">check</span>}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-6 mt-auto">
        <div className="max-w-2xl mx-auto w-full">
          <button 
            onClick={handleContinue}
            disabled={!selectedGoal}
            className={`flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-5 text-lg font-bold leading-normal tracking-wide transition-all active:scale-[0.98] ${selectedGoal ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
