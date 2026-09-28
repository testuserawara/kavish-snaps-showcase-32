export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 sm:flex-row sm:items-center sm:px-8">
        <p className="font-display text-2xl tracking-tight">
          KAVISH<span className="text-accent">SNAPS</span>
        </p>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Kavish Snaps — Automotive photography
        </p>
      </div>
    </footer>
  );
}
