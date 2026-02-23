// Hero banner with brand identity, botanical pattern, and introductory copy.

import { Cormorant_Garamond } from 'next/font/google';

// Serif typeface scoped to the hero headline for an institutional, editorial feel.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

function LeafLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 19 Q7 8 18 5 Q19 13 12 17 Q8 19.5 3 19Z" fill="currentColor" />
      <path
        d="M3 19 Q8 14 14 10"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BotanicalPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="botanical" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Primary leaf */}
          <path
            d="M18 65 Q28 42 48 36 Q45 58 28 65 Q23 67 18 65Z"
            fill="none"
            stroke="#2A5C1A"
            strokeWidth="0.9"
            opacity="0.14"
          />
          <path
            d="M18 65 Q32 57 42 46"
            stroke="#2A5C1A"
            strokeWidth="0.5"
            opacity="0.10"
            fill="none"
          />
          {/* Grain stalk */}
          <line x1="93" y1="28" x2="93" y2="96" stroke="#7A6340" strokeWidth="0.8" opacity="0.12" />
          <ellipse cx="93" cy="31" rx="4" ry="6.5" fill="none" stroke="#7A6340" strokeWidth="0.8" opacity="0.12" />
          <ellipse cx="89" cy="42" rx="3.5" ry="5.5" fill="none" stroke="#7A6340" strokeWidth="0.7" opacity="0.10" />
          <ellipse cx="97" cy="42" rx="3.5" ry="5.5" fill="none" stroke="#7A6340" strokeWidth="0.7" opacity="0.10" />
          {/* Accent dots */}
          <circle cx="60" cy="16" r="1.8" fill="#C4A96D" opacity="0.18" />
          <circle cx="10" cy="100" r="1.4" fill="#C4A96D" opacity="0.14" />
          <circle cx="108" cy="75" r="1.2" fill="#2A5C1A" opacity="0.10" />
          {/* Small leaf */}
          <path
            d="M55 96 Q60 86 70 84 Q68 93 62 96 Q58 97 55 96Z"
            fill="none"
            stroke="#2A5C1A"
            strokeWidth="0.7"
            opacity="0.10"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#botanical)" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className={`${cormorant.variable} relative w-full bg-cream overflow-hidden`}>
      {/* Accent bar */}
      <div className="h-1 bg-farm-green" />

      <BotanicalPattern />

      {/* Depth gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,110,51,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Radial glow — soft green depth behind headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 30%, rgba(0,110,51,0.07) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 pt-10 pb-14 lg:pt-10 lg:pb-14 flex flex-col items-center text-center">
        {/* Wordmark badge — softer green shadow, tighter premium tracking */}
        <div
          className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-farm-green/20 bg-farm-green/5 px-4 py-2 text-farm-green-hover"
          style={{ boxShadow: '0 3px 18px rgba(0,110,51,0.22)' }}
        >
          <LeafLogo />
          <span className="text-xs font-bold tracking-[0.22em] uppercase">
            OCP
          </span>
        </div>

        {/* Decorative rule */}
        <div
          className="animate-fade-up w-12 h-px bg-earth-light mb-6"
          style={{ animationDelay: '75ms' }}
        />

        {/* Headline */}
        <h1
          className="animate-fade-up mb-5 text-5xl sm:text-6xl font-semibold text-bark leading-[1.15] tracking-tight"
          style={{
            fontFamily: 'var(--font-cormorant, Georgia, serif)',
            animationDelay: '150ms',
          }}
        >
          Smarter fertilizer
          <br />
          <em className="italic text-farm-green-light tracking-[0.02em]">planning</em>
          {' '}for every farm.
        </h1>

        {/* Subtagline */}
        <p
          className="animate-fade-up max-w-sm text-base sm:text-lg text-mist leading-relaxed"
          style={{ animationDelay: '250ms' }}
        >
          Enter your crop and land size to get an instant estimate.
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--color-cream, #F5FBF5))',
        }}
      />
    </section>
  );
}
