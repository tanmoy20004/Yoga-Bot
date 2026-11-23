import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Pause,
  Play,
  RotateCcw,
  Square,
  Timer,
  Wind,
} from 'lucide-react';
import { buildSession, experienceLevels, goals, getStyle, styles } from '../../shared/yogaKnowledge.js';

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}

function OptionChips({ options, value, onChange, label }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-ink/45">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value;
          const optionLabel = typeof option === 'string' ? option : option.label;
          return (
            <button
              key={optionValue}
              type="button"
              onClick={() => onChange(optionValue)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                value === optionValue
                  ? 'border-forest-500 bg-forest-600 text-white shadow-soft'
                  : 'border-forest-100 bg-white text-ink/60 hover:border-forest-300 hover:text-forest-700'
              }`}
            >
              {optionLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function GuidedPractice({ prefill, onPrefillUsed, profile, selectedStyleId, setSelectedStyleId }) {
  const [form, setForm] = useState({
    styleId: selectedStyleId || profile?.styleId || 'hatha',
    level: profile?.level || 'Beginner',
    goal: profile?.goal || 'General Fitness',
    minutes: profile?.minutes || 10,
  });
  const [session, setSession] = useState(null);
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);

  useEffect(() => {
    if (!prefill) return;
    const next = {
      styleId: prefill.styleId || 'hatha',
      level: prefill.level || 'Beginner',
      goal: prefill.goal || 'General Fitness',
      minutes: [10, 15, 20, 30].includes(Number(prefill.minutes)) ? Number(prefill.minutes) : 10,
    };
    setForm(next);
    if (prefill.styleId) setSelectedStyleId(prefill.styleId);
    if (prefill.autoStart) startSession(next);
    onPrefillUsed?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill]);

  function startSession(config) {
    const built = buildSession(config);
    setSession(built);
    setIndex(0);
    setRemaining(built[0].seconds);
    setRunning(true);
    setCompleted(false);
  }

  function goTo(target) {
    if (!session) return;
    const safeIndex = Math.max(0, Math.min(target, session.length - 1));
    setIndex(safeIndex);
    setRemaining(session[safeIndex].seconds);
    setCompleted(false);
    setRunning(true);
  }

  useEffect(() => {
    if (!session || !running) return undefined;
    const timer = setInterval(() => {
      setRemaining((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [session, running, index]);

  useEffect(() => {
    if (!session || remaining !== 0 || !running) return;
    setRunning(false);
    if (autoAdvance && index < session.length - 1) {
      goTo(index + 1);
    } else {
      setCompleted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining, running, session, index, autoAdvance]);

  const current = session?.[index] || null;
  const style = getStyle(form.styleId);
  const progress = session ? ((index + 1) / session.length) * 100 : 0;
  const ringProgress = current && current.seconds > 0 ? remaining / current.seconds : 0;

  return (
    <section id="practice" className="section-shell scroll-mt-24 py-16 sm:py-24">
      <div className="text-center">
        <span className="section-label justify-center"><Compass size={13} /> Your practice, your pace</span>
        <h2 className="section-title">Guided yoga practice</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/60">
          Choose your style, level, goal and time. We will build a gentle sequence and guide you
          pose by pose with breathing cues and a timer.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[330px_minmax(0,1fr)]">
        <div className="card h-fit p-6">
          <h3 className="font-display text-lg font-semibold text-ink">Set up your session</h3>
          <div className="mt-5 space-y-6">
            <div>
              <label htmlFor="practice-style" className="mb-2 block text-[11px] font-bold uppercase tracking-wide text-ink/45">Yoga style</label>
              <select
                id="practice-style"
                className="field"
                value={form.styleId}
                onChange={(event) => setForm({ ...form, styleId: event.target.value })}
              >
                {styles.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>

            <OptionChips options={experienceLevels} value={form.level} onChange={(value) => setForm({ ...form, level: value })} label="Experience level" />

            <div>
              <label htmlFor="practice-goal" className="mb-2 block text-[11px] font-bold uppercase tracking-wide text-ink/45">Fitness goal</label>
              <select
                id="practice-goal"
                className="field"
                value={form.goal}
                onChange={(event) => setForm({ ...form, goal: event.target.value })}
              >
                {goals.map((goal) => (
                  <option key={goal} value={goal}>{goal}</option>
                ))}
              </select>
            </div>

            <OptionChips
              options={[10, 15, 20, 30].map((value) => ({ value, label: `${value} min` }))}
              value={form.minutes}
              onChange={(value) => setForm({ ...form, minutes: value })}
              label="Session duration"
            />

            <button type="button" onClick={() => startSession(form)} className="btn-primary w-full">
              {session ? <RotateCcw size={16} /> : <Play size={16} />}
              {session ? 'Restart session' : 'Start guided session'}
            </button>

            {style && (
              <p className="rounded-2xl bg-forest-50 p-3 text-[11px] leading-relaxed text-forest-800/70">
                <span className="font-bold">{style.name}:</span> {style.tagline} Move slowly and stop if anything hurts.
              </p>
            )}
          </div>
        </div>

        <div className="card overflow-hidden">
          {!session ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center px-6 py-14 text-center bg-grain">
              <span className="animate-float rounded-3xl bg-forest-50 p-6 text-forest-500">
                <Wind size={42} strokeWidth={1.5} />
              </span>
              <h3 className="mt-7 font-display text-2xl font-semibold text-ink">Your mat is ready</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/55">
                Set your preferences on the left, then press start. We will guide you through each
                pose with clear steps, breathing and timing.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {['Step-by-step cues', 'Breath guidance', 'Pose timer', 'Previous / next poses'].map((item) => (
                  <span key={item} className="pill"><Check size={12} /> {item}</span>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="border-b border-forest-100 bg-forest-50/60 px-5 py-4 sm:px-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-forest-500">
                      Pose {index + 1} of {session.length}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                      {current.name}
                      <span className="ml-2 text-sm font-normal text-ink/45">{current.sanskrit}</span>
                    </h3>
                  </div>
                  <span className="pill"><Clock size={12} /> {form.minutes} min · {form.level} · {form.goal}</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-forest-100">
                  <div className="h-full rounded-full bg-forest-500 transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="flex flex-col items-center justify-center rounded-3xl border border-forest-100 bg-cream/60 p-6">
                  <div className="relative h-36 w-36">
                    <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                      <circle cx="60" cy="60" r="52" fill="none" stroke="#DDEEE2" strokeWidth="9" />
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        fill="none"
                        stroke="#3E8E63"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 52}
                        strokeDashoffset={2 * Math.PI * 52 * (1 - ringProgress)}
                        className="transition-all duration-1000 ease-linear"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Timer size={16} className="text-forest-500" />
                      <span className="font-display text-3xl font-semibold text-forest-800">{formatTime(remaining)}</span>
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-ink/40">{completed ? 'complete' : running ? 'in progress' : 'paused'}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-[11px] leading-relaxed text-ink/50">
                    Suggested hold: <span className="font-semibold text-ink/70">{current.hold}</span>
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest-600">Step-by-step instructions</h4>
                  <ol className="mt-4 space-y-3">
                    {current.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-3 text-[13px] leading-relaxed text-ink/75">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-50 text-[11px] font-bold text-forest-600">
                          {stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-5 rounded-2xl border border-forest-100 bg-forest-50/60 p-4">
                    <p className="flex items-center gap-2 text-xs font-bold text-forest-700"><Wind size={15} /> Breathing</p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-ink/70">{current.breath}</p>
                  </div>
                  {completed && (
                    <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-800">
                      Beautiful work. Take a breath and move on when you are ready.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-forest-100 bg-white px-5 py-4 sm:px-7">
                <div className="flex flex-wrap gap-2">
                  <button type="button" className="btn-soft !px-4 !py-2.5" onClick={() => goTo(index - 1)} disabled={index === 0}>
                    <ChevronLeft size={16} /> Previous
                  </button>
                  <button
                    type="button"
                    className="btn-soft !px-4 !py-2.5"
                    onClick={() => setRunning((value) => !value)}
                    disabled={completed}
                  >
                    {running ? <Pause size={16} /> : <Play size={16} />}
                    {running ? 'Pause' : 'Resume'}
                  </button>
                  <button
                    type="button"
                    className="btn-primary !px-4 !py-2.5"
                    onClick={() => goTo(index + 1)}
                    disabled={index === session.length - 1}
                  >
                    Next Pose <ChevronRight size={16} />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 text-[11px] font-medium text-ink/55">
                    <input
                      type="checkbox"
                      checked={autoAdvance}
                      onChange={(event) => setAutoAdvance(event.target.checked)}
                      className="h-4 w-4 accent-forest-600"
                    />
                    Auto-advance
                  </label>
                  <button type="button" onClick={() => setSession(null)} className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/45 hover:text-red-600">
                    <Square size={12} /> End
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-2xl border border-amber-200/60 bg-amber-50/70 px-4 py-3 text-[11px] leading-relaxed text-amber-900/80">
        <ArrowRight size={14} className="mt-0.5 shrink-0" />
        This is general educational guidance. Stop if you feel pain or dizziness, and seek advice
        from a qualified professional for injuries, medical conditions or pregnancy.
      </div>
    </section>
  );
}
