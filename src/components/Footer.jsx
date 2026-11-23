import React from 'react';
import { Heart, Leaf } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Yoga Styles', href: '#styles' },
  { label: 'AI Tutor', href: '#tutor' },
  { label: 'Guided Practice', href: '#practice' },
  { label: 'Pose Timer', href: '#pose-timer' },
  { label: 'About Us', href: '#about' },
];

export default function Footer() {
  return (
    <footer className="border-t border-forest-100 bg-white">
      <div className="section-shell grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-forest-600 text-white"><Leaf size={18} /></span>
            <span className="font-display text-lg font-semibold text-forest-800">Yoga<span className="text-forest-500">Mate</span></span>
          </div>
          <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-ink/55">
            Your personal AI yoga instructor for step-by-step learning, better breathing and a
            practice that fits your life.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-ink/70">Explore</h4>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[12px] text-ink/55 transition hover:text-forest-600">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-ink/70">Good to know</h4>
          <ul className="mt-3 space-y-2 text-[12px] leading-relaxed text-ink/55">
            <li>Beginner-friendly guidance</li>
            <li>Ten structured yoga styles</li>
            <li>Offline knowledge fallback</li>
            <li>Your chat stays in this session</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-forest-50 p-4">
          <h4 className="text-xs font-bold text-forest-800">A gentle reminder</h4>
          <p className="mt-2 text-[11px] leading-relaxed text-forest-800/70">
            YogaMate offers general educational guidance, not medical advice. For injuries,
            medical conditions or pregnancy, please consult an appropriately qualified professional.
          </p>
        </div>
      </div>

      <div className="border-t border-forest-100">
        <div className="section-shell flex flex-wrap items-center justify-between gap-2 py-5 text-[11px] text-ink/45">
          <span>© {new Date().getFullYear()} YogaMate. Made for mindful movement.</span>
          <span className="flex items-center gap-1.5">Built with <Heart size={12} className="text-forest-500" /> and deep breaths.</span>
        </div>
      </div>
    </footer>
  );
}
