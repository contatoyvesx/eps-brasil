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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/30 animate-gradient-slow mix-blend-multiply" />
        <div className="absolute -left-10 top-10 h-56 w-56 bg-primary/25 blur-3xl rounded-full animate-float-slow" />
        <div className="absolute -right-8 bottom-10 h-64 w-64 bg-secondary/40 blur-[80px] rounded-full animate-float-delay" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in-up space-y-8 text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-background leading-tight">
            Construção em EPS
            <span className="block text-primary">Inovadora e Sustentável</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-background/90">
            A EPS BRASIL utiliza tecnologia de ponta em construção com EPS para criar
            projetos mais rápidos, econômicos e ecologicamente corretos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-[auto,auto] gap-4 w-full sm:w-fit sm:mx-auto md:mx-0">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg group glow-ring"
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

          <div className="grid sm:grid-cols-3 gap-4 text-background/90">
            {["Tecnologia ágil", "Isolamento superior", "Equipes especializadas"].map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl bg-background/10 backdrop-blur-sm border border-background/20 p-4 shine-on-hover text-left sm:text-center ${
                  index === 1 ? 'animate-float-slow' : 'animate-float-delay'
                }`}
              >
                <p className="font-semibold">{item}</p>
                <p className="text-sm text-background/70">Projetos sob medida em todo o Brasil.</p>
              </div>
            ))}
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
