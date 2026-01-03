import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              conver<span className="text-accent">x</span>IA
            </span>
          </a>

          {/* CTA + Trust */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground hidden sm:block">
              Setup $97 (incluye 1er mes)
            </span>
            <Button variant="cta" size="lg" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Activar mi Agente IA
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
