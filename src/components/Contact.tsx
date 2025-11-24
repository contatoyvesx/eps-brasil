import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '551140035332';
    const summary = `Olá! Meu nome é ${formData.name}. Meu telefone é ${formData.phone}. Mensagem: ${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summary)}`,
      '_blank'
    );

    toast({
      title: 'Redirecionando para WhatsApp',
      description: 'Você será direcionado para enviar sua mensagem.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '+55 11 4003-5332',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'São Paulo, SP',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 animate-gradient-slow pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso e descubra como a EPS BRASIL pode
            transformar seu projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8 border-border bg-card shine-on-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                      Nome
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background border-border"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Telefone
                  </label>
                  <Input
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background border-border"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-32 bg-background border-border"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6 flex flex-col items-center">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-5 sm:p-6 hover:shadow-lg transition-all duration-500 border-border bg-card shine-on-hover w-full max-w-sm mx-auto"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.info}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
