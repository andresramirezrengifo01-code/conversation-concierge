import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ChatDemo from '@/components/ChatDemo';
import ForWho from '@/components/ForWho';
import Comparison from '@/components/Comparison';
import Testimonials from '@/components/Testimonials';
import WhatIs from '@/components/WhatIs';
import Channels from '@/components/Channels';
import WhatsAppSecurity from '@/components/WhatsAppSecurity';
import Benefits from '@/components/Benefits';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import RiskZero from '@/components/RiskZero';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ChatDemo />
        <ForWho />
        <Comparison />
        <Testimonials />
        <Features />
        <WhatIs />
        <Channels />
        <WhatsAppSecurity />
        <Benefits />
        <Pricing />
        <RiskZero />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
