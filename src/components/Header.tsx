import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import group from '@/assets/group.svg';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the VSL container and show header after scrolling past it
      const vslContainer = document.querySelector('.vsl-container');
      if (vslContainer) {
        const vslBottom = vslContainer.getBoundingClientRect().bottom;
        setIsVisible(vslBottom < 0);
      } else {
        // Fallback: show after 600px scroll
        setIsVisible(window.scrollY > 600);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 translate-y-0'
          : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={group}
              alt="ConverxIA Logo"
              className="h-6 w-auto object-contain"
            />
          </a>

          {/* CTA + Trust */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground hidden sm:block">
              Setup $97 (incluye 1er mes)
            </span>
            <Link to="/post-compra">
              <Button variant="cta" size="lg" className="gap-2">
                <Sparkles className="w-4 h-4" />
                Activar mi Agente IA
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
