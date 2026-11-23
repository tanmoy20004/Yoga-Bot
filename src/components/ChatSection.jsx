import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AlertCircle, Bot, CircleHelp, Leaf, Send, Sparkles, Trash2, User } from 'lucide-react';
import BotReply from './BotReply.jsx';
import { offlineReply } from '../lib/localFallback.js';
import { styles } from '../../shared/yogaKnowledge.js';

const STORAGE_KEY = 'yogamate-chat-session';

const greeting = {
  role: 'assistant',
  content:
    '**Namaste! I am YogaMate AI** 🌿\n\nI can guide you through any yoga pose step by step — posture, breathing, how long to hold it, benefits and mistakes to avoid.\n\nAsk me something like “How can I perform Surya Namaskar?” or pick a prompt below. If you have an injury, medical condition or are pregnant, please check with a qualified professional first.',
  source: 'greeting',
};

const prompts = [
  'How can I perform Surya Namaskar?',
  'Teach me Tree Pose step by step',
  'What should a beginner start with?',
  'How should I breathe during yoga?',
];

function loadMessages() {
  try {
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    if (Array.isArray(stored) && stored.length && stored.every((item) => item.role && item.content)) return stored;
  } catch {
    // Ignore unavailable or corrupted session storage.
  }
  return [greeting];
}

const ChatSection = React.forwardRef(function ChatSection({ selectedStyleId, setSelectedStyleId, profile }, ref) {
  const [messages, setMessages] = useState(loadMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState('');
  const [aiStatus, setAiStatus] = useState('checking');
  const scrollRef = useRef(null);
  const busyRef = useRef(false);
  const sendFnRef = useRef(() => {});
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Storage is optional.
    }
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    let mounted = true;
    fetch('/api/health')
      .then((response) => response.json())
      .then((data) => {
        if (mounted) setAiStatus(data.aiConfigured ? 'online' : 'offline');
      })
      .catch(() => {
        if (mounted) setAiStatus('offline');
      });
    return () => {
      mounted = false;
    };
  }, []);

  async function send(question, styleOverride) {
    const text = String(question || '').trim();
    if (!text || busyRef.current) return;

    const contextStyleId = styleOverride || selectedStyleId;
    const userMessage = { role: 'user', content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setNotice('');
    setLoading(true);
    busyRef.current = true;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          messages: nextMessages,
          styleId: contextStyleId,
          profile,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${response.status})`);
      }

      const data = await response.json();
      setMessages((current) => [
        ...current,
        { role: 'assistant', content: data.reply || 'I could not generate an answer. Please try again.', source: data.source, notice: data.notice },
      ]);
      if (data.notice) setNotice(data.notice);
      if (data.source === 'openai') setAiStatus('online');
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: offlineReply(text, contextStyleId, profile),
          source: 'local-knowledge-base',
        },
      ]);
      setNotice(`Could not reach the AI service (${error.message}). Showing an answer from the offline yoga knowledge base.`);
    } finally {
      setLoading(false);
      busyRef.current = false;
    }
  }

  sendFnRef.current = send;
  useImperativeHandle(
    ref,
    () => ({
      ask(question, styleId) {
        if (styleId) setSelectedStyleId(styleId);
        sendFnRef.current(question, styleId);
        document.getElementById('tutor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      },
    }),
    [setSelectedStyleId],
  );

  const activeStyle = styles.find((style) => style.id === selectedStyleId);

  function clearChat() {
    setMessages([greeting]);
    setNotice('');
    setInput('');
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Storage is optional.
    }
  }

  return (
    <section id="tutor" className="scroll-mt-24 bg-white/70 py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label"><Sparkles size={13} /> The heart of YogaMate</span>
            <h2 className="section-title">Meet your AI yoga tutor</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60">
              Ask anything about poses, breathing or building a practice. Your tutor remembers this
              conversation and adapts to the style you choose.
            </p>
          </div>
          <div className="pill w-fit">
            <Leaf size={13} /> Structured knowledge of {styles.length} styles
          </div>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="card overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-forest-100 bg-forest-50/50 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-600 text-white shadow-soft">
                  <Bot size={21} />
                  <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${aiStatus === 'online' ? 'bg-emerald-500' : aiStatus === 'checking' ? 'bg-amber-400' : 'bg-slate-400'}`} />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">YogaMate AI</p>
                  <p className="text-[11px] text-ink/50">
                    {aiStatus === 'online' ? 'AI connected' : aiStatus === 'checking' ? 'Checking connection…' : 'Offline knowledge mode'}
                  </p>
                </div>
              </div>
              <button type="button" onClick={clearChat} className="btn-icon" title="Clear conversation" aria-label="Clear conversation">
                <Trash2 size={17} />
              </button>
            </div>

            {notice && (
              <div className="flex items-start gap-2 border-b border-amber-200 bg-amber-50 px-5 py-3 text-[12px] leading-relaxed text-amber-900">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <span>{notice}</span>
              </div>
            )}

            <div ref={scrollRef} className="soft-scroll h-[440px] space-y-4 overflow-y-auto bg-cream/40 px-4 py-5 sm:px-6 sm:h-[480px]">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`flex items-start gap-2.5 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${message.role === 'user' ? 'bg-forest-100 text-forest-700' : 'bg-forest-600 text-white'}`}>
                    {message.role === 'user' ? <User size={15} /> : <Bot size={16} />}
                  </span>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm sm:max-w-[78%] ${message.role === 'user' ? 'rounded-tr-sm bg-forest-600 text-white' : 'rounded-tl-sm border border-forest-100 bg-white'}`}>
                    {message.role === 'user' ? (
                      <p className="text-[13px] leading-relaxed sm:text-sm">{message.content}</p>
                    ) : (
                      <BotReply content={message.content} />
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-start gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-600 text-white"><Bot size={16} /></span>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-forest-100 bg-white px-4 py-4">
                    {[0, 1, 2].map((dot) => (
                      <span key={dot} className="h-1.5 w-1.5 animate-blink rounded-full bg-forest-500" style={{ animationDelay: `${dot * 0.15}s` }} />
                    ))}
                    <span className="ml-2 text-[11px] text-ink/45">YogaMate is thinking…</span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-forest-100 bg-white px-4 py-4 sm:px-6">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  send(input);
                }}
                className="flex items-end gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about a pose, breathing or a practice…"
                  aria-label="Ask YogaMate AI"
                  className="field !rounded-2xl"
                  maxLength={4000}
                />
                <button type="submit" disabled={!input.trim() || loading} className="btn-primary !h-[46px] !w-[46px] !rounded-2xl !px-0" aria-label="Send message">
                  <Send size={18} />
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-ink/40">
                YogaMate gives general educational guidance, not medical advice.
              </p>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold text-ink"><CircleHelp size={16} className="text-forest-500" /> Practice context</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-ink/50">The tutor uses this style to tailor every answer.</p>
              <select
                value={selectedStyleId || ''}
                onChange={(event) => setSelectedStyleId(event.target.value || null)}
                className="field mt-4"
                aria-label="Selected yoga style"
              >
                <option value="">General yoga (all styles)</option>
                {styles.map((style) => (
                  <option key={style.id} value={style.id}>{style.name}</option>
                ))}
              </select>
              {activeStyle && (
                <div className="mt-3 rounded-2xl p-3" style={{ backgroundColor: activeStyle.soft }}>
                  <p className="text-xs font-bold text-ink">{activeStyle.name}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-ink/60">{activeStyle.tagline}</p>
                </div>
              )}
              {profile?.level && (
                <div className="mt-4 space-y-1.5 border-t border-forest-100 pt-4 text-[11px] text-ink/60">
                  <p><span className="font-semibold text-ink/80">Level:</span> {profile.level}</p>
                  <p><span className="font-semibold text-ink/80">Goal:</span> {profile.goal || 'General fitness'}</p>
                  <p><span className="font-semibold text-ink/80">Time:</span> {profile.minutes || 15} min</p>
                </div>
              )}
            </div>

            <div className="card p-5">
              <h3 className="text-sm font-bold text-ink">Try asking</h3>
              <div className="mt-3 space-y-2">
                {prompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => send(prompt)}
                    disabled={loading}
                    className="group flex w-full items-start gap-2 rounded-2xl border border-forest-100 bg-cream/60 px-3 py-2.5 text-left text-[12px] leading-snug text-ink/70 transition hover:border-forest-300 hover:bg-forest-50 disabled:opacity-50"
                  >
                    <Sparkles size={13} className="mt-0.5 shrink-0 text-forest-500" />
                    <span>{prompt}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-forest-200 bg-forest-50 p-5">
              <p className="text-xs font-bold text-forest-800">Safety first, always</p>
              <p className="mt-2 text-[11px] leading-relaxed text-forest-800/70">
                If a pose causes pain, dizziness or discomfort, stop. Never force your body into a
                position. For injuries or pregnancy, ask a qualified professional.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
});

export default ChatSection;
