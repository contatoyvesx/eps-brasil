import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import centroOesteImage from '@/assets/centro-oeste.jpg';
import nordesteImage from '@/assets/nordeste.jpg';
import norteImage from '@/assets/norte.jpg';
import sulImage from '@/assets/sul.jpg';
import sudesteImage from '@/assets/suldeste.jpg';
import { Globe2, Sparkles } from 'lucide-react';

const regions = [
  {
    title: 'Norte',
    image: norteImage,
    gradient: 'from-emerald-500/70 via-primary/70 to-emerald-700/70',
    summary: '',
    tags: [],
    metrics: [
      { label: 'Prazo médio', value: '45 dias' },
      { label: 'Eficiência térmica', value: '+38%' },
    ],
  },
  {
    title: 'Nordeste',
    image: nordesteImage,
    gradient: 'from-orange-400/70 via-primary/70 to-amber-500/70',
    summary: '',
    tags: [],
    metrics: [
      { label: 'Projetos entregues', value: '22' },
      { label: 'Economia de energia', value: '30%' },
    ],
  },
  {
    title: 'Centro-Oeste',
    image: centroOesteImage,
    gradient: 'from-lime-400/70 via-primary/70 to-emerald-500/70',
    summary: '',
    tags: [],
    metrics: [
      { label: 'Torres e galpões', value: '15' },
      { label: 'Redução de resíduos', value: '42%' },
    ],
  },
  {
    title: 'Sudeste',
    image: sudesteImage,
    gradient: 'from-sky-400/70 via-primary/70 to-blue-600/70',
    summary: '',
    tags: [],
    metrics: [
      { label: 'Obras emblemáticas', value: '28' },
      { label: 'Prazo reduzido', value: '35%' },
    ],
  },
  {
    title: 'Sul',
    image: sulImage,
    gradient: 'from-indigo-400/70 via-primary/70 to-slate-800/70',
    summary: '',
    tags: [],
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
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Obras que elevam <span className="text-primary">cada região</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Nossos projetos em EPS acompanham as particularidades climáticas e culturais do Brasil,
              entregando conforto, velocidade e sustentabilidade em qualquer latitude.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {regions.map((region) => (
            <Card
              key={region.title}
              className="h-full overflow-hidden border-border/70 bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/10"
            >
              <div className="h-40 w-full overflow-hidden bg-muted">
                <img
                  src={region.image}
                  alt={`Projeto na região ${region.title}`}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <Badge className="w-fit bg-primary/10 text-primary border-primary/20">{region.title}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe2 className="w-4 h-4" />
                    <span>Implantação regional EPS</span>
                  </div>
                </div>

                {region.summary && (
                  <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                    {region.summary}
                  </p>
                )}

                {!!region.tags.length && (
                  <div className="flex flex-wrap gap-2">
                    {region.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  {region.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-border/60 bg-background/60 p-3"
                    >
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                        {metric.label}
                      </p>
                      <p className="text-lg font-bold text-foreground">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
