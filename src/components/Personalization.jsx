import React, { useState } from 'react';
import { ArrowRight, Bot, Check, RotateCcw, SlidersHorizontal, Sparkles, Target } from 'lucide-react';
import { experienceLevels, goals, recommend, styles } from '../../shared/yogaKnowledge.js';

const defaults = {
  level: 'Beginner',
  goal: 'General Fitness',
  styleId: '',
  minutes: 15,
};

export default function Personalization({ profile, setProfile, onStartPractice, onAsk }) {
  const [form, setForm] = useState({ ...defaults, ...(profile || {}) });
  const [results, setResults] = useState(null);

  function submit(event) {
    event.preventDefault();
    const next = { ...form, minutes: Number(form.minutes) };
    setProfile(next);
    setResults(recommend(next));
    try {
      localStorage.setItem('yogamate-profile', JSON.stringify(next));
    } catch {
      // Storage is optional.
    }
  }

  function reset() {
    setForm(defaults);
    setResults(null);
    setProfile(null);
    try {
      localStorage.removeItem('yogamate-profile');
    } catch {
      // Storage is optional.
    }
  }

  const question = `Recommend a ${form.level.toLowerCase()} yoga practice for ${form.goal.toLowerCase()} in about ${form.minutes} minutes${form.styleId ? `, preferably ${styles.find((style) => style.id === form.styleId)?.name || ''}` : ''}. Include poses, breathing and safety tips.`;

  return (
    <section id="personalise" className="bg-forest-50/60 py-16 sm:py-24">
      <div className="section-shell">
        <div className="text-center">
          <span className="section-label justify-center"><Target size={13} /> Made for you</span>
          <h2 className="section-title">Find the practice that fits your life</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/60">
            Tell us a little about you. We will suggest suitable styles and poses — and your AI tutor
            will remember these preferences.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <form onSubmit={submit} className="card p-6 sm:p-7">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <SlidersHorizontal size={18} className="text-forest-500" /> Your preferences
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-ink/45">Experience level</p>
                <div className="flex flex-wrap gap-2">
                  {experienceLevels.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setForm({ ...form, level })}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        form.level === level ? 'border-forest-500 bg-forest-600 text-white' : 'border-forest-100 bg-white text-ink/60 hover:border-forest-300'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-ink/45">Your goal</p>
                <div className="flex flex-wrap gap-2">
                  {goals.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setForm({ ...form, goal })}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        form.goal === goal ? 'border-forest-500 bg-forest-600 text-white' : 'border-forest-100 bg-white text-ink/60 hover:border-forest-300'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="pref-style" className="mb-2 block text-[11px] font-bold uppercase tracking-wide text-ink/45">Preferred style</label>
                <select id="pref-style" className="field" value={form.styleId} onChange={(event) => setForm({ ...form, styleId: event.target.value })}>
                  <option value="">No preference — surprise me</option>
                  {styles.map((style) => (
                    <option key={style.id} value={style.id}>{style.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-ink/45">Available practice time</p>
                <div className="flex flex-wrap gap-2">
                  {[10, 15, 20, 30].map((minutes) => (
                    <button
                      key={minutes}
                      type="button"
                      onClick={() => setForm({ ...form, minutes })}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        Number(form.minutes) === minutes ? 'border-forest-500 bg-forest-600 text-white' : 'border-forest-100 bg-white text-ink/60 hover:border-forest-300'
                      }`}
                    >
                      {minutes} min
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-forest-100 pt-5">
                <button type="submit" className="btn-primary">
                  <Sparkles size={16} /> Show my recommendations
                </button>
                <button type="button" onClick={reset} className="btn-soft !px-4">
                  <RotateCcw size={15} /> Reset
                </button>
              </div>
            </div>
          </form>

          <div className="card p-6 sm:p-7">
            {!results ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="rounded-3xl bg-forest-50 p-5 text-forest-500"><Target size={36} strokeWidth={1.5} /></span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">Your plan appears here</h3>
                <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-ink/55">
                  Complete the preferences and we will match you with the most suitable styles and
                  beginner-friendly poses.
                </p>
              </div>
            ) : (
              <>
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <Check size={18} className="text-forest-500" /> Recommended for you
                </h3>
                <p className="mt-1 text-[11px] text-ink/50">
                  {form.level} · {form.goal} · {form.minutes} minutes{form.styleId ? ` · ${styles.find((style) => style.id === form.styleId)?.name}` : ''}
                </p>

                <div className="mt-5 space-y-4">
                  {results.map((entry, index) => (
                    <div key={entry.style.id} className={`rounded-2xl border p-4 ${index === 0 ? 'border-forest-300 bg-forest-50/70' : 'border-forest-100 bg-white'}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display text-base font-semibold text-ink">
                            {index === 0 && <span className="mr-2 text-xs text-forest-500">★ Best match</span>}
                            {entry.style.name}
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-ink/55">{entry.reasons.join(' · ')}.</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-forest-600">
                          {entry.style.difficulty}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {entry.poses.map((pose) => (
                          <span key={pose.id} className="rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-ink/60">{pose.name}</span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => onStartPractice({ ...form, styleId: entry.style.id, autoStart: true })}
                        className="mt-3 flex items-center gap-1 text-[11px] font-bold text-forest-600 hover:gap-2"
                      >
                        Practise this style <ArrowRight size={13} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-forest-100 pt-5">
                  <button type="button" onClick={() => onStartPractice({ ...form, styleId: form.styleId || results[0].style.id, autoStart: true })} className="btn-primary">
                    <ArrowRight size={16} /> Start guided session
                  </button>
                  <button type="button" onClick={() => onAsk(question)} className="btn-soft">
                    <Bot size={16} /> Ask AI for my plan
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
