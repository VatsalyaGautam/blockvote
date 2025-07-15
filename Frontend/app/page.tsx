import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CTA, Footer, Stats, Testimonials } from "@/components/stats";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
