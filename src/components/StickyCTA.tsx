import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/80 backdrop-blur-xl border-t border-border/50 md:hidden">
      <Link to="/post-compra">
        <Button variant="cta" className="w-full gap-2" size="lg">
          <Sparkles className="w-4 h-4" />
          Activar mi Agente IA
        </Button>
      </Link>
    </div>
  );
};

export default StickyCTA;
