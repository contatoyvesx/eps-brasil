import { Card } from '@/components/ui/card';
import { Home, Building2, Factory, Warehouse } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residencial',
      description:
        'Casas e sobrados com acabamento impecável, conforto térmico e acústico superior.',
    },
    {
      icon: Building2,
      title: 'Comercial',
      description:
        'Lojas, escritórios e espaços comerciais modernos e funcionais.',
    },
    {
      icon: Warehouse,
      title: 'Galpões',
      description:
        'Estruturas amplas e versáteis para armazenamento e indústria.',
    },
    {
      icon: Factory,
      title: 'Industrial',
      description:
        'Soluções customizadas para projetos industriais de grande porte.',
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em construção com EPS para diversos tipos de
            projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-border bg-card shine-on-hover w-full max-w-full sm:max-w-[320px] lg:max-w-[360px] mx-auto"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
