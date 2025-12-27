import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Comparison from '@/components/Comparison';
import ChatDemo from '@/components/ChatDemo';
import ForWho from '@/components/ForWho';
import Testimonials from '@/components/Testimonials';
import WhatIs from '@/components/WhatIs';
import Channels from '@/components/Channels';
import WhatsAppSecurity from '@/components/WhatsAppSecurity';
import Benefits from '@/components/Benefits';
import PaymentModule from '@/components/PaymentModule';
import RiskZero from '@/components/RiskZero';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <HowItWorks />
        <Comparison />
        <ChatDemo />
        <ForWho />
        <Testimonials />
        <WhatIs />
        <Channels />
        <WhatsAppSecurity />
        <Benefits />
        <PaymentModule />
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
