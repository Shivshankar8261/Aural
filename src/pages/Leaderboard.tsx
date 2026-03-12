import { useState } from 'react';
import { useUserStore } from '../store/userStore';
import BottomNav from '../components/BottomNav';

// Mock data for leaderboard
const MOCK_LEADERBOARD = [
  { id: '1', name: 'Sarah Jenkins', xp: 2450, avatar: 'SJ', color: 'bg-blue-500' },
  { id: '2', name: 'Michael Chen', xp: 2120, avatar: 'MC', color: 'bg-green-500' },
  { id: '3', name: 'Emma Watson', xp: 1980, avatar: 'EW', color: 'bg-purple-500' },
  { id: '4', name: 'David Kim', xp: 1850, avatar: 'DK', color: 'bg-orange-500' },
  { id: '5', name: 'Jessica Alba', xp: 1720, avatar: 'JA', color: 'bg-pink-500' },
  { id: '6', name: 'Robert Fox', xp: 1640, avatar: 'RF', color: 'bg-teal-500' },
  { id: '7', name: 'Olivia Rodrigo', xp: 1510, avatar: 'OR', color: 'bg-indigo-500' },
  { id: '8', name: 'William Smith', xp: 1430, avatar: 'WS', color: 'bg-red-500' },
  { id: '9', name: 'Sophia Loren', xp: 1320, avatar: 'SL', color: 'bg-yellow-500' },
];

export default function Leaderboard() {
  const { name, xp } = useUserStore();
  const [timeframe, setTimeframe] = useState<'weekly' | 'all-time'>('weekly');

  // Combine mock data with current user
  const currentUser = {
    id: 'current-user',
    name: name || 'You',
    xp: xp || 0,
    avatar: name ? name.substring(0, 2).toUpperCase() : 'ME',
    color: 'bg-primary',
    isCurrentUser: true
  };

  const allUsers = [...MOCK_LEADERBOARD, currentUser].sort((a, b) => b.xp - a.xp);
  
  // Find current user's rank
  const currentUserRank = allUsers.findIndex(u => u.id === 'current-user') + 1;

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white dark:bg-background-dark shadow-xl w-full relative pb-20">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 pt-8 pb-4 border-b border-slate-100 dark:border-slate-800">
        <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Leaderboard</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Compete with friends and learners worldwide</p>
        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mt-6">
          <button 
            onClick={() => setTimeframe('weekly')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${timeframe === 'weekly' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
          >
            Weekly
          </button>
          <button 
            onClick={() => setTimeframe('all-time')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${timeframe === 'all-time' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
          >
            All Time
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-2 mb-10 mt-4 h-48">
          {/* 2nd Place */}
          {allUsers[1] && (
            <div className="flex flex-col items-center w-24">
              <div className="relative mb-2">
                <div className={`size-14 rounded-full ${allUsers[1].color} flex items-center justify-center text-white font-bold text-lg border-4 border-white dark:border-slate-900 shadow-md z-10 relative`}>
                  {allUsers[1].avatar}
                </div>
                <div className="absolute -bottom-2 -right-2 size-6 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-black text-slate-600 z-20">2</div>
              </div>
              <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate w-full text-center">{allUsers[1].name}</p>
              <p className="text-[10px] font-bold text-primary mt-0.5">{allUsers[1].xp} XP</p>
              <div className="w-full h-20 bg-slate-100 dark:bg-slate-800 rounded-t-xl mt-2 border-t-4 border-slate-200 dark:border-slate-700"></div>
            </div>
          )}

          {/* 1st Place */}
          {allUsers[0] && (
            <div className="flex flex-col items-center w-28 z-10">
              <div className="relative mb-2">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-400">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>crown</span>
                </div>
                <div className={`size-16 rounded-full ${allUsers[0].color} flex items-center justify-center text-white font-bold text-xl border-4 border-yellow-400 shadow-lg z-10 relative`}>
                  {allUsers[0].avatar}
                </div>
                <div className="absolute -bottom-2 -right-2 size-7 rounded-full bg-yellow-400 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-black text-yellow-900 z-20">1</div>
              </div>
              <p className="text-sm font-black text-slate-900 dark:text-slate-100 truncate w-full text-center">{allUsers[0].name}</p>
              <p className="text-xs font-bold text-primary mt-0.5">{allUsers[0].xp} XP</p>
              <div className="w-full h-28 bg-yellow-50 dark:bg-yellow-900/20 rounded-t-xl mt-2 border-t-4 border-yellow-400"></div>
            </div>
          )}

          {/* 3rd Place */}
          {allUsers[2] && (
            <div className="flex flex-col items-center w-24">
              <div className="relative mb-2">
                <div className={`size-14 rounded-full ${allUsers[2].color} flex items-center justify-center text-white font-bold text-lg border-4 border-white dark:border-slate-900 shadow-md z-10 relative`}>
                  {allUsers[2].avatar}
                </div>
                <div className="absolute -bottom-2 -right-2 size-6 rounded-full bg-orange-200 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-black text-orange-800 z-20">3</div>
              </div>
              <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate w-full text-center">{allUsers[2].name}</p>
              <p className="text-[10px] font-bold text-primary mt-0.5">{allUsers[2].xp} XP</p>
              <div className="w-full h-16 bg-orange-50 dark:bg-orange-900/20 rounded-t-xl mt-2 border-t-4 border-orange-300"></div>
            </div>
          )}
        </div>

        {/* Rest of the list */}
        <div className="flex flex-col gap-3">
          {allUsers.slice(3).map((user, index) => (
            <div 
              key={user.id} 
              className={`flex items-center gap-4 p-3 rounded-2xl border ${user.isCurrentUser ? 'bg-primary/5 border-primary/30 shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700'}`}
            >
              <div className="w-6 text-center font-bold text-slate-400 dark:text-slate-500 text-sm">
                {index + 4}
              </div>
              <div className={`size-10 rounded-full ${user.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                {user.avatar}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className={`font-bold truncate ${user.isCurrentUser ? 'text-primary' : 'text-slate-900 dark:text-slate-100'}`}>
                  {user.name}
                </p>
              </div>
              <div className="font-black text-slate-700 dark:text-slate-300">
                {user.xp} <span className="text-[10px] font-bold text-slate-400 uppercase">XP</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current User Sticky Banner (if not in top 3 and scrolled down) */}
      {currentUserRank > 3 && (
        <div className="sticky bottom-20 left-0 w-full px-4 py-2 z-10">
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 border border-primary-400">
            <div className="w-6 text-center font-black text-white/80 text-sm">
              {currentUserRank}
            </div>
            <div className={`size-10 rounded-full bg-white text-primary flex items-center justify-center font-bold text-sm shrink-0`}>
              {currentUser.avatar}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="font-bold truncate">
                {currentUser.name}
              </p>
            </div>
            <div className="font-black">
              {currentUser.xp} <span className="text-[10px] font-bold text-white/70 uppercase">XP</span>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
