import { useState, type FormEvent } from "react";

const BOOKING_EMAIL = "hello@kavishsnaps.studio";

const inputClasses =
  "mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-accent focus:outline-none";
const labelClasses = "block font-mono text-xs uppercase tracking-[0.15em] text-muted";

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const subject = `Booking request — ${data.get("car") || "photoshoot"}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Car: ${data.get("car")}`,
      `Package: ${data.get("package")}`,
      `Location: ${data.get("location")}`,
      "",
      `Details: ${data.get("details") || "—"}`,
    ].join("\n");

    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="book" className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight text-balance">
            Book a photoshoot
          </h2>
          <p className="mt-6 max-w-[42ch] text-pretty text-muted">
            Tell us about the car and where it is. We&rsquo;ll reply with a time and a quote.
          </p>
          <address id="contact" className="mt-10 space-y-4 font-mono text-sm not-italic text-muted">
            <p>
              <a href={`mailto:${BOOKING_EMAIL}`} className="transition-colors hover:text-cream">
                {BOOKING_EMAIL}
              </a>
            </p>
            <p>
              <a href="tel:+442079460000" className="transition-colors hover:text-cream">
                +44 20 7946 0000
              </a>
            </p>
            <p>Studio 14, Foundry Yard, London</p>
          </address>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[min(1.5vw,18px)] bg-ink-3 p-8 ring-1 ring-white/5"
          aria-label="Booking request form"
        >
          {submitted && (
            <p
              role="status"
              className="mb-6 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-cream"
            >
              Your email app should have opened with the request pre-filled. Prefer to write
              directly? Email{" "}
              <a href={`mailto:${BOOKING_EMAIL}`} className="text-accent underline">
                {BOOKING_EMAIL}
              </a>
              .
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClasses}>
              Name
              <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClasses} />
            </label>
            <label className={labelClasses}>
              Email
              <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={inputClasses} />
            </label>
          </div>

          <label className={`${labelClasses} mt-4`}>
            Car
            <input name="car" type="text" required placeholder="Make, model, year" className={inputClasses} />
          </label>

          <label className={`${labelClasses} mt-4`}>
            Package
            <select name="package" className={inputClasses} defaultValue="Private seller — £180">
              <option>Private seller — £180</option>
              <option>Dealer — £450/car</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <label className={`${labelClasses} mt-4`}>
            Location
            <input name="location" type="text" placeholder="City or studio" className={inputClasses} />
          </label>

          <label className={`${labelClasses} mt-4`}>
            Details
            <textarea
              name="details"
              rows={4}
              placeholder="Color, condition, preferred dates, deadline..."
              className={inputClasses}
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-accent py-4 text-base font-semibold text-ink transition-colors hover:bg-cream"
          >
            Send booking request
          </button>
        </form>
      </div>
    </section>
  );
}
