import { formatContextForAI, retrieveKnowledge } from '../shared/yogaKnowledge.js';

/** The core YogaMate instructor instructions (kept verbatim). */
export const SYSTEM_INSTRUCTIONS = `You are YogaMate AI, a knowledgeable and friendly yoga instructor. Your knowledge covers Hatha, Vinyasa, Ashtanga, Yin, Iyengar, Kundalini, Bikram, Power, Restorative and Prenatal Yoga.

Always explain yoga poses in simple, beginner-friendly language. Give instructions step by step, including starting position, body movement, breathing technique, duration, benefits and common mistakes.

Adapt your explanations to the user's experience level. Never encourage users to force their bodies into uncomfortable positions. If users report pain, dizziness or discomfort, tell them to stop the practice.

Provide general educational guidance, not medical diagnosis or treatment. For injuries, medical conditions and pregnancy, recommend guidance from an appropriately qualified professional. Be especially careful with heated yoga, inversions and advanced poses.`;

const STYLE_GUIDANCE = `

Additional response guidelines:
- Use short paragraphs and simple bullet lines beginning with "- ". Start step-by-step poses with "Step 1:", "Step 2:" and so on.
- When the question is about a sequence such as Surya Namaskar, explain every step in order, then add Benefits, Common mistakes, Breathing instructions and Safety precautions.
- End with one gentle safety reminder when relevant. Keep answers focused and under 600 words.`;

const MAX_HISTORY = 16;
const MAX_MESSAGE_LENGTH = 4000;

export function sanitizeMessages(input) {
  if (!Array.isArray(input)) return [];
  return input
    .filter((message) => message && (message.role === 'user' || message.role === 'assistant') && typeof message.content === 'string')
    .map((message) => ({ role: message.role, content: message.content.slice(0, MAX_MESSAGE_LENGTH) }))
    .slice(-MAX_HISTORY);
}

export function prepareConversation({ messages, query, styleId, profile }) {
  const retrieved = retrieveKnowledge({ query, styleId, profile });
  const context = formatContextForAI(retrieved);
  return {
    retrieved,
    context,
    conversation: [
      { role: 'system', content: SYSTEM_INSTRUCTIONS + STYLE_GUIDANCE },
      { role: 'system', content: context },
      ...sanitizeMessages(messages),
    ],
  };
}

export async function askOpenAI(conversation, { apiKey, model = 'gpt-4o-mini' }) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: conversation,
        max_tokens: 1200,
        temperature: 0.7,
      }),
      signal: controller.signal,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const detail = data?.error?.message || `OpenAI returned HTTP ${response.status}`;
      throw new Error(detail);
    }

    const text = data?.choices?.[0]?.message?.content;
    if (typeof text !== 'string' || !text.trim()) {
      throw new Error('The AI model returned an empty response.');
    }
    return { text: text.trim(), model };
  } finally {
    clearTimeout(timeout);
  }
}
