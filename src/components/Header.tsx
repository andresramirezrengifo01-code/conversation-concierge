import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

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

  const navLinks = [
    { href: '#como-funciona', label: 'Cómo funciona' },
    { href: '#demo', label: 'Demo' },
    { href: '#canales', label: 'Canales' },
    { href: '#planes', label: 'Planes' },
    { href: '#faq', label: 'FAQ' },
  ];

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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Trust */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Setup $97 (incluye 1er mes)
            </span>
            <Button variant="cta" size="lg" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Activar mi Agente IA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="cta" size="lg" className="mt-4 w-full gap-2">
              <Sparkles className="w-4 h-4" />
              Activar mi Agente IA
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
