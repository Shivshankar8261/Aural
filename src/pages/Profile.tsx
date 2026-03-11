import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import BottomNav from '../components/BottomNav';

export default function Profile() {
  const navigate = useNavigate();
  const { name, email, targetLanguage, skillLevel, setName, setEmail, logout } = useUserStore();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privacyEnabled, setPrivacyEnabled] = useState(true);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSaveProfile = () => {
    setName(editName);
    setEmail(editEmail);
    setIsEditing(false);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-slate-50 dark:bg-background-dark shadow-xl overflow-hidden relative w-full">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Profile</h1>
          <button onClick={() => setIsEditing(!isEditing)} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors text-primary">
            <span className="material-symbols-outlined">{isEditing ? 'close' : 'edit'}</span>
          </button>
        </div>
      </header>

      <div className="flex-1 px-4 py-6 mb-20 overflow-y-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="size-24 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-800 shadow-md">
              <span className="material-symbols-outlined text-primary text-5xl">person</span>
            </div>
          </div>
          
          {isEditing ? (
            <div className="w-full max-w-xs space-y-3">
              <input 
                type="text" 
                value={editName} 
                onChange={(e) => setEditName(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center font-bold text-lg focus:outline-none focus:border-primary"
                placeholder="Your Name"
              />
              <input 
                type="email" 
                value={editEmail} 
                onChange={(e) => setEditEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center text-sm focus:outline-none focus:border-primary"
                placeholder="Your Email"
              />
              <button 
                onClick={handleSaveProfile}
                className="w-full py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors"
              >
                Save Profile
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{name || 'Alex'}</h2>
              <p className="text-slate-500 dark:text-slate-400">{email || 'alex@example.com'}</p>
            </>
          )}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Learning Profile</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">translate</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target Language</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 capitalize">{targetLanguage || 'English'}</p>
                </div>
              </div>
              <button onClick={() => navigate('/onboarding/language')} className="text-primary text-sm font-bold hover:underline">Change</button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Skill Level</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 capitalize">{skillLevel || 'Beginner'}</p>
                </div>
              </div>
              <button onClick={() => navigate('/onboarding/skill')} className="text-primary text-sm font-bold hover:underline">Change</button>
            </div>
          </div>
        </div>

        {targetLanguage !== 'shlokas' && (
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/10 rounded-2xl p-6 border border-orange-200 dark:border-orange-800/50 shadow-sm mb-6 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-orange-200 dark:text-orange-800/30">
              <span className="material-symbols-outlined text-[100px]">auto_stories</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-orange-800 dark:text-orange-400 mb-2">Spiritual Learning</h3>
              <p className="text-sm text-orange-900/80 dark:text-orange-200/80 mb-4">Practice Sanskrit Shlokas and Mantras for peace and clarity.</p>
              <button 
                onClick={() => navigate('/shlokas')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-xl shadow-md shadow-orange-500/20 transition-all"
              >
                Open Shlokas
              </button>
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Account</h3>
          
          <div className="space-y-2">
            <div className="w-full flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-xl transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">notifications</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Notifications</span>
              </div>
              <button 
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${notificationsEnabled ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${notificationsEnabled ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>
            
            <div className="w-full flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-xl transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">lock</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Private Profile</span>
              </div>
              <button 
                onClick={() => setPrivacyEnabled(!privacyEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${privacyEnabled ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${privacyEnabled ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>
            
            <button onClick={() => setShowHelpModal(true)} className="w-full flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-xl transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">help</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Help & Support</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </button>
          </div>
        </div>

        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 font-bold rounded-xl hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors border border-red-100 dark:border-red-900/30"
        >
          <span className="material-symbols-outlined">logout</span>
          Log Out
        </button>
      </div>

      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 w-full max-w-sm shadow-2xl border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Help & Support</h3>
              <button onClick={() => setShowHelpModal(false)} className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 text-sm">Need assistance with Aural? We're here to help!</p>
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">Email Support</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">support@auralapp.com</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">FAQs</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Visit our website for common questions and troubleshooting.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowHelpModal(false)}
              className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
