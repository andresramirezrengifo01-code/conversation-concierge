import { useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Play, Gift, Calendar, ArrowRight, Lock } from 'lucide-react';
import { useFunnel } from '@/contexts/FunnelContext';
import group from '@/assets/group.svg';

const POSTPURCHASE_VIDEO_URL = '{{POSTPURCHASE_VIDEO_URL}}';

const PostCompra = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setupPaid, setSetupPaid, annualUpsell, setAnnualUpsell, accompanyUpsell, setAccompanyUpsell } = useFunnel();

  // Check for paid=true in URL (from checkout redirect)
  useEffect(() => {
    if (searchParams.get('paid') === 'true') {
      setSetupPaid(true);
    }
  }, [searchParams, setSetupPaid]);

  // If not paid, show blocked message
  if (!setupPaid) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold mb-4">
            Esta página es solo para clientes
          </h1>
          <p className="text-muted-foreground mb-8">
            Para acceder a esta página necesitas completar la activación de tu cuenta ConverxIA.
          </p>
          <Link to="/">
            <Button variant="cta" size="lg">
              Ir a la página principal
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAnnualUpsell = () => {
    setAnnualUpsell(true);
    // In real implementation, redirect to payment
  };

  const handleAccompanyUpsell = () => {
    setAnnualUpsell(true);
    setAccompanyUpsell(true);
    // In real implementation, redirect to payment
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6 border-b border-border/30">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-block">
            <img src={group} alt="ConverxIA" className="h-10" />
          </Link>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Pago confirmado</span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¡Bienvenido a <span className="text-accent text-glow-green">ConverxIA</span>!
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tu Mes 1 PLUS ya está incluido. Completa el onboarding (10 min) para que nuestro equipo configure tu agente.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="card-premium p-4 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">1</div>
                <span className="font-medium">Onboarding</span>
              </div>
              <div className="h-1 flex-1 mx-4 bg-muted rounded-full">
                <div className="h-full w-1/3 bg-accent rounded-full" />
              </div>
              <span className="text-muted-foreground text-sm">Paso 1 de 3</span>
            </div>
          </div>

          {/* Mini BSL Video */}
          <div className="card-premium p-6 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4 text-center">
              Mira este video antes de continuar (2-3 min)
            </h2>
            <div className="aspect-video bg-background/50 rounded-xl border border-border/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
              <div className="text-center z-10">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform shadow-glow-green">
                  <Play className="w-6 h-6 text-accent-foreground ml-1" />
                </div>
                <p className="text-muted-foreground text-sm">{POSTPURCHASE_VIDEO_URL}</p>
              </div>
            </div>
          </div>

          {/* Upsell Offers */}
          <div className="space-y-6 mb-12">
            <h2 className="font-display text-2xl font-bold text-center">
              Ofertas exclusivas para nuevos clientes
            </h2>

            {/* Upsell 1: Annual */}
            <div className={`card-premium p-6 border-2 ${annualUpsell ? 'border-accent bg-accent/5' : 'border-primary/30'}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Bloquea 12 meses por $497 <span className="text-accent">(pago único)</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    En vez de pagar mes a mes, asegura un año completo con acceso a todas las funcionalidades PLUS. Ahorra más de $600 vs pago mensual.
                  </p>
                  {annualUpsell ? (
                    <div className="flex items-center gap-2 text-accent">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Oferta seleccionada</span>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="cta" onClick={handleAnnualUpsell}>
                        Sí, quiero 12 meses por $497
                      </Button>
                      <Button variant="ghost" className="text-muted-foreground">
                        No gracias, prefiero mensual
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Upsell 2: Accompany */}
            <div className={`card-premium p-6 border-2 ${accompanyUpsell ? 'border-accent bg-accent/5' : 'border-primary/30'}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Agrega acompañamiento por +$250 <span className="text-accent">(total $747)</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Incluye los 12 meses + acompañamiento personalizado:
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80 mb-4">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      1 sesión técnica de configuración avanzada
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      1 sesión estratégica con Martán para optimizar tu operación
                    </li>
                  </ul>
                  {accompanyUpsell ? (
                    <div className="flex items-center gap-2 text-accent">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Oferta seleccionada</span>
                    </div>
                  ) : (
                    <Button variant="cta" onClick={handleAccompanyUpsell}>
                      Sí, quiero 12 meses + acompañamiento (total $747)
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-4">
            <Link to="/onboarding" className="block">
              <Button variant="cta" size="xl" className="w-full gap-2">
                Completar onboarding ahora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/seleccionar-plan" className="block">
              <Button variant="outline" className="w-full">
                Elegir plan Mes 2 después
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/90 backdrop-blur-xl border-t border-border/50 md:hidden">
        <Link to="/onboarding">
          <Button variant="cta" className="w-full gap-2" size="lg">
            Completar onboarding
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PostCompra;
