import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import WhyRidgeline from "@/components/WhyRidgeline";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import Industries from "@/components/Industries";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Services />
        <WhyRidgeline />
        <Pricing />
        <Testimonials />
        <ServiceArea />
        <Industries />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
