import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutEPS from '@/components/AboutEPS';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutEPS />
      <Services />
      <Portfolio />
      <Benefits />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
