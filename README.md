# ⚡ Saathi — Expo + Tailwind + Redux + Router Template

A clean, scalable starter for building React Native apps with Expo, styled using Tailwind (NativeWind), powered by Redux Toolkit, and navigated with Expo Router (Tabs & Drawer included).

This README was updated to include a short project analysis and a sequential image gallery (from `assets/ReadmeImages/`) so you can showcase your app screenshots in order.

---

## Quick Links

- Project root: `app/`, `src/`, `assets/`
- Expo: https://docs.expo.dev/
- Router: https://expo.github.io/router/docs
- NativeWind: https://www.nativewind.dev/
- Redux Toolkit: https://redux-toolkit.js.org/

---

## Project Summary

Saathi is an Expo-based React Native template that combines modern libraries and conventions to help you ship mobile apps faster. It includes:

- File-based navigation via Expo Router with Drawer & Tabs
- Styling with Tailwind (NativeWind)
- State management using Redux Toolkit
- Pre-wired Android & iOS folders and Expo configuration

---

## Installation

Prerequisites: Node.js, yarn or npm, and Expo CLI (optional but recommended).

```sh
# install dependencies
npm install
# or
# yarn install
```

Create a `.env` file if your app needs runtime configuration (see `.env.example` suggestion below).

---

## Development

Start the Expo development server with hot reload:

```sh
npx expo start
```

Open in Expo Go or run on a simulator:

```sh
npx expo run:android
npx expo run:ios
```

---

## Build

Build for production with EAS (recommended):

```sh
eas build
```

Or use the native runners (for local testing):

```sh
npx expo run:android
npx expo run:ios
```

---

## Environment Variables

Add a `.env` in the project root for public environment variables used by Expo (example):

```env
EXPO_PUBLIC_API_URL=https://api.example.com
```

Access in code using `process.env.EXPO_PUBLIC_API_URL` (or Expo's Config plugins / constants if preferred).

---

## Repo Analysis (short)

What I found in this project:

- `app/` — Expo Router routes and screen layouts (file-based navigation)
- `src/` — components, store, config and utilities
- `assets/` — fonts, icons and `ReadmeImages` (screenshots)
- `ios/`, `android/` — native projects for running on devices/emulators
- `package.json`, `tsconfig.json`, and various Expo configs ready for development

Suggestions / next steps:

- Consider adding a `.env.example` to show required env vars.
- Optimize README images (thumbnails for README, keep originals elsewhere or use Git LFS for very large images).
- Add a small CI check to validate Markdown links and image availability.

---

## File Structure (highlight)

```
app/            # Expo Router navigation
src/            # App source code (components, store, utils)
assets/         # Fonts, icons, images
ios/            # iOS native project
android/        # Android native project
```

---

## Assets Gallery — App Screenshots (Sequential)

Below are the images found in `assets/ReadmeImages/` presented in numeric order. I referenced each file directly so GitHub and repo viewers can render them.

Notes:
- If images are large, consider adding smaller `thumb-` versions for the README and keeping full-size in a separate folder.
- Captions are short; replace with descriptive captions as needed.

1. Screenshot 1

<img src="assets/ReadmeImages/img1.jpeg" alt="Screenshot 1 - Saathi" width="600" />

2. Screenshot 2

<img src="assets/ReadmeImages/img2.jpeg" alt="Screenshot 2 - Saathi" width="600" />

3. Screenshot 3

<img src="assets/ReadmeImages/img3.jpeg" alt="Screenshot 3 - Saathi" width="600" />

4. Screenshot 4

<img src="assets/ReadmeImages/img4.jpeg" alt="Screenshot 4 - Saathi" width="600" />

5. Screenshot 5

<img src="assets/ReadmeImages/img5.jpeg" alt="Screenshot 5 - Saathi" width="600" />

6. Screenshot 6

<img src="assets/ReadmeImages/img6.jpeg" alt="Screenshot 6 - Saathi" width="600" />

7. Screenshot 7

<img src="assets/ReadmeImages/img7.jpeg" alt="Screenshot 7 - Saathi" width="600" />

8. Screenshot 8

<img src="assets/ReadmeImages/img8.jpeg" alt="Screenshot 8 - Saathi" width="600" />

9. Screenshot 9

<img src="assets/ReadmeImages/img9.jpeg" alt="Screenshot 9 - Saathi" width="600" />

10. Screenshot 10

<img src="assets/ReadmeImages/img10.jpeg" alt="Screenshot 10 - Saathi" width="600" />

---

## Troubleshooting & Tips

- If images don't show on GitHub: verify file paths and commit the images. GitHub is case sensitive.
- If images are too large for the repo: use Git LFS or an external CDN and link to those URLs instead.
- If TypeScript or lint errors block development, run `npm run lint` and `npx tsc --noEmit` to surface issues.

---

## Extras (suggested)

- Add a `.env.example` to document environment variables.
- Add contributing guidelines and a license file if you intend open source collaboration.

---

If you'd like, I can:

- Create thumbnail copies of these images (e.g., `thumb-01.jpg`) and update the README to use them.
- Add a `.env.example` file.
- Open a PR-ready commit with the README changes and any extra files.

Tell me which of these you'd like next and I will continue.
