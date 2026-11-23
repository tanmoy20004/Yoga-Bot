# YogaMate — AI Personal Yoga Tutor

A complete, responsive AI-powered yoga tutor built with React + Vite + Tailwind CSS on the front end and Node.js + Express on the back end. YogaMate teaches poses step by step, explains posture, breathing, hold time, benefits and mistakes, and offers guided practice sessions.

## Features

- **AI yoga chatbot** (`YogaMate AI`) with session-wide conversation history, style context, quick prompts, typing indicator, loading state, error banner and a graceful offline fallback.
- **Structured knowledge base** covering 10 yoga styles (Hatha, Vinyasa, Ashtanga, Yin, Iyengar, Kundalini, Bikram, Power, Restorative and Prenatal), 20+ poses and full sequences. Retrieval-based context is injected into the AI system prompt so answers are grounded in the knowledge base.
- **Guided practice**: choose style, experience level, goal and duration (10/15/20/30 min), then follow pose-by-pose instructions with breathing cues, a countdown timer, previous/next, pause/resume, auto-advance and end-session controls.
- **Personalisation**: profile preferences produce recommended styles and poses, prefill a guided session and are passed to the chatbot.
- **Style explorer with real photos**: 10 image cards with a detail modal, benefits, difficulty, pace, sample sequence and safety notes. Styles can be filtered by level — **Beginner / Intermediate / Advanced** — with counts for each group.
- **Pose timer**: pick a specific yoga pose from a photo library and follow its own suggested hold time, with start/pause/reset, ±15 second adjustments, breathing cues and an "ask AI about this pose" shortcut.
- **Responsive, peaceful design**: cream/green palette, rounded cards, yoga photography, custom SVG illustration, smooth animations and mobile navigation.

## Getting started

```bash
npm install
cp .env.example .env     # optional: add your OpenAI API key
npm run dev
```

- Frontend: http://localhost:5174
- Backend API: http://localhost:3002 (Vite proxies `/api` requests to it)

The ports 5174 and 3002 are used so the app does not collide with other local projects on the common defaults 5173/3001. Change the server with `PORT` in `.env`, the Vite port in `vite.config.js`, and keep `API_PORT` in `vite.config.js` in sync with the server port.

To enable real AI-generated answers, add your key to `.env`:

```env
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini   # optional
```

The key is read **only by the Express server**. It is never included in frontend code or sent to the browser. Without a key, or if the OpenAI call fails, the server automatically answers from the built-in yoga knowledge base and shows a notice in the chat.

## Production

```bash
npm run build
npm start                  # Express serves the built app and the API on port 3002
```

## API

| Method | Endpoint      | Purpose                                                       |
| ------ | ------------- | ------------------------------------------------------------- |
| GET    | `/api/health` | Health check and whether the AI key is configured             |
| GET    | `/api/styles` | Summary of the 10 styles                                      |
| POST   | `/api/chat`   | Chat completion with retrieval context and offline fallback   |
| POST   | `/api/recommend` | Rule-based style/pose recommendations from preferences     |

`POST /api/chat` accepts:

```json
{
  "message": "How can I perform Surya Namaskar?",
  "messages": [{ "role": "user", "content": "..." }],
  "styleId": "hatha",
  "profile": { "level": "Beginner", "goal": "Flexibility", "minutes": 10 }
}
```

## Project structure

```
shared/yogaKnowledge.js     Knowledge base, level groups, pose timers, retrieval, recommendations, offline answers
public/images/yoga/         Locally stored yoga photography (Pexels, free to use)
server/ai.js                System instructions, conversation preparation, OpenAI request
server/index.js             Express API + static production hosting
src/components/             Navbar, hero, styles, chatbot, guided practice, personalisation, about, footer
src/lib/                    Icon map and client-side fallback
```

## Safety note

YogaMate provides general educational guidance, not medical diagnosis or treatment. It advises users to stop on pain, dizziness or discomfort and to seek a qualified professional for injuries, medical conditions, pregnancy, heated yoga and advanced poses.

## Photo credits

Yoga photography in `public/images/yoga/` is from [Pexels](https://www.pexels.com/) (free to use under the Pexels License). Images are stored locally so the site works without an internet connection.
