import React from 'react';
import { ArrowRight, Bot, Compass, Sparkles } from 'lucide-react';
import { styles } from '../../shared/yogaKnowledge.js';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-grain">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-forest-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sand/70 blur-3xl" />

      <div className="section-shell relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="animate-fade-up">
          <div className="pill w-fit">
            <Sparkles size={13} /> Your mindful practice starts here
          </div>

          <h1 className="mt-6 font-display text-[2.65rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
            Your Personal <span className="text-forest-600">AI Yoga</span> Instructor
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/65 sm:text-lg">
            Learn yoga step by step, breathe better and live healthier. Get friendly, personalised
            guidance for every pose, whenever you need it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#tutor" className="btn-primary">
              Get Started <ArrowRight size={17} />
            </a>
            <a href="#styles" className="btn-soft">
              <Compass size={17} /> Explore Yoga Styles
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
            {[
              { value: `${styles.length}`, label: 'yoga styles' },
              { value: 'Step-by-step', label: 'pose guidance' },
              { value: '24/7', label: 'AI tutor' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="font-display text-xl font-semibold text-forest-700">{stat.value}</span>
                <span className="text-xs font-medium text-ink/50">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-ink/50">
            <Bot size={15} className="text-forest-500" />
            General educational guidance — not medical advice.
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg animate-float lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_30px_60px_-25px_rgba(31,72,48,0.4)]">
            <img
              src="/images/yoga/hero.jpg"
              alt="Woman practising yoga on a mat in a peaceful studio"
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">Breathe · Move · Restore</p>
              <p className="mt-1 font-display text-xl font-semibold">Your practice starts here</p>
            </div>
          </div>
          <div className="card absolute -bottom-1 left-2 flex items-center gap-3 px-4 py-3 sm:left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-100 text-forest-600">
              <Sparkles size={17} />
            </span>
            <div>
              <p className="text-xs font-bold text-ink">Breathe in. Begin.</p>
              <p className="text-[11px] text-ink/50">Your mat is ready when you are.</p>
            </div>
          </div>
          <div className="card absolute -right-1 top-8 hidden items-center gap-2 px-4 py-2.5 sm:flex">
            <span className="h-2 w-2 rounded-full bg-forest-500" />
            <span className="text-xs font-semibold text-forest-700">YogaMate AI online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
