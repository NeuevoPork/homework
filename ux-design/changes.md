# Tonight’s Movie — iOS Product Requirements Document (PRD)

## 1) Executive summary
**Tonight’s Movie** is a native iOS app that gives each user one high-confidence movie recommendation every night (plus mood-based backups), personalized from IMDb ratings/watch history and constrained to streaming services they already pay for.

This PRD is scoped for **an MVP we can distribute on TestFlight**. The product promise is decision elimination: minimal input, maximum confidence, fast path to play.

## 2) Platform scope (updated)
### In-scope platform for MVP
- Native **iOS app** (SwiftUI-first)
- iPhone support first; iPad adaptation optional in MVP, formalized in v1.1
- TestFlight distribution for internal/external testers

### Out of scope for MVP
- Android app
- Web app parity
- Apple TV app

## 3) UX/UI direction (updated)
Design language should be **modern, minimalist, and inviting**, inspired by Claude-like principles:
- Calm, low-noise interface
- Generous spacing and clear hierarchy
- Soft, warm-neutral surfaces with high readability
- Focused typography with restrained visual accents
- Avoid heavy gradients, crowded carousels, and loud chroma

### Visual style guidelines
- **Color**
  - Background: warm off-white / neutral in light mode; deep charcoal in dark mode
  - Accent: subtle amber/terracotta for CTAs and key highlights
  - Semantic colors: muted success/warning/error that pass WCAG contrast
- **Typography**
  - SF Pro Text/Display, large readable headers, compact supporting copy
  - Primary card title at-a-glance within 1 second
- **Components**
  - Rounded cards with soft elevation (minimal shadows)
  - Compact score chips and provider badges
  - Large primary “Play” CTA, lower-emphasis secondary actions
- **Motion**
  - Subtle transitions (200–300ms), spring only where meaningful
  - No distracting background animation

## 4) Problem statement
Users waste time deciding what to watch because recommendations are generic, watch history is fragmented, and service catalogs are constantly shifting.

Jobs-to-be-done:
- “Give me one thing I’ll probably love tonight.”
- “Only show what I can stream right now.”
- “If I’m in a mood, give me a tiny, high-quality set.”

## 5) Personas
- **Cinephile Optimizer**: values craft and critic context
- **Tired Professional**: wants speed and confidence, not browsing
- **Mood Watcher**: decides via vibe-based lanes

## 6) Product goals & non-goals
### Goals
- One nightly recommendation with high trust and low friction
- Correct streaming availability for selected providers/locale
- Clear explainability (“why this”) without black-box feel
- Continuous learning from explicit + implicit feedback

### Non-goals (MVP)
- Social feed, comments, follows
- TV recommendation support
- Full proprietary metadata stack

## 7) Core iOS user flows
1. **Onboarding (2–4 minutes)**
   - Import IMDb CSV (Files picker)
   - Select streaming services + country
   - Quick preference setup (classics/modern, subtitles, adventurousness)
   - Request push-notification permission with clear value proposition

2. **Nightly recommendation**
   - Push arrives in configured time window
   - Open directly to one primary recommendation card
   - Actions: **Play**, Swap, Save, Not Tonight, Already Seen

3. **Mood lanes (optional)**
   - 6–10 lanes, 5 titles each
   - Mix of safe, on-profile, and adjacent exploration titles

4. **Feedback loop**
   - Immediate reactions: 👍 👎 Too intense Too slow
   - Passive signals: swap rate, time-to-play, completion events

## 8) Functional requirements (MVP)
### Recommendation card
- Title, year, runtime, genres, rating certification
- 1–2 sentence synopsis
- 2–4 bullet “Why we picked this”
- Streaming service badge + deep-link / open URL action
- Score row:
  - IMDb (MVP)
  - Letterboxd (if licensed/supported)
  - Rotten Tomatoes + Metacritic only when licensed

### Settings
- Provider selection
- Content filters (e.g., no horror, no subtitles tonight)
- Notification time window
- Exploration slider (Safe ↔ Adventurous)

## 9) Recommendation system (right-sized)
- Build user taste profile from IMDb ratings/history
- Generate candidate set from content similarity + optional collaborative priors
- Apply hard filters (already seen, blocked content, service availability)
- Rank by predicted enjoyment, novelty, diversity, and nightly context
- Re-rank per mood lane constraints
- Reserve one controlled exploration slot/day

## 10) Data & licensing policy
- **IMDb data**: user-consented import and/or licensed APIs/datasets
- **Availability**: dedicated provider API with locale-aware checks
- **No scraping policy in MVP** for restricted score sources
- If a source is unlicensed, hide that score rather than approximate

## 11) TestFlight readiness requirements (new)
### Build/distribution
- App Store Connect app configured
- Bundle ID, signing, capabilities, and environments finalized
- CI-generated archived builds with symbol upload
- Internal group first; external testers after smoke pass

### QA gates before external TestFlight
- Zero crash on critical path: onboarding → recommendation → play deep-link
- Push notification and deep-link validation on real devices
- Availability correctness spot checks across top providers
- Accessibility baseline: Dynamic Type, VoiceOver labels, contrast
- Privacy disclosures complete in App Privacy details

### Instrumentation for beta
- Track: app open, recommendation impression, Play tap, swap, save, feedback action
- Monitor: crash-free sessions, nightly play rate, median time-to-play

## 12) Quality bars
- App launch to first meaningful recommendation content: <1s on cached data
- Availability correctness target: >99%
- Crash-free sessions target for beta: >99.5%

## 13) Roadmap
- **MVP (TestFlight)**: onboarding import, nightly pick, swaps, basic mood lanes, explanations v1, iOS notifications
- **v1.1**: stronger reranking, smarter lane taxonomy, iPad polish, richer context signals
- **v2**: Android, TV support, household profiles, licensed expanded score coverage

## 14) How to test this now (new)
To make this tangible before native iOS implementation, a clickable prototype is included at `ux-design/prototype/`.

### Run locally
```bash
python3 -m http.server 4173
```
Open:
- `http://localhost:4173/ux-design/prototype/`

### What to validate
- Recommendation card content and hierarchy
- Swap behavior updates the recommendation + explanation + mood lane titles
- Primary vs secondary CTA visual emphasis
- Mood-lane scanability in a minimalist layout
- Light/dark appearance and readability
