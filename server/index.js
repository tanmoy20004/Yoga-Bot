import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { askOpenAI, prepareConversation } from './ai.js';
import {
  buildOfflineAnswer,
  getStyle,
  inferGoal,
  recommend,
  styles,
} from '../shared/yogaKnowledge.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3002;
const API_KEY = process.env.OPENAI_API_KEY && !process.env.OPENAI_API_KEY.startsWith('sk-your-key')
  ? process.env.OPENAI_API_KEY
  : '';
const MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

app.use(express.json({ limit: '256kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', aiConfigured: Boolean(API_KEY), model: API_KEY ? MODEL : null, styles: styles.length });
});

app.get('/api/styles', (_req, res) => {
  res.json({ styles: styles.map(({ id, name, difficulty, focus, benefits, bestFor }) => ({ id, name, difficulty, focus, benefits, bestFor })) });
});

app.post('/api/recommend', (req, res) => {
  const { level, goal, styleId, minutes } = req.body || {};
  const results = recommend({
    level: typeof level === 'string' ? level : 'Beginner',
    goal: typeof goal === 'string' ? goal : 'General Fitness',
    styleId: typeof styleId === 'string' ? styleId : null,
    minutes: Number(minutes) || 15,
  });
  res.json({ recommendations: results });
});

app.post('/api/chat', async (req, res) => {
  const body = req.body || {};
  const rawQuery = typeof body.message === 'string' ? body.message : '';
  const query = rawQuery.trim().slice(0, 4000);

  if (!query) {
    return res.status(400).json({ error: 'Please type a question about yoga.' });
  }

  const styleId = typeof body.styleId === 'string' && getStyle(body.styleId) ? body.styleId : null;
  const profile = {
    level: typeof body.profile?.level === 'string' ? body.profile.level : '',
    goal: (typeof body.profile?.goal === 'string' ? body.profile.goal : '') || inferGoal(query) || '',
    minutes: Number(body.profile?.minutes) || null,
  };

  const { conversation } = prepareConversation({
    messages: body.messages,
    query,
    styleId,
    profile,
  });

  const fallback = (failureNotice) => ({
    reply: buildOfflineAnswer({ query, styleId, profile }),
    source: 'knowledge-base',
    notice: failureNotice,
    styleId,
  });

  if (!API_KEY) {
    return res.json(
      fallback('Offline knowledge mode: add OPENAI_API_KEY to the server .env file for AI-generated answers.'),
    );
  }

  try {
    const { text, model } = await askOpenAI(conversation, { apiKey: API_KEY, model: MODEL });
    return res.json({ reply: text, source: 'openai', model, notice: null, styleId });
  } catch (error) {
    console.error('[YogaMate] AI request failed:', error.message);
    return res.json(
      fallback(`The AI service is unavailable (${error.message}). Showing an answer from the built-in yoga knowledge base instead.`),
    );
  }
});

// Serve the production build from the same Express process when it exists.
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(distPath, 'index.html'), (error) => {
    if (error) next();
  });
});

app.use((error, _req, res, _next) => {
  console.error('[YogaMate] Server error:', error);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

app.listen(PORT, () => {
  console.log(`🧘 YogaMate server running on http://localhost:${PORT}`);
  console.log(API_KEY ? `   AI model: ${MODEL}` : '   AI key not set — offline knowledge base mode');
});
