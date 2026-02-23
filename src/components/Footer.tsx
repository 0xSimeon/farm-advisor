// Site-wide footer with OCP attribution.

export default function Footer() {
  return (
    <footer className="w-full border-t border-earth-light/50 py-10 px-4 text-center">
      <p className="mx-auto max-w-xs text-xs leading-relaxed text-mist sm:max-w-sm">
        Built with{' '}
        <span
          className="inline-block animate-heartbeat"
          role="img"
          aria-label="love"
        >
          ❤️
        </span>
        {' '}by OCP to support smarter fertilizer decisions for smallholder farmers.
      </p>
    </footer>
  );
}
