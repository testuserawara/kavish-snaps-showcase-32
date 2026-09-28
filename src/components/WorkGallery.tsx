import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const SHOOTS = [
  {
    src: gallery1,
    alt: "Red sports coupe in a dark studio with wet-look floor",
    caption: "Red coupe — private seller",
    delay: "0ms",
  },
  {
    src: gallery2,
    alt: "Silver sedan side profile on a studio backdrop",
    caption: "Silver sedan — dealer",
    delay: "80ms",
  },
  {
    src: gallery3,
    alt: "Leather dashboard and steering wheel in moody low-key light",
    caption: "Interior detail — dealer",
    delay: "160ms",
  },
];

export function WorkGallery() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight text-balance">
          The work
        </h2>
        <span className="hidden font-mono text-xs text-muted sm:block">(a) — selected shoots</span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SHOOTS.map((shoot) => (
          <figure key={shoot.caption} className="animate-fade" style={{ animationDelay: shoot.delay }}>
            <img
              src={shoot.src}
              alt={shoot.alt}
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[min(1.5vw,18px)] object-cover ring-1 ring-white/5 transition-transform duration-500 hover:scale-[1.02]"
            />
            <figcaption className="mt-3 font-mono text-xs text-muted">{shoot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
