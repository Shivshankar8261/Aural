import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { modules } from '../data/lessons';
import BottomNav from '../components/BottomNav';

export default function ShlokasLearning() {
  const navigate = useNavigate();
  const shlokasModule = modules.find(m => m.id === 'shlokas');
  const allShlokas = shlokasModule ? shlokasModule.chapters.flatMap(c => c.lessons) : [];
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  if (!shlokasModule) return <div>Shlokas module not found</div>;

  const filteredShlokas = allShlokas.filter(lesson => {
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'morning' && lesson.title.toLowerCase().includes('morning')) ||
      (activeTab === 'peace' && lesson.title.toLowerCase().includes('peace'));
      
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
                          
    return matchesTab && matchesSearch;
  });

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white dark:bg-background-dark shadow-xl overflow-hidden relative w-full">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Sanskrit</span>
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Learning Shlokas</h1>
          </div>
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">{isSearchOpen ? 'close' : 'search'}</span>
          </button>
        </div>

        {isSearchOpen && (
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search shlokas..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
        )}

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'all' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
          >
            All Shlokas
          </button>
          <button 
            onClick={() => setActiveTab('morning')}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'morning' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
          >
            Morning Prayers
          </button>
          <button 
            onClick={() => setActiveTab('peace')}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'peace' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
          >
            Peace Mantras
          </button>
        </div>
      </header>

      <div className="flex-1 px-4 py-6 mb-20 overflow-y-auto">
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/10 rounded-2xl p-6 mb-8 border border-orange-200 dark:border-orange-800/50 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 text-orange-200 dark:text-orange-800/30">
            <span className="material-symbols-outlined text-[120px]">auto_stories</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-orange-800 dark:text-orange-400 mb-2">Daily Shloka</h2>
            <p className="text-orange-900 dark:text-orange-200 font-medium italic mb-4">"Om bhur bhuvah swaha, tatsaviturvarenyam bhargo devasya dhimahi dhiyo yo nah pracodayat"</p>
            <button 
              onClick={() => navigate(`/lesson/${allShlokas[0].id}`)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg shadow-orange-500/30 transition-all"
            >
              Practice Now
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Collection</h3>
          
          {filteredShlokas.length > 0 ? filteredShlokas.map((lesson, index) => (
            <div 
              key={lesson.id} 
              onClick={() => navigate(`/lesson/${lesson.id}`)}
              className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer flex items-start gap-4"
            >
              <div className="size-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{lesson.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{lesson.description}</p>
              </div>
              <div className="text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors mt-2">
                <span className="material-symbols-outlined">play_circle</span>
              </div>
            </div>
          )) : (
            <div className="text-center py-8 text-slate-500">No shlokas found.</div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
