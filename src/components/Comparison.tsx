import { Button } from '@/components/ui/button';
import { Check, X, Sparkles } from 'lucide-react';

const Comparison = () => {
  const withoutItems = [
    'Respondes cuando puedes.',
    'Atiendes solo en horarios.',
    'Se te olvidan los seguimientos.',
    'Atiendes uno por uno manualmente.',
    'Quedan dudas sin responder.',
    'Contratas y capacitas personal.',
  ];

  const withItems = [
    'Respuesta en segundos.',
    'Conviertes 24/7 - 365 días al año.',
    'Seguimiento inteligente automático.',
    'Miles de conversaciones simultáneas.',
    'Respuestas consistentes siempre.',
    'Un agente IA sin rotación ni ausencias.',
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            ¿Por qué <span className="text-accent text-glow-green">ConverxIA</span>?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Convierte cada interacción en eficiencia y ventas; atención ilimitada, rápida y diseñada para potenciar tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Without ConverxIA */}
          <div className="card-premium p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">Sin ConverxIA</h3>
            </div>
            <ul className="space-y-4">
              {withoutItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With ConverxIA */}
          <div className="card-premium p-8 border-accent/30 bg-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">C</span>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold">Con ConverxIA</h3>
            </div>
            <ul className="space-y-4">
              {withItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" className="w-full mt-8 gap-2">
              <Sparkles className="w-4 h-4" />
              Activar mi Agente IA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
