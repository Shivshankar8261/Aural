import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import GoalSelection from './pages/onboarding/GoalSelection';
import LanguageSelection from './pages/onboarding/LanguageSelection';
import SkillLevel from './pages/onboarding/SkillLevel';
import HomeDashboard from './pages/HomeDashboard';
import ModuleLessonList from './pages/ModuleLessonList';
import LessonPractice from './pages/LessonPractice';
import PronunciationFeedback from './pages/PronunciationFeedback';
import ShlokasLearning from './pages/ShlokasLearning';
import ProgressAnalytics from './pages/ProgressAnalytics';
import LessonComplete from './pages/LessonComplete';
import Profile from './pages/Profile';
import FinalDashboard from './pages/FinalDashboard';
import Leaderboard from './pages/Leaderboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 font-display text-slate-900 min-h-screen flex justify-center">
        <div className="w-full max-w-md bg-white shadow-xl relative overflow-x-hidden min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding/goal" element={<GoalSelection />} />
            <Route path="/onboarding/language" element={<LanguageSelection />} />
            <Route path="/onboarding/skill" element={<SkillLevel />} />
            <Route path="/home" element={<HomeDashboard />} />
            <Route path="/module/:id" element={<ModuleLessonList />} />
            <Route path="/lesson/:id" element={<LessonPractice />} />
            <Route path="/feedback" element={<PronunciationFeedback />} />
            <Route path="/shlokas" element={<ShlokasLearning />} />
            <Route path="/progress" element={<ProgressAnalytics />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/lesson-complete" element={<LessonComplete />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<FinalDashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
