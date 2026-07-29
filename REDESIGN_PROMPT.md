# Kaizen redesign prompt (for Claude Design)

Paste everything below the line into Claude Design.

---

Design a complete visual system for **Kaizen**, an installable offline mobile PWA. It is a private daily-training app, built by a husband as a gift for his wife. She is the only user. She is in her thirties, based in Pakistan, speaks Urdu natively and is learning English. She opens it on an Android phone, usually late at night or early in the morning, in short gaps around housework. She is not a tech person and she is easily discouraged.

The app already exists and works. I am asking you to redesign how it looks and feels, not to change what it does.

## The feeling to design for

This is the whole brief in one line: **it should feel like something a person made for one specific person, not like a product.**

Concretely, that means:

- **Warm, not clinical.** Most habit apps look like dashboards. This should look closer to a good paper notebook, a bedside lamp, a letter. Soft, quiet, made of real materials.
- **Never scolding.** She will miss days. The design must make a missed day feel neutral, not like a red mark on a report card. No streak-shaming, no broken-chain guilt, no aggressive red, no "you failed" states. An empty day should look like an empty day, not a wound.
- **Calm under low light.** She often uses it in a dark room next to a sleeping household. Dark mode is the primary case, not an afterthought. It must be genuinely comfortable at 1am at low screen brightness.
- **Unhurried.** Nothing should flash, buzz, or demand. Motion should be slow and soft, the way a page turns.
- **Dignified about language.** She is a beginner in English, not a child. Do not make it look like a kids' app. No cartoon mascots, no confetti, no gamified badges, no XP bars.

## What the app contains

Four pillars. Each has its own accent identity, and today they are meshy gradient blobs:

1. **Body** — a 12 minute guided stretch routine. Animated stick-figure poses, a per-move countdown, a progress scrubber.
2. **Voice** — English speaking practice, roughly 12 minutes. It has four stages she moves through over time: a one-time **placement check**, a **warm-up** (listen and repeat, fill in the frame, answer in one line), a full **guided session** (six timed parts with a live transcript), and a **live conversation** mode. Live transcription appears on screen as she speaks.
3. **Mind** — a 10 minute deep reading. Each reading exists in **English and Urdu**, with a toggle between them. Urdu is set in Noto Nastaliq Urdu, right to left, and needs generous line height (around 2.0 to 2.2) or the script collides.
4. **Craft** — a 30 day Power BI course, one lesson a day.

Plus:

- **Today** — the home screen. Shows the four pillars as the day's work, a greeting, and progress.
- **A month grid of small squares** — one square per day. A square fills in when she does something. Partial credit is real and visible: doing one pillar of four should visibly count. This is the emotional centre of the app, so design it carefully. It should read as gentle accumulation, never as a scoreboard.
- **Notes from Asfer** — short handwritten-feeling notes from her husband that surface on certain days, plus an archive of past ones. Each is signed with his real signature (an SVG of his handwriting that inherits the text colour).
- **A welcome letter** — a long personal letter, currently styled as a piece of cream handmade paper with a torn deckled edge and a soft shadow, set in a handwriting face, signed. This letter is loved as it is. Keep the paper idea intact and make the rest of the app feel like it belongs to the same world.
- **Rest days**, a settings screen, an install guide, and a short first-run tour.

## Current design tokens (redesign these, do not preserve them)

```
light:  bg #F2F6FB   surface #FFFFFF  text #14161C  muted #6B7688  faint #A3ACBB
dark:   bg #0C0F16   surface #161A24  text #EDF0F5  muted #99A3B5  faint #6B7688
type:   Plus Jakarta Sans, plus Noto Nastaliq Urdu for Urdu, plus Dancing Script for the letter
```

The current look is a competent, generic soft-modern app: light blue-grey background, white rounded cards, mesh gradient blobs for the four pillars. It is fine. It is also anonymous, and that is the problem. It looks like a template. I want it to look like it was made by one person for one person.

## What to deliver

1. **A palette** for light and dark, with the four pillar accents. Dark mode should feel like warm lamplight, not cold slate. Give me actual hex values and say what each is for.
2. **A type scale.** Latin and Urdu must sit together comfortably without the Urdu looking like a downgrade. Say which faces and why.
3. **A material language.** What is a card made of here? Paper, cloth, light, glass? Commit to one idea and carry it through. The welcome letter is already paper, so consider whether the whole app should live on paper, or whether the letter should stay the one precious physical object in a softer digital space. Argue for whichever you pick.
4. **Key screens designed:** Today, the month grid, a Body session in progress, a Voice warm-up question with the live transcript, a Mind reading with the English and Urdu toggle, and a note from Asfer.
5. **The empty and missed states**, treated with as much care as the full ones. Show me what three missed days in a row looks like, and make it kind.
6. **Motion notes.** What moves, how slowly, and what must never move.

## Hard constraints

- Mobile only, portrait, Android Chrome. Roughly 375 to 430 px wide. Assume a notch and a bottom gesture bar.
- It must work as a single self-contained HTML file with no build step, no frameworks, and no external assets beyond Google Fonts. Anything that needs a bundler is out.
- It must stay fully usable offline.
- Respect `prefers-reduced-motion`.
- Keep tap targets generous, at least 44 px. She uses this one-handed and half-awake.
- No em dashes or en dashes anywhere in any copy you write. Use full stops or commas.
- Do not design a sign-up, an account, a paywall, a social feed, sharing, or notifications. There is one user and there will only ever be one.

## Tone of the words

If you write any interface copy, it should sound like the app already does: plain, warm, short, and never performative. For reference, the app currently says things like "Even half a square means you showed up" and "Just say it out loud. Nothing is marked wrong." Match that. Never say "Congratulations", never say "You crushed it", never use an exclamation mark.
