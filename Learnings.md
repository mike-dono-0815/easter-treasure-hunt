# Easter Treasure Hunt — Project Learnings

## Project Overview
An Easter-themed single-page treasure hunt website hosted on GitHub Pages.
Single-player, fully client-side, no framework, plain HTML/CSS/JS.

---

## Assets in Repo
| File | Notes |
|------|-------|
| `Title_AR.png` | Title screen — "Die Suche nach dem Osternest" |
| `BeforeAR.png` | Find-the-difference: original picnic scene |
| `AfterAR.png`  | Find-the-difference: modified picnic scene (5 differences, locations TBD) |
| `Hoppe_durch_den_Garten.mp3/.mp4` | Song for LISTEN stage |
| `Kleine_Schoko_Ohren.mp3/.mp4`    | Song for LISTEN stage |

---

## Aesthetic / Design System
- **Style:** Soft spring morning — pastel sky gradients, warm creamy whites, illustrated Easter storybook feel
- **Background:** Gradient `#aed8f0 → #cce8f4 → #fdf5e8 → #fffcf5` (sky to cream)
- **Fonts:** Fredoka One (titles/buttons) + Nunito (body) via Google Fonts
- **Palette:**
  - Pink: `#f4b8c8` / Lavender: `#cbb8e8` / Yellow: `#f5e060`
  - Blue: `#a8ccf0` / Green: `#b4e0a0` / Peach: `#f8ccac`
  - Gold accent: `#e8a820` / `#f5c840`
  - Text: `#3c2818` / Soft text: `#7a5040`
- **Cards:** `border-radius: 24px`, soft shadow, `rgba(255,252,245,0.93)` background, backdrop-filter blur
- **Buttons:** Pill shape (`border-radius: 50px`), gold gradient primary

---

## Game Flow
```
Intro Screen → Stage 1 → Stage 2 → … → Stage N → Prize Screen
```
- Back button navigates to previously completed stages (read-only view)
- Continue button enabled only when current stage is solved
- No localStorage — fresh session each time
- Cheat: `Ctrl+Shift+Z` skips current stage (testing)

---

## Progress Bar
- Row of Easter egg SVGs (one per stage)
- Locked = gray/cream fill; Current = colored + bounce animation + scale 1.15; Done = colored + green glow
- 5 egg color variants cycling: pink → lavender → yellow → blue → green

---

## All 7 Game Types (implement all, pick 5 for final run)

| # | Type | Mechanic |
|---|------|----------|
| 1 | `WORD_RIDDLE` | Text riddle → type answer → string match |
| 2 | `FIND_DIFFERENCE` | Two images side-by-side → click differences on right image |
| 3 | `QR_SCAN` | Camera opens → scan QR code → validate secret string |
| 4 | `CHESS_PUZZLE` | Static board → click 2 moves in sequence → check correctness |
| 5 | `SCRABBLE` | 10 given letters → form 5 valid words → submit |
| 6 | `SNAKE` | Canvas snake game → reach score threshold |
| 7 | `LISTEN` | Audio clip → multiple choice or text answer |

**Current barebone implements:** `WORD_RIDDLE` + `FIND_DIFFERENCE` only.

---

## WORD_RIDDLE — Stage 1
- Riddle (English): *"Painted with colours, hidden with care / I wait in the garden for you to find there…"*
- Valid answers: `egg`, `easter egg`, `osterei`, `easter eggs`, `eggs`
- Hint: *"You search for me on Easter morning in the garden! 🌸"*
- Mechanics: text input, Enter key submits, shake animation on wrong, hint toggle button

---

## FIND_DIFFERENCE — Stage 2
- Images: `ImgBefore.png` (Original) + `ImgAfter.png` (Find the changes!)
- 5 differences to find; click on right image
- Coordinates stored as fractions (0–1) of image width/height + radius r
- **⚠️ Placeholder zones currently — need real difference coordinates from user**
- Debug mode: press `D` to highlight all zones as yellow circles
- Wrong clicks show red circle that fades after 1.2s
- Found clicks show permanent green circle

---

## QR_SCAN Stage (planned, not yet built)
- Real-world clue: show image of house + hint ("find the Easter Bunny near X")
- User finds physical QR code, scans with camera
- Library: `html5-qrcode` via CDN
- QR generator tool: separate `qr-generator.html` using `qrcode.js` via CDN

---

## CHESS_PUZZLE (planned, not yet built)
- 2-move checkmate, suitable for age ~10
- Need a known simple puzzle (research was interrupted)
- Render board in HTML/CSS, click squares to make moves
- Validate move sequence against correct answer

---

## LISTEN (planned, not yet built)
- Audio file to be provided by user later
- Multiple choice or text answer

---

## Prize Screen
- Confetti of 60 pastel pieces (circles + rectangles, fall animation)
- All progress eggs shown filled/colored
- Gold gradient "You found it! 🌸" title
- "Play Again" button → returns to intro

---

## File Structure (target)
```
index.html          ← entire game
qr-generator.html   ← admin tool for printing QR codes
TitlePage.png
ImgBefore.png
ImgAfter.png
```

---

## Open Questions / TODOs
1. **Find-difference coordinates** — user needs to identify exact locations of the 5 differences in `ImgBefore/After.png`
2. **Chess puzzle** — need specific FEN + 2-move solution (research interrupted)
3. **Audio files** — two songs already in repo: `Hoppe_durch_den_Garten.mp3` and `Kleine_Schoko_Ohren.mp3` (also .mp4 versions). Use one or both for the LISTEN stage.
4. **Language** — ✅ Decided: all game text is in German (matches the images). This applies to all future mini-games too.
5. **Real-world QR stages** — what specific house locations should trigger QR scans?
6. **Which 5 of 7 games** to use in final version
7. **Prize reveal message** — what does the final prize say / where is it hidden?
