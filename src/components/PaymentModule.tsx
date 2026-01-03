import { Button } from '@/components/ui/button';
import { Check, Sparkles, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentModule = () => {
  return (
    <section id="pago" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Main Hero Card - The Only Thing That Matters */}
        <div className="max-w-xl mx-auto">
          
          {/* Social proof micro */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-accent/60 to-accent/30 border-2 border-background" />
                ))}
              </span>
              +200 negocios ya usan ConverxIA
            </span>
          </div>

          {/* The Card */}
          <div className="card-premium p-8 md:p-10 border-2 border-accent/40 bg-gradient-to-b from-accent/10 to-transparent relative overflow-hidden">
            
            {/* Glow effect */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
            
            <div className="relative">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                  OFERTA DE LANZAMIENTO
                </span>
              </div>

              {/* Price - Simple and Clear */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-muted-foreground line-through">$194</span>
                  <span className="font-display text-5xl md:text-6xl font-bold text-accent text-glow-green">$97</span>
                </div>
                <p className="text-lg text-foreground/80">
                  Pago único · Activo en 24h
                </p>
              </div>

              {/* What You Get - Ultra Simple */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Tu agente IA configurado y listo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Primer mes gratis (Plan PLUS, valor $97)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Sin contratos · Cancela cuando quieras</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/checkout" className="block">
                <Button variant="cta" size="xl" className="w-full gap-2 text-lg py-6">
                  <Sparkles className="w-5 h-5" />
                  Activar mi Agente IA
                </Button>
              </Link>

              {/* Trust Signals */}
              <div className="flex items-center justify-center gap-4 mt-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  Pago seguro
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  Activo en 24h
                </span>
              </div>
            </div>
          </div>

          {/* After Month 1 - Secondary, Collapsible */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Después del primer mes, elige tu plan:
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <span className="text-xs bg-muted/50 px-3 py-1.5 rounded-full">PRO $47/mes</span>
              <span className="text-xs bg-accent/20 text-accent px-3 py-1.5 rounded-full border border-accent/30">PLUS $97/mes</span>
              <span className="text-xs bg-muted/50 px-3 py-1.5 rounded-full">MAX $147/mes</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Sin compromiso. El día 30 decides si continúas y con qué plan.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentModule;
