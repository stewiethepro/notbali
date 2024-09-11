import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import Companies from "@/components/landing/companies-section";
import SocialProofTestimonials from "@/components/landing/testimonials-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import BentoSection from "@/components/landing/bento-section";
import GraphSection from "@/components/landing/graph-section";
import ItinerarySection from "@/components/landing/itinerary-section";
export default async function Page() {
  return (
    <>
      <HeroSection />
      <Companies />
      {/* <ClientSection /> */}
      <SphereMask />
      {/* <PricingSection /> */}
      <SocialProofTestimonials />
      <ItinerarySection />
      {/* <BentoSection /> */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
