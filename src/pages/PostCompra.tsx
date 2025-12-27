import { useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Play, Gift, Calendar, ArrowRight, Lock, Sparkles, Star } from 'lucide-react';
import { useFunnel } from '@/contexts/FunnelContext';
import group from '@/assets/group.svg';
import robotMascot from '@/assets/robot-mascot.png';

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
      <div className="min-h-screen bg-background text-foreground bg-mesh flex items-center justify-center">
        <div className="fixed inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="text-center max-w-md mx-auto px-4 relative z-10">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-4">
            Esta página es solo para clientes
          </h1>
          <p className="text-muted-foreground mb-8">
            Para acceder a esta página necesitas completar la activación de tu cuenta ConverxIA.
          </p>
          <Link to="/">
            <Button variant="cta" size="lg" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Ir a activar mi agente
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAnnualUpsell = () => {
    setAnnualUpsell(true);
  };

  const handleAccompanyUpsell = () => {
    setAnnualUpsell(true);
    setAccompanyUpsell(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground bg-mesh pb-24 md:pb-0">
      {/* Background effects */}
      <div className="fixed inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 py-6 border-b border-border/30 bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-block">
            <img src={group} alt="ConverxIA" className="h-10" />
          </Link>
        </div>
      </header>

      <main className="relative z-10 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-3 rounded-full mb-6 animate-pulse">
              <Check className="w-5 h-5" />
              <span className="font-semibold">¡Pago confirmado!</span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
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
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">1</div>
                <div>
                  <span className="font-medium">Onboarding</span>
                  <p className="text-xs text-muted-foreground">Cuéntanos de tu negocio</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center flex-1 mx-4">
                <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-accent rounded-full" />
                </div>
              </div>
              <span className="text-muted-foreground text-sm">Paso 1 de 3</span>
            </div>
          </div>

          {/* Mini BSL Video */}
          <div className="card-premium p-6 mb-8">
            <h2 className="font-display text-xl font-semibold mb-4 text-center">
              Mira este video antes de continuar <span className="text-muted-foreground">(2-3 min)</span>
            </h2>
            <div className="aspect-video bg-background/50 rounded-2xl border border-border/30 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
              <div className="absolute inset-0 bg-dots opacity-20" />
              <div className="text-center z-10">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-glow-green">
                  <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                </div>
                <p className="text-muted-foreground text-sm">{POSTPURCHASE_VIDEO_URL}</p>
              </div>
            </div>
          </div>

          {/* Upsell Offers */}
          <div className="space-y-6 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-primary mb-2">
                <Star className="w-4 h-4" fill="currentColor" />
                <span className="text-sm font-medium">Ofertas exclusivas para nuevos clientes</span>
                <Star className="w-4 h-4" fill="currentColor" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Potencia tu inversión
              </h2>
            </div>

            {/* Upsell 1: Annual */}
            <div className={`card-premium p-6 md:p-8 border-2 transition-all ${annualUpsell ? 'border-accent bg-accent/5' : 'border-primary/30 hover:border-primary/50'}`}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-bold">
                      Bloquea 12 meses por $497
                    </h3>
                    <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      Ahorra +$600
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    En vez de pagar mes a mes ($97 x 12 = $1,164), asegura un año completo con acceso a todas las funcionalidades PLUS por solo $497.
                  </p>
                  {annualUpsell ? (
                    <div className="flex items-center gap-2 text-accent text-lg">
                      <Check className="w-6 h-6" />
                      <span className="font-semibold">Oferta seleccionada</span>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="cta" size="lg" onClick={handleAnnualUpsell} className="gap-2">
                        <Sparkles className="w-4 h-4" />
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
            <div className={`card-premium p-6 md:p-8 border-2 transition-all ${accompanyUpsell ? 'border-accent bg-accent/5' : 'border-primary/30 hover:border-primary/50'}`}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-bold">
                      Agrega acompañamiento por +$250
                    </h3>
                    <span className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      Total $747
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Incluye los 12 meses + acompañamiento personalizado:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-3 text-foreground/90">
                      <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      1 sesión técnica de configuración avanzada
                    </li>
                    <li className="flex items-center gap-3 text-foreground/90">
                      <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      1 sesión estratégica con Martán para optimizar tu operación
                    </li>
                  </ul>
                  {accompanyUpsell ? (
                    <div className="flex items-center gap-2 text-accent text-lg">
                      <Check className="w-6 h-6" />
                      <span className="font-semibold">Oferta seleccionada</span>
                    </div>
                  ) : (
                    <Button variant="cta" size="lg" onClick={handleAccompanyUpsell} className="gap-2">
                      <Sparkles className="w-4 h-4" />
                      Sí, quiero 12 meses + acompañamiento ($747)
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-4">
            <Link to="/onboarding" className="block">
              <Button variant="cta" size="xl" className="w-full gap-3 text-lg">
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

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-xl border-t border-border/50 md:hidden">
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
