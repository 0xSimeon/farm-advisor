// Landing page — composes hero, fertilizer form, and footer into a single-scroll layout.

import HeroSection from "@/components/HeroSection";
import FertilizerForm from "@/components/FertilizerForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <div className="grow">
        <HeroSection />

        <main className="relative py-8 lg:py-10 px-4 flex flex-col items-center">
          {/* Botanical continuity — faint pattern behind form section */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true">
            <defs>
              <pattern id="botanical-content" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M18 65 Q28 42 48 36 Q45 58 28 65 Q23 67 18 65Z" fill="none" stroke="#2A5C1A" strokeWidth="0.9" opacity="0.05" />
                <path d="M18 65 Q32 57 42 46" stroke="#2A5C1A" strokeWidth="0.5" opacity="0.04" fill="none" />
                <line x1="93" y1="28" x2="93" y2="96" stroke="#7A6340" strokeWidth="0.8" opacity="0.04" />
                <ellipse cx="93" cy="31" rx="4" ry="6.5" fill="none" stroke="#7A6340" strokeWidth="0.8" opacity="0.04" />
                <circle cx="60" cy="16" r="1.8" fill="#C4A96D" opacity="0.06" />
                <path d="M55 96 Q60 86 70 84 Q68 93 62 96 Q58 97 55 96Z" fill="none" stroke="#2A5C1A" strokeWidth="0.7" opacity="0.04" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#botanical-content)" />
          </svg>

          <FertilizerForm />
        </main>
      </div>

      <Footer />
    </div>
  );
}
