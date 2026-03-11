import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

export default function SignUp() {
  const navigate = useNavigate();
  const login = useUserStore((state) => state.login);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      login(name, email);
      navigate('/onboarding/language');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white dark:bg-background-dark/50 overflow-hidden">
      <div className="flex items-center bg-white dark:bg-transparent p-4 pb-2 justify-between">
        <div className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center cursor-pointer" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1">Sign Up</h2>
      </div>

      <div className="px-6 pt-8 pb-4">
        <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-[32px] font-bold leading-tight text-center">Create your account</h1>
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-2 text-center">Start your aural language journey today</p>
      </div>

      <form onSubmit={handleSignUp} className="flex flex-col gap-4 px-6 py-4">
        <label className="flex flex-col gap-2">
          <p className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal px-1">Full Name</p>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input flex w-full rounded-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary border border-primary/20 bg-white dark:bg-background-dark/80 h-14 placeholder:text-slate-400 p-[15px] text-base font-normal" 
            placeholder="Enter your full name" 
          />
        </label>
        
        <label className="flex flex-col gap-2">
          <p className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal px-1">Email</p>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input flex w-full rounded-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary border border-primary/20 bg-white dark:bg-background-dark/80 h-14 placeholder:text-slate-400 p-[15px] text-base font-normal" 
            placeholder="name@example.com" 
          />
        </label>
        
        <label className="flex flex-col gap-2">
          <p className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal px-1">Password</p>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input flex w-full rounded-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary border border-primary/20 bg-white dark:bg-background-dark/80 h-14 placeholder:text-slate-400 p-[15px] text-base font-normal" 
              placeholder="Create a password" 
            />
            <span onClick={() => setShowPassword(!showPassword)} className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-primary transition-colors">{showPassword ? 'visibility_off' : 'visibility'}</span>
          </div>
        </label>

        <div className="flex flex-col gap-3 py-4">
          <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-xl transition-colors duration-200">
            Create Account
          </button>
          
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-primary/10"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-sm">or</span>
            <div className="flex-grow border-t border-primary/10"></div>
          </div>
          
          <button type="button" onClick={() => alert('Google Sign In coming soon!')} className="w-full bg-white dark:bg-background-dark border border-primary/20 hover:bg-slate-50 dark:hover:bg-primary/10 text-slate-900 dark:text-slate-100 font-semibold h-14 rounded-xl flex items-center justify-center gap-3 transition-colors duration-200">
            <span className="material-symbols-outlined text-red-500">g_translate</span>
            Continue with Google
          </button>
        </div>
      </form>

      <div className="px-6 pb-10 pt-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
        </p>
      </div>

      <div className="absolute -bottom-24 -right-24 size-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -top-24 -left-24 size-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}
