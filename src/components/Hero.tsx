import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background">
            Construção em EPS
            <span className="block text-primary">Inovadora e Sustentável</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-background/90">
            A EPS BRASIL utiliza tecnologia de ponta em construção com EPS para criar
            projetos mais rápidos, econômicos e ecologicamente corretos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg group"
            >
              Solicite um Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('sobre');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-lg border-2 border-background bg-background/10 backdrop-blur-sm text-background hover:bg-background hover:text-foreground"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
