import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, Clock, Info, Sparkles, X } from 'lucide-react';
import { getStyleIcon } from '../lib/icons.js';
import { getPose, levelGroups, styles, stylesForLevel } from '../../shared/yogaKnowledge.js';

function StyleCard({ style, onLearn }) {
  const Icon = getStyleIcon(style.icon);
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-forest-300 hover:shadow-soft">
      <div className="relative h-40 overflow-hidden">
        <img
          src={style.image}
          alt={`${style.name} practice`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 shadow-sm backdrop-blur" style={{ color: style.accent }}>
          <Icon size={20} strokeWidth={2} />
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-forest-700 shadow-sm backdrop-blur">
          {style.difficulty}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{style.name}</h3>
        <p className="mt-0.5 text-[11px] font-medium tracking-wide text-forest-500">{style.tagline}</p>
        <p className="mt-2.5 line-clamp-3 text-[12px] leading-relaxed text-ink/60">{style.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {style.benefits.slice(0, 2).map((benefit) => (
            <span key={benefit} className="rounded-full border border-forest-100 bg-forest-50/70 px-2.5 py-1 text-[10px] font-semibold text-forest-700">
              {benefit}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-forest-100/80 pt-4">
          <span className="flex items-center gap-1.5 text-[11px] text-ink/45">
            <Clock size={13} /> {style.sessionLength}
          </span>
          <button type="button" onClick={() => onLearn(style)} className="flex items-center gap-1 text-xs font-bold text-forest-600 transition hover:gap-2">
            Learn More <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

function StyleModal({ style, onClose, onAsk, onPractice }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!style) return null;
  const Icon = getStyleIcon(style.icon);
  const preview = style.sequence.slice(0, 5).map(getPose).filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${style.name} details`}
    >
      <div className="soft-scroll max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl">
        <div className="relative h-48 overflow-hidden">
          <img src={style.image} alt={`${style.name} practice`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
          <button type="button" onClick={onClose} className="btn-icon absolute right-5 top-5 bg-white/85" aria-label="Close details">
            <X size={19} />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
              <Icon size={14} /> {style.sanskrit}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">{style.name}</h3>
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-ink/70">{style.description}</p>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Level', value: style.difficulty },
              { label: 'Pace', value: style.pace },
              { label: 'Session', value: style.sessionLength },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-forest-100 bg-white p-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">{item.label}</p>
                <p className="mt-1 text-xs font-semibold text-forest-700">{item.value}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold text-ink"><Check size={16} className="text-forest-500" /> Main benefits</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {style.benefits.map((benefit) => (
                <span key={benefit} className="pill">{benefit}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold text-ink"><Sparkles size={16} className="text-forest-500" /> What makes it unique</h4>
            <ul className="mt-3 space-y-2">
              {style.principles.map((principle) => (
                <li key={principle} className="flex gap-2 text-[13px] leading-relaxed text-ink/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" /> {principle}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink">A sample sequence</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {preview.map((pose) => (
                <span key={pose.id} className="rounded-full border border-forest-100 bg-white px-3 py-1.5 text-[11px] font-semibold text-ink/70">
                  {pose.name}
                </span>
              ))}
              <span className="rounded-full border border-dashed border-forest-200 px-3 py-1.5 text-[11px] text-ink/40">…and more</span>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200/70 bg-amber-50/70 p-4">
            <h4 className="flex items-center gap-2 text-xs font-bold text-amber-900"><Info size={15} /> Breathing & safety</h4>
            <p className="mt-2 text-[12px] leading-relaxed text-amber-900/75">{style.breath}</p>
            <p className="mt-1 text-[12px] leading-relaxed text-amber-900/75">{style.precautions}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => onAsk(style)} className="btn-primary">
              Ask YogaMate AI <ArrowRight size={16} />
            </button>
            <button type="button" onClick={() => onPractice(style)} className="btn-soft">Start a practice</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StylesSection({ onAsk, onPractice }) {
  const [active, setActive] = useState(null);
  const [levelFilter, setLevelFilter] = useState('all');
  const visible = stylesForLevel(levelFilter);
  const activeGroup = levelGroups.find((group) => group.id === levelFilter);

  return (
    <section id="styles" className="section-shell scroll-mt-24 py-16 sm:py-24">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="section-label"><Sparkles size={13} /> Explore the traditions</span>
          <h2 className="section-title">10 yoga styles, one personal path</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60">
            Browse styles by experience level, then let YogaMate AI adapt the guidance to your goal and body.
          </p>
        </div>
        <a href="#tutor" className="btn-soft w-fit">
          Ask the AI Tutor <ArrowRight size={16} />
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <button
          type="button"
          onClick={() => setLevelFilter('all')}
          className={`rounded-2xl border p-4 text-left transition-all ${levelFilter === 'all' ? 'border-forest-500 bg-forest-600 text-white shadow-soft' : 'border-forest-100 bg-white text-ink hover:border-forest-300'}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">All styles</span>
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${levelFilter === 'all' ? 'bg-white/20 text-white' : 'bg-forest-50 text-forest-600'}`}>
              {styles.length}
            </span>
          </div>
          <p className={`mt-1 text-[11px] leading-relaxed ${levelFilter === 'all' ? 'text-white/70' : 'text-ink/50'}`}>Every tradition, side by side.</p>
        </button>

        {levelGroups.map((group) => {
          const Icon = getStyleIcon(group.icon);
          const count = stylesForLevel(group.id).length;
          const selected = levelFilter === group.id;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => setLevelFilter(group.id)}
              className={`rounded-2xl border p-4 text-left transition-all ${selected ? 'border-forest-500 bg-forest-600 text-white shadow-soft' : 'border-forest-100 bg-white text-ink hover:border-forest-300'}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-bold"><Icon size={16} /> {group.label}</span>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${selected ? 'bg-white/20 text-white' : 'bg-forest-50 text-forest-600'}`}>
                  {count}
                </span>
              </div>
              <p className={`mt-1 text-[11px] leading-relaxed ${selected ? 'text-white/70' : 'text-ink/50'}`}>{group.description}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-xs font-semibold text-ink/45">
          Showing <span className="text-forest-700">{visible.length}</span> {activeGroup ? `${activeGroup.shortLabel.toLowerCase()} styles` : 'styles'}
        </p>
        {levelFilter !== 'all' && (
          <button type="button" onClick={() => setLevelFilter('all')} className="flex items-center gap-1 text-xs font-semibold text-forest-600 hover:gap-2">
            <X size={13} /> Clear filter
          </button>
        )}
      </div>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {visible.map((style) => (
          <StyleCard key={style.id} style={style} onLearn={setActive} />
        ))}
      </div>

      <StyleModal
        style={active}
        onClose={() => setActive(null)}
        onAsk={(style) => {
          setActive(null);
          onAsk(style);
        }}
        onPractice={(style) => {
          setActive(null);
          onPractice(style);
        }}
      />
    </section>
  );
}
