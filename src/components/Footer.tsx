const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4 text-secondary-foreground">
              EPS <span className="text-primary">BRASIL</span>
            </div>
            <p className="text-secondary-foreground/80">
              Inovação e sustentabilidade em construção civil com tecnologia EPS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Sobre EPS
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#vantagens"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Vantagens
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Portfólio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>(11) 9999-9999</li>
              <li>contato@epsbrasil.com.br</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 EPS BRASIL. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
