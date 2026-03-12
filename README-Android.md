# Aural Android Migration Guide

The project has been converted from a Google AI Studio frontend application into a full Mobile application using **Capacitor**. The Android studio wrapper is successfully generated under the `android/` directory and loaded with the necessary app assets (icons, splash screens). 

However, since a full Android build environment (Java & Android SDK) is required to compile the native Android `.apk`, please follow the steps below on your macOS machine to finish building and publishing the project.

## Prerequisites for macOS
1. **Node.js** (v18+)
2. **Java Development Kit (JDK 17)**
   ```sh
   brew install openjdk@17
   sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
   ```
3. **Android Studio** (Downloads latest Android SDK & Command Line Tools)
   - Go to Android Studio -> SDK Manager
   - Install SDK 34 (UpsideDownCake) or newer
   - Make sure `ANDROID_HOME` is set in your `~/.zshrc`:
     ```sh
     export ANDROID_HOME=$HOME/Library/Android/sdk
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
     ```

## 1. Local Development (Web)
Run the React-Vite web app normally:
```sh
npm run dev
```

## 2. Syncing Web Changes to Android
Whenever you modify your frontend code (React components, CSS), you must rebuild and sync it with the native Android wrapper:
```sh
npm run build
npx cap sync android
```
*This copies your `dist` bundle into `android/app/src/main/assets/public`.*

## 3. Generating a Debug APK
To build an APK for immediate testing on your emulator or physical Android phone without opening Android Studio:

```sh
cd android
./gradlew assembleDebug
```
**Output Location:** 
`android/app/build/outputs/apk/debug/app-debug.apk`

Test it on a connected device:
```sh
adb install app/build/outputs/apk/debug/app-debug.apk
```

## 4. Release Build Preparation Steps (AAB / Signed APK)
To publish on the Google Play Store, you need an Android App Bundle (AAB) or a signed APK.

1. First, create a Keystore for code-signing (skip if you already have one):
   ```sh
   keytool -genkey -v -keystore aural-release.keystore -alias aural_alias -keyalg RSA -keysize 2048 -validity 10000
   ```
2. Build the Release Bundle:
   ```sh
   cd android
   ./gradlew bundleRelease
   ```
   **Output Location (AAB):**
   `android/app/build/outputs/bundle/release/app-release.aab`
   *(This is the preferred format for Google Play)*

3. Or Build a Release APK (if deploying outside Google Play):
   ```sh
   ./gradlew assembleRelease
   ```
   **Output Location (APK):**
   `android/app/build/outputs/apk/release/app-release-unsigned.apk`

4. Sign the Release APK using `apksigner`:
   ```sh
   apksigner sign --ks aural-release.keystore --out app-release.apk app/build/outputs/apk/release/app-release-unsigned.apk
   ```

## Remaining Issues & Assumptions
* **App State**: The web app does not currently persist data permanently (it uses local state). For persistent data over long periods, you should wire React Context to Capacitor's `Preferences` native plugin.
* **Express Backend**: Although Express and `better-sqlite3` are found in `package.json`, the app relies on the client-side Gemini AI for features. Full-stack execution on-device requires further Native SQLite plugins which were skipped to favor the web-compatible, AI-first architecture.
* **Permissions**: Capacitor `@capacitor/app` handles basic app lifecycles. Microphone or other hardware dependencies via WebRTC may require specific additions (like `RECORD_AUDIO`) to `AndroidManifest.xml` if standard Web APIs get blocked by the native WebView.
