import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Solutions } from "@/components/landing/solutions";
import { Benefits } from "@/components/landing/benefits";
import { Waitlist } from "@/components/landing/waitlist";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Benefits />
      <Waitlist />
      <CTA />
      <Footer />
    </main>
  );
}
