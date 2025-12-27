import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CementerioWhatsApp from '@/components/CementerioWhatsApp';
import NoChatbot from '@/components/NoChatbot';
import FeaturesGrid from '@/components/FeaturesGrid';
import ChatDemo from '@/components/ChatDemo';
import InboxTabs from '@/components/InboxTabs';
import WhatsAppSecurity from '@/components/WhatsAppSecurity';
import InterfaceList from '@/components/InterfaceList';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import PaymentModule from '@/components/PaymentModule';
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
        <CementerioWhatsApp />
        <NoChatbot />
        <FeaturesGrid />
        <ChatDemo />
        <InboxTabs />
        <WhatsAppSecurity />
        <InterfaceList />
        <Testimonials />
        <HowItWorks />
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
