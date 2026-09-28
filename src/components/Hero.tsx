import heroCar from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 pt-14 sm:px-8 lg:grid-cols-12">
        <div className="animate-rise lg:col-span-7">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Automotive photography studio
          </p>
          <h1 className="font-display text-[clamp(3.5rem,13vw,11rem)] leading-[0.82] tracking-tight text-balance">
            Make your car
            <br />
            <span className="text-accent">impossible</span>
            <br />
            to ignore.
          </h1>
          <p className="mt-8 max-w-[46ch] text-lg text-pretty text-muted">
            We shoot cars that are being sold — private sellers and dealers alike — so your listing
            looks like a launch, not a garage.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-cream"
            >
              Book a photoshoot
            </a>
            <a
              href="#work"
              className="rounded-full border border-line px-8 py-4 text-base font-medium text-cream transition-colors hover:border-cream"
            >
              See the work
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs text-muted">
            <span>1,400+ cars shot</span>
            <span>48h delivery</span>
            <span>Studio + on-location</span>
          </div>
        </div>

        <div className="animate-fade [animation-delay:120ms] lg:col-span-5">
          <div className="sweep ring-1 ring-white/10 rounded-[min(1.5vw,18px)]">
            <img
              src={heroCar}
              alt="Matte black sports car lit by a single dramatic studio light"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-[min(1.5vw,18px)] object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
