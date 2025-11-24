import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/85 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-2xl font-bold text-foreground">
            <img src={logo} alt="Logo EPS BRASIL" className="h-10 w-10 rounded-full shadow-md" />
            <span className="tracking-tight">EPS BRASIL</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre EPS
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection('vantagens')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Vantagens
            </button>
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              Contato
            </Button>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Sobre EPS
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection('vantagens')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Vantagens
            </button>
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-primary hover:bg-primary-glow text-primary-foreground w-full"
            >
              Contato
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
