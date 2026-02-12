# Tonight's Movie Prototype (Testable Mock)

This is a lightweight interactive prototype that lets you test the core experience immediately while we build the native iOS app.

## What it demonstrates
- Single nightly recommendation card
- Explainability bullets
- Score chips (IMDb + Letterboxd placeholder values)
- Swap behavior
- Mood lane cards + shuffle behavior
- Minimalist visual styling aligned with the PRD direction

## Run locally
From repo root:

```bash
python3 -m http.server 4173
```

Then open:

- `http://localhost:4173/ux-design/prototype/`

## Suggested smoke test
1. Verify first card loads with provider badge and Play CTA.
2. Click **Swap** and confirm movie, explanation, and lane cards update.
3. Click **Shuffle lane** and confirm the same data refresh behavior.
4. Click **Play** and confirm placeholder play action appears.
5. Toggle dark mode in your OS/browser and verify contrast/readability.
