import React from 'react';
import { BookOpen, HeartHandshake, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import YogaIllustration from './YogaIllustration.jsx';

const values = [
  {
    icon: BookOpen,
    title: 'Simple, step-by-step learning',
    text: 'Every pose is explained in plain language — starting position, movement, breath and hold time.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety before depth',
    text: 'We never ask you to force a pose. Pain or dizziness means stop, rest and seek guidance.',
  },
  {
    icon: HeartHandshake,
    title: 'A practice for every body',
    text: 'Ten traditions, three experience levels and five goals — guidance that meets you where you are.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-16 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="section-label"><Leaf size={13} /> About YogaMate</span>
          <h2 className="section-title">A calmer way to learn yoga</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/65">
            YogaMate was built for people who want to begin or deepen a yoga practice but do not
            always have a teacher beside them. Our AI tutor combines a structured knowledge of ten
            yoga styles with clear, beginner-friendly guidance you can revisit any time.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            Think of it as a patient practice companion: it explains, reminds you to breathe, suggests
            what to try next and respects your limits.
          </p>

          <div className="mt-8 space-y-4">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-600">
                  <value.icon size={19} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">{value.title}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-ink/55">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-first mx-auto w-full max-w-md lg:order-last">
          <div className="card overflow-hidden p-2">
            <YogaIllustration className="w-full" />
          </div>
          <div className="card absolute bottom-5 left-0 flex items-center gap-3 px-4 py-3 shadow-soft sm:-left-5">
            <Sparkles size={18} className="text-forest-500" />
            <p className="text-[11px] font-semibold text-ink/70">Breathe. Move. Repeat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
