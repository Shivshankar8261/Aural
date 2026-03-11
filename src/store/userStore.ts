import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  name: string;
  email: string;
  isLoggedIn: boolean;
  goal: string;
  targetLanguage: string;
  skillLevel: string;
  streak: number;
  confidenceScore: number;
  completedLessons: string[];
  xp: number;
  login: (name: string, email: string) => void;
  logout: () => void;
  setGoal: (goal: string) => void;
  setTargetLanguage: (lang: string) => void;
  setSkillLevel: (level: string) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  completeLesson: (lessonId: string, score: number, xpEarned: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: 'Prajwal Thanjavur',
      email: '',
      isLoggedIn: false,
      goal: '',
      targetLanguage: '',
      skillLevel: '',
      streak: 0,
      confidenceScore: 0,
      completedLessons: [],
      xp: 0,
      login: (name, email) => set({ name, email, isLoggedIn: true, streak: 1 }),
      logout: () => set({ name: '', email: '', isLoggedIn: false }),
      setGoal: (goal) => set({ goal }),
      setTargetLanguage: (targetLanguage) => set({ targetLanguage }),
      setSkillLevel: (skillLevel) => set({ skillLevel }),
      setName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      completeLesson: (lessonId, score, xpEarned) => set((state) => {
        const newCompleted = state.completedLessons.includes(lessonId) 
          ? state.completedLessons 
          : [...state.completedLessons, lessonId];
        
        // Simple moving average for confidence score
        const newConfidence = state.confidenceScore === 0 
          ? score 
          : Math.round((state.confidenceScore * 0.8) + (score * 0.2));

        return {
          completedLessons: newCompleted,
          confidenceScore: newConfidence,
          xp: state.xp + xpEarned,
        };
      }),
    }),
    {
      name: 'aural-user-storage',
    }
  )
);
