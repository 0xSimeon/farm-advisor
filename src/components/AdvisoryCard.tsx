// Results card displaying NPK and urea bag quantities, or an empty-state placeholder.

import type { FertilizerResult } from '@/types';

interface AdvisoryCardProps {
  result: FertilizerResult | null;
}

function SproutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 16V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M9 12 Q5 10 4 6 Q8 5 10 9"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 10 Q12 8 14 5 Q10 4 8 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function GrainIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <line x1="9" y1="3" x2="9" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="9" cy="5.5" rx="3" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="6" cy="9.5" rx="2.5" ry="4" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <ellipse cx="12" cy="9.5" rx="2.5" ry="4" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.25" />
      <path d="M7 6V10M7 4.5H7.01" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function EmptyState() {
  return (
    <div className="hidden lg:flex mt-6 lg:mt-0 w-full rounded-2xl border border-dashed border-earth-light/50 flex-col items-center justify-center py-14 px-6 text-center">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="text-earth-light mb-3">
        <path d="M14 24V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M14 18 Q8 15 6 9 Q12 7 15 14"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14 15 Q19 12 22 7 Q16 6 13 12"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <p className="text-sm text-mist/50">
        Your fertilizer estimate will appear here.
      </p>
    </div>
  );
}

export default function AdvisoryCard({ result }: AdvisoryCardProps) {
  if (!result) return <EmptyState />;

  return (
    <div
      className="animate-fade-up mt-6 lg:mt-0 w-full rounded-2xl overflow-hidden border border-farm-green-light/25 shadow-[0_2px_16px_rgba(42,92,26,0.08)]"
      style={{ backgroundColor: '#F0F7ED' }}
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-4 border-b border-farm-green-light/20 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-farm-green-light mb-0.5">
            Fertilizer Estimate
          </p>
          <p className="text-sm text-mist">
            {result.cropLabel}&nbsp;&mdash;&nbsp;{result.landSize}{' '}
            hectare{result.landSize !== 1 ? 's' : ''}
          </p>
        </div>
        {/* Checkmark badge */}
        <div className="w-8 h-8 rounded-full bg-farm-green flex items-center justify-center shrink-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 7L6 10L11 4"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Metric rows — NPK is primary, Urea is secondary */}
      <div className="px-6 divide-y divide-farm-green-light/15">
        {/* NPK — primary metric, full emphasis */}
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-farm-green-light bg-farm-green/10">
              <SproutIcon />
            </div>
            <div>
              <p className="text-sm font-semibold text-bark">NPK Fertilizer</p>
              <p className="text-xs text-mist/70">Compound blend</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block animate-number-pop text-3xl font-bold text-bark tabular-nums" style={{ animationDelay: '150ms' }}>{result.npkBags}</span>
            <span className="ml-1.5 text-xs font-medium text-mist">bags</span>
          </div>
        </div>

        {/* Urea — secondary metric, reduced visual weight */}
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-farm-green-light bg-farm-green/10">
              <GrainIcon />
            </div>
            <div>
              <p className="text-sm font-semibold text-bark">Urea</p>
              <p className="text-xs text-mist/70">Nitrogen supplement</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block animate-number-pop text-2xl font-semibold text-bark/75 tabular-nums" style={{ animationDelay: '250ms' }}>{result.ureaBags}</span>
            <span className="ml-1.5 text-xs font-medium text-mist">bags</span>
          </div>
        </div>
      </div>

      {/* Advisory note */}
      <div className="px-6 py-4 flex items-start gap-2 bg-farm-green/5 border-t border-farm-green-light/15">
        <span className="mt-0.5 shrink-0 text-earth">
          <InfoIcon />
        </span>
        <p className="text-xs text-mist leading-relaxed">
          Estimates are based on general recommendations. Soil testing is advised.
        </p>
      </div>
    </div>
  );
}
