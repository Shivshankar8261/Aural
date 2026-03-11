import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="flex items-center bg-white dark:bg-background-dark p-4 justify-between border-b border-primary/10">
        <div className="w-10"></div>
        <h2 className="text-primary text-2xl font-bold leading-tight tracking-tight flex-1 text-center">Aural</h2>
        <div className="w-10 flex justify-end">
          <span onClick={() => alert('Settings coming soon!')} className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity">settings</span>
        </div>
      </header>

      <main className="flex flex-col flex-1 items-center justify-center p-6 max-w-2xl mx-auto w-full">
        <div className="w-full @container mb-8">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-primary/5 dark:bg-primary/10 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10">
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  <span className="material-symbols-outlined text-[120px] text-primary/40">mic</span>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined">graphic_eq</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 max-w-md">
          <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-4xl font-bold leading-tight">
            Speak With Confidence
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed">
            Practice listening, speaking and pronunciation with real-time voice feedback powered by AI.
          </p>
        </div>

        <div className="w-full max-w-sm mt-10 flex flex-col gap-4">
          <Link to="/signup" className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]">
            <span className="truncate">Sign Up</span>
          </Link>
          <Link to="/login" className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-primary/20 bg-transparent text-primary text-lg font-bold hover:bg-primary/5 transition-all active:scale-[0.98]">
            <span className="truncate">Login</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">hearing</span>
            </div>
            <span className="text-xs font-medium text-slate-500">Listen</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">record_voice_over</span>
            </div>
            <span className="text-xs font-medium text-slate-500">Speak</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">check_circle</span>
            </div>
            <span className="text-xs font-medium text-slate-500">Improve</span>
          </div>
        </div>
      </main>
      <footer className="h-10 bg-transparent"></footer>
    </div>
  );
}
