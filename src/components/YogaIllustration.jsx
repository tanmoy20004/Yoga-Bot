import React from 'react';

export default function YogaIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 520 500" className={className} role="img" aria-label="Illustration of a person meditating in a peaceful setting">
      <defs>
        <linearGradient id="ym-halo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E4F1E6" />
          <stop offset="100%" stopColor="#F6EFE2" />
        </linearGradient>
        <linearGradient id="ym-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F7450" />
          <stop offset="100%" stopColor="#3E8E63" />
        </linearGradient>
      </defs>

      <circle cx="260" cy="238" r="196" fill="url(#ym-halo)" />
      <circle cx="260" cy="238" r="196" fill="none" stroke="#D6E6D7" strokeWidth="2" strokeDasharray="6 10" />
      <circle cx="260" cy="238" r="152" fill="#FDFBF6" opacity="0.55" />

      {/* sun */}
      <circle cx="402" cy="112" r="34" fill="#F5DFB6" opacity="0.9" />
      <g stroke="#E8C68D" strokeWidth="3" strokeLinecap="round">
        <path d="M402 58v-12M402 178v-12M348 112h-12M468 112h-12M364 74l-9-9M449 159l-9-9M364 150l-9 9M449 65l-9 9" />
      </g>

      {/* leaves */}
      <g fill="#BCD9C6" opacity="0.85">
        <path d="M78 128c-24 4-38 21-38 43 24-2 41-17 38-43Z" />
        <path d="M84 122c2-24 18-38 40-40-1 24-16 40-40 40Z" fill="#8FBE9F" />
        <path d="M438 344c22 6 34 24 32 45-23-4-35-21-32-45Z" />
        <path d="M432 350c-4 22-20 34-42 34 3-22 19-35 42-34Z" fill="#8FBE9F" />
      </g>

      {/* floating sparkles */}
      <g fill="#8FBE9F">
        <circle cx="120" cy="292" r="5" />
        <circle cx="146" cy="330" r="3" />
        <circle cx="404" cy="256" r="4" />
        <circle cx="382" cy="292" r="2.5" />
      </g>

      {/* mat */}
      <ellipse cx="260" cy="375" rx="176" ry="22" fill="#EADBC4" />
      <ellipse cx="260" cy="371" rx="164" ry="17" fill="#F6EFE4" />

      {/* meditating figure */}
      <g>
        <circle cx="260" cy="164" r="25" fill="url(#ym-body)" />
        <circle cx="260" cy="131" r="10" fill="#275E42" />
        <path d="M258 189c-24 3-36 27-35 64l1 43h72l1-43c1-37-11-61-35-64Z" fill="url(#ym-body)" />
        <path d="M243 211c-34 14-57 43-66 76" fill="none" stroke="#2F7450" strokeWidth="13" strokeLinecap="round" />
        <path d="M277 211c34 14 57 43 66 76" fill="none" stroke="#2F7450" strokeWidth="13" strokeLinecap="round" />
        <circle cx="176" cy="291" r="9" fill="#275E42" />
        <circle cx="344" cy="291" r="9" fill="#275E42" />
        <path d="M259 288c-38 0-70 7-101 27-22 14-9 33 18 33 37 0 63-11 83-24 20 13 46 24 83 24 27 0 40-19 18-33-31-20-63-27-101-27Z" fill="#275E42" />
        <path d="M160 319c27 10 62 14 99 3-27 24-64 33-99 24-13-4-15-18 0-27Z" fill="#3E8E63" />
        <path d="M360 319c-27 10-62 14-99 3 27 24 64 33 99 24 13-4 15-18 0-27Z" fill="#3E8E63" />
        <path d="M260 296v20" stroke="#8FBE9F" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      </g>

      <g fill="#F5DFB6">
        <circle cx="260" cy="82" r="3" />
        <circle cx="96" cy="212" r="3" />
        <circle cx="428" cy="212" r="3" />
      </g>
    </svg>
  );
}
