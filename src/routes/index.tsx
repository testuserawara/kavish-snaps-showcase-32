import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { WorkGallery } from "@/components/WorkGallery";
import { Packages } from "@/components/Packages";
import { ProcessSteps } from "@/components/ProcessSteps";
import { BookingSection } from "@/components/BookingSection";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavish Snaps — Automotive Photography That Sells Your Car" },
      {
        name: "description",
        content:
          "Professional automotive photography for private sellers and dealers. Studio-grade listing photos, delivered in 48 hours. Book a photoshoot today.",
      },
      { property: "og:title", content: "Kavish Snaps — Automotive Photography" },
      {
        property: "og:description",
        content:
          "Studio-grade car photography for online listings. Private sellers and dealers. 48-hour delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ink font-body text-cream">
      <SiteHeader />
      <main>
        <Hero />
        <WorkGallery />
        <Packages />
        <ProcessSteps />
        <BookingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
