import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useUserStore } from '../store/userStore';
import { modules } from '../data/lessons';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;
  const { targetLanguage } = useUserStore();
  
  const currentLang = targetLanguage || 'eng-hindi';
  const currentModule = modules.find(m => m.id === currentLang) || modules[0];

  const navItems = [
    { name: 'Home', path: '/home', icon: 'home' },
    { name: 'Lessons', path: `/module/${currentLang === 'shlokas' ? 'shlokas' : currentLang}`, icon: 'menu_book' },
    { name: 'Progress', path: '/progress', icon: 'analytics' },
    { name: 'Profile', path: '/profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md border-t border-primary/10 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-4 pb-6 pt-2 z-20">
      <div className="flex gap-2">
        {navItems.map((item) => {
          const isActive = path.startsWith(item.path.split('/')[1] ? `/${item.path.split('/')[1]}` : item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              className={twMerge(
                clsx(
                  'flex flex-1 flex-col items-center justify-center gap-1 transition-colors',
                  isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'
                )
              )}
            >
              <span 
                className="material-symbols-outlined" 
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <p className="text-[10px] font-bold uppercase tracking-tighter">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
