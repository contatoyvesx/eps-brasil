import { Card } from '@/components/ui/card';
import {
  Clock,
  Wallet,
  ThermometerSnowflake,
  Recycle,
  HardHat,
  Lightbulb,
} from 'lucide-react';
import houseImage from '@/assets/modern-house.jpg';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Rapidez na Execução',
      description: 'Redução de até 50% no tempo de construção',
    },
    {
      icon: Wallet,
      title: 'Economia',
      description: 'Menor custo de mão de obra e materiais',
    },
    {
      icon: ThermometerSnowflake,
      title: 'Conforto Térmico',
      description: 'Isolamento térmico superior reduz custos com climatização',
    },
    {
      icon: Recycle,
      title: 'Sustentabilidade',
      description: 'Material reciclável e baixo impacto ambiental',
    },
    {
      icon: HardHat,
      title: 'Segurança',
      description: 'Obra mais limpa e segura para trabalhadores',
    },
    {
      icon: Lightbulb,
      title: 'Versatilidade',
      description: 'Projetos customizados e arquitetura moderna',
    },
  ];

  return (
    <section id="vantagens" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 animate-gradient-slow" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Vantagens da <span className="text-primary">Construção em EPS</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra por que a construção em EPS é a escolha inteligente para seu projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1 justify-items-center">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-5 sm:p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-border bg-card shine-on-hover w-full max-w-full sm:max-w-[320px] lg:max-w-[360px] mx-auto"
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 text-card-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="animate-fade-in relative order-1 lg:order-2 w-full max-w-xl mx-auto">
            <div className="absolute -left-10 -top-10 h-40 w-40 bg-primary/20 blur-3xl rounded-full animate-float-slow" />
            <div className="absolute -right-12 bottom-0 h-52 w-52 bg-secondary/20 blur-3xl rounded-full animate-float-delay" />
            <img
              src={houseImage}
              alt="Casa Moderna"
              className="rounded-2xl shadow-2xl w-full h-auto relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
