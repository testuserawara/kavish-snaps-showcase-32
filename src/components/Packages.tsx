const PACKAGES = [
  {
    tier: "Private seller",
    price: "£180",
    per: "",
    blurb: "One car, one location, delivered fast.",
    features: [
      "12 edited images",
      "Exterior + interior",
      "48-hour turnaround",
      "Web-ready files",
    ],
    featured: false,
  },
  {
    tier: "Dealer",
    price: "£450",
    per: "/car",
    blurb: "For inventory that needs to sell fast.",
    features: [
      "20 edited images",
      "Studio + lifestyle shots",
      "Priority 24-hour turnaround",
      "Batch & recurring rates",
    ],
    featured: true,
  },
];

export function Packages() {
  return (
    <section id="packages" className="border-y border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <h2 className="mb-12 font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight text-balance">
          Two ways to book
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.tier}
              className={`rounded-[min(1.5vw,18px)] bg-ink-3 p-8 ${
                pkg.featured ? "ring-1 ring-accent/40" : "ring-1 ring-white/5"
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {pkg.tier}
              </span>
              <p className="mt-4 font-display text-4xl tracking-tight">
                {pkg.price}
                {pkg.per && <span className="text-lg text-muted">{pkg.per}</span>}
              </p>
              <p className="mt-2 text-sm text-muted">{pkg.blurb}</p>
              <ul className="mt-6 space-y-3 text-sm text-cream/80">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-8 inline-block rounded-full px-6 py-3 text-sm transition-colors ${
                  pkg.featured
                    ? "bg-accent font-semibold text-ink hover:bg-cream"
                    : "border border-line font-medium hover:border-accent hover:text-accent"
                }`}
              >
                Book this
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
