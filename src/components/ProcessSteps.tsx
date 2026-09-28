const STEPS = [
  {
    number: "01",
    title: "Book",
    body: "Pick a package, send us the car and a date. We confirm within a day.",
    delay: "0ms",
  },
  {
    number: "02",
    title: "Shoot",
    body: "We come to you or you come to the studio. Two hours, one car, zero fuss.",
    delay: "90ms",
  },
  {
    number: "03",
    title: "Deliver",
    body: "Edited, web-ready images in your inbox — ready to list the same day.",
    delay: "180ms",
  },
];

export function ProcessSteps() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <h2 className="mb-12 font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight text-balance">
        How it works
      </h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.number} className="animate-fade" style={{ animationDelay: step.delay }}>
            <span className="font-mono text-sm text-accent">{step.number}</span>
            <h3 className="mt-3 font-display text-2xl tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm text-pretty text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
