# Kaizen

One personal daily training app, four pillars, about 40 minutes a day:

- Body: a guided 12 minute posture and stretch routine
- Voice: a 12 minute spoken English practice session
- Mind: one page of a personal development idea
- Craft: one lesson of a 30 day Power BI course

Vanilla HTML, CSS and JS. No frameworks, no build step, no npm. Works offline and installs to the Android home screen from Chrome.

## Deploy

### Option A: Netlify Drop (fastest)

1. Open https://app.netlify.com/drop in your browser.
2. Drag this whole folder onto the page.
3. Netlify gives you a live https URL in a few seconds. Open it once to confirm it loads.

### Option B: GitHub Pages

1. Create a new GitHub repository and upload every file in this folder to the repository root.
2. In the repository, go to Settings, then Pages.
3. Under "Build and deployment", choose "Deploy from a branch", pick the main branch and the root folder, and save.
4. Wait a minute, then open the URL GitHub shows you (https://YOURNAME.github.io/REPO/). Relative paths mean the subdirectory works fine.

## Install on Android

1. Open the deployed https URL in Chrome on the phone.
2. Tap the Chrome menu (three dots), then "Add to Home screen" (on newer Chrome it says "Install app").
3. Confirm. Kaizen now opens full screen from its own icon, and keeps working offline.

Tip: open the app once while online so the service worker can cache the app shell and fonts.

## Notes

- Everything is stored on the device in localStorage. Settings has Export and Import for backups.
- Speech recognition in the Voice pillar uses Chrome's built in recognition, which needs an internet connection. Everything else works offline.
- The optional live AI conversation partner needs an API key (OpenAI or Anthropic). The key is stored only in localStorage on the device and calls go straight from the browser to the provider.
- Daily reminders: a web app cannot reliably notify you while closed, so Settings offers a downloadable daily calendar event (.ics) you can import into Google Calendar. If the app happens to be open at reminder time, it also fires a notification.
