import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import centroOesteImage from '@/assets/centro-oeste.png';
import nordesteImage from '@/assets/nordeste.png';
import norteImage from '@/assets/norte.png';
import sulImage from '@/assets/sul.png';
import sudesteImage from '@/assets/suldeste.png';
import { Sparkles } from 'lucide-react';

const regions = [
  {
    title: 'Norte',
    image: norteImage,
    summary:
      'Infraestrutura logística e industrial dimensionada para clima úmido, com montagem rápida e painéis de alta eficiência térmica.',
    tags: ['Logística', 'Indústria', 'Isolamento avançado'],
    metrics: [
      { label: 'Prazo médio', value: '45 dias' },
      { label: 'Eficiência térmica', value: '+38%' },
    ],
  },
  {
    title: 'Nordeste',
    image: nordesteImage,
    summary:
      'Soluções para alta insolação e maresia, com acabamentos resistentes à salinidade e conforto térmico superior.',
    tags: ['Clima quente', 'Resistência à maresia', 'Acabamentos premium'],
    metrics: [
      { label: 'Projetos entregues', value: '22' },
      { label: 'Economia de energia', value: '30%' },
    ],
  },
  {
    title: 'Centro-Oeste',
    image: centroOesteImage,
    summary:
      'Galpões, centros de distribuição e residenciais otimizados para amplitudes térmicas e cronogramas acelerados.',
    tags: ['CDs e galpões', 'Agroindústria', 'Entrega rápida'],
    metrics: [
      { label: 'Torres e galpões', value: '15' },
      { label: 'Redução de resíduos', value: '42%' },
    ],
  },
  {
    title: 'Sudeste',
    image: sudesteImage,
    summary:
      'Obras corporativas e residenciais com alto padrão de acabamento, isolamento acústico e desempenho energético.',
    tags: ['Corporativo', 'Alto padrão', 'Isolamento acústico'],
    metrics: [
      { label: 'Obras emblemáticas', value: '28' },
      { label: 'Prazo reduzido', value: '35%' },
    ],
  },
  {
    title: 'Sul',
    image: sulImage,
    summary:
      'Casas e chalés preparados para baixas temperaturas, com conforto acústico e aquecimento eficiente.',
    tags: ['Clima frio', 'Residencial', 'Conforto acústico'],
    metrics: [
      { label: 'Chalés e casas', value: '19' },
      { label: 'Economia em aquecimento', value: '27%' },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/15 text-primary font-semibold text-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Portfólio EPS BRASIL
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Portfólio EPS BRASIL
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Construções em EPS executadas com precisão industrial e acabamento premium, do residencial ao
              corporativo. Fale com o time para receber o material completo de obras e soluções.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-12">
          {regions.map((region) => (
            <Card
              key={region.title}
              className="overflow-hidden border-border/70 bg-background/80 backdrop-blur-lg shadow-md shadow-primary/5 text-sm"
            >
              <div className="relative aspect-square flex items-center justify-center bg-muted">
                <img
                  src={region.image}
                  alt={`Região ${region.title}`}
                  className="h-3/4 w-3/4 object-contain"
                />
              </div>

              <div className="p-2.5 space-y-2">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground/80">Região</p>
                  <h3 className="text-base font-semibold leading-tight text-foreground">{region.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {region.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg border border-border/60 bg-muted/40 px-2.5 py-2 text-xs text-muted-foreground"
                    >
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground/80">{metric.label}</p>
                      <p className="font-semibold text-sm text-foreground">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="border-border/70 bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-primary/10 text-primary border-primary/20">Catálogo completo</Badge>
            <span className="text-muted-foreground text-sm">Residenciais | Comerciais | Industriais</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-background/60 p-4 space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Destaques</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Estruturas leves com isolamento térmico superior</li>
                <li>Montagem limpa e rápida com menor geração de resíduos</li>
                <li>Acabamentos personalizados para diferentes setores</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border/60 bg-background/60 p-4 space-y-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Como receber</p>
              <p className="text-muted-foreground">
                Entre em contato e envie seu segmento e localização. Nosso time retorna com o portfólio ilustrado e cases
                aderentes à sua necessidade.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Materiais digitais
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Tour das obras
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border/60 pt-4">
            <p className="text-muted-foreground">Acesse nosso portfólio e veja como o EPS acelera obras em todo o Brasil.</p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Solicitar portfólio
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;
