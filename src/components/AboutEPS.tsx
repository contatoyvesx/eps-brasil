import { Card } from '@/components/ui/card';
import { Leaf, Zap, Shield, TrendingDown } from 'lucide-react';
import epsImage from '@/assets/eps-blocks.jpg';

const AboutEPS = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Sustentável',
      description: 'Material 100% reciclável e ecologicamente correto',
    },
    {
      icon: Zap,
      title: 'Rápido',
      description: 'Construção até 3x mais rápida que métodos tradicionais',
    },
    {
      icon: Shield,
      title: 'Durável',
      description: 'Alta resistência e proteção térmica superior',
    },
    {
      icon: TrendingDown,
      title: 'Econômico',
      description: 'Redução de até 40% nos custos de construção',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que é <span className="text-primary">Construção em EPS?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              O EPS (Poliestireno Expandido) é um material inovador que revoluciona a
              construção civil. Leve, resistente e isolante térmico, o EPS permite
              construções mais rápidas, econômicas e sustentáveis.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Na TECHFREIRE, utilizamos a mais avançada tecnologia em construção com EPS,
              garantindo qualidade, segurança e eficiência em cada projeto.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <img
              src={epsImage}
              alt="Blocos de EPS"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEPS;
