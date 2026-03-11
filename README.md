# Aural - Language Learning App

Aural is a modern, AI-powered language learning application focused on pronunciation and conversational fluency. It uses the Google Gemini API to provide realistic text-to-speech (TTS) and detailed pronunciation feedback.

## Features

- **Multi-Language Support**: Learn Hindi, Marathi, Kannada, Telugu, Tamil, and Sanskrit Shlokas.
- **AI Pronunciation Coach**: Records your voice and uses Gemini to evaluate accuracy, fluency, and pronunciation.
- **Realistic TTS**: Uses Gemini's TTS capabilities to generate natural-sounding audio for target sentences.
- **Progress Tracking**: Tracks your daily streak, confidence score, and XP.
- **Local Persistence**: Saves your progress locally using Zustand's persist middleware.
- **Modern UI**: Built with React, Tailwind CSS, and a mobile-first design approach.

## Setup Instructions

1. **Install Dependencies**
   Make sure you have Node.js installed. Run the following command to install the required packages:
   ```bash
   npm install
   ```

2. **Environment Variables**
   You need a Google Gemini API key to use the AI features.
   Create a `.env` file in the root directory and add your key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Start the Development Server**
   Run the following command to start the Vite development server:
   ```bash
   npm run dev
   ```

4. **Build for Production**
   To build the app for production, run:
   ```bash
   npm run build
   ```

## Architecture

- **`src/components/`**: Reusable UI components (e.g., `BottomNav`).
- **`src/pages/`**: Main application screens (Home, Lesson Practice, Profile, etc.).
- **`src/services/`**: API integration logic (e.g., `geminiService.ts`).
- **`src/store/`**: Global state management using Zustand (`userStore.ts`).
- **`src/data/`**: Static data for lessons and modules (`lessons.ts`).

## Note on Audio

The app uses the Web Audio API to play raw PCM audio data returned by the Gemini API. It also uses the `MediaRecorder` API to capture user audio for evaluation. Ensure your browser has microphone permissions enabled.
