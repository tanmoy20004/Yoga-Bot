import React, { useState } from 'react';
import { ArrowRight, Leaf, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Yoga Styles', href: '#styles' },
  { label: 'AI Tutor', href: '#tutor' },
  { label: 'Pose Timer', href: '#pose-timer' },
  { label: 'About Us', href: '#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-100/70 bg-cream/85 backdrop-blur-xl">
      <nav className="section-shell flex h-[72px] items-center justify-between">
        <a href="#home" onClick={close} className="flex items-center gap-2.5" aria-label="YogaMate home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-forest-600 text-white shadow-soft">
            <Leaf size={20} strokeWidth={2.2} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-forest-800">
            Yoga<span className="text-forest-500">Mate</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/65 transition hover:bg-forest-50 hover:text-forest-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#tutor" className="btn-primary !px-5 !py-2.5">
            Start Practising <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="btn-icon md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-forest-100 bg-cream md:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink/75 hover:bg-forest-50 hover:text-forest-700"
              >
                {link.label}
              </a>
            ))}
            <a href="#tutor" onClick={close} className="btn-primary mt-2">
              Start Practising <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
