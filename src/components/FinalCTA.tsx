import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Responde a tiempo. Da seguimiento. <br />
            <span className="text-accent text-glow-green">Cierra más conversaciones.</span>
          </h2>

          <Button variant="cta" size="xl" className="gap-2">
            <Sparkles className="w-5 h-5" />
            Activar mi Agente IA
          </Button>

          <p className="mt-6 text-muted-foreground text-sm">
            Setup incluye 1er mes • Cero técnico • Sin contratos
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
