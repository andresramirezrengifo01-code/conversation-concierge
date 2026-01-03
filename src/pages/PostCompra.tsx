import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Play, Lock, Sparkles, Star, Zap, Calendar, MessageSquare } from 'lucide-react';
import { useFunnel } from '@/contexts/FunnelContext';
import group from '@/assets/group.svg';

const POSTPURCHASE_VIDEO_URL = '{{POSTPURCHASE_VIDEO_URL}}';

const PostCompra = () => {
  const [searchParams] = useSearchParams();
  const { setupPaid, setSetupPaid, annualUpsell, setAnnualUpsell, accompanyUpsell, setAccompanyUpsell } = useFunnel();

  useEffect(() => {
    if (searchParams.get('paid') === 'true') {
      setSetupPaid(true);
    }
  }, [searchParams, setSetupPaid]);

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

  const handleMax12 = () => {
    setAnnualUpsell(true);
  };

  const handleUltra12 = () => {
    setAnnualUpsell(true);
    setAccompanyUpsell(true);
  };

  const max12Features = [
    'Hasta 6 canales activos',
    'Hasta 30 productos en tu agente recomendador',
    'Contactos y equipo ilimitado',
  ];

  const ultra12Features = [
    'Sesión técnica con el equipo: conexiones, hacks y mucho más',
    'Sesión estratégica contigo (Martán): mensajes, estructura, oferta y cómo convertir conversaciones en ventas',
    'Checklist final para que quede "listo para facturar"',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-mesh pb-24 md:pb-0">
      <div className="fixed inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
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
              Por haber activado hoy, quiero darte una mejora especial para que tengas un modo de máximo rendimiento.
            </p>
          </div>

          {/* Video Section */}
          <div className="card-premium p-6 mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-center">
              Mira este video, aquí te explico exactamente cómo funciona:
            </h2>
            <div className="aspect-video bg-background/50 rounded-2xl border border-border/30 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="absolute inset-0 bg-dots opacity-20" />
              <div className="text-center z-10">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-glow-green">
                  <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                </div>
                <p className="text-muted-foreground text-sm">{POSTPURCHASE_VIDEO_URL}</p>
              </div>
            </div>
          </div>

          {/* Upsell Intro */}
          <div className="text-center mb-8">
            <p className="text-lg text-foreground/80">
              Aquí te dejo un descuento increíble y con tu crédito aplicado.
            </p>
          </div>

          {/* Upsell Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            
            {/* MAX 12 */}
            <div className={`card-premium p-6 md:p-8 border-2 transition-all ${annualUpsell && !accompanyUpsell ? 'border-accent bg-accent/5' : 'border-accent/30 hover:border-accent/50'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                  <Zap className="w-4 h-4" />
                  Licencia Anual
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">Plan MAX 12</h3>
              </div>

              <ul className="space-y-3 mb-6">
                {max12Features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-background/50 rounded-xl p-4 mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Valor especial de hoy:</span>
                  <span className="text-foreground">$597</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Crédito por lo que ya pagaste:</span>
                  <span className="text-accent">–$97</span>
                </div>
                <div className="border-t border-border/30 pt-2 flex justify-between">
                  <span className="font-semibold">Pagas hoy:</span>
                  <span className="font-display text-2xl font-bold text-accent">$500</span>
                </div>
              </div>

              {annualUpsell && !accompanyUpsell ? (
                <div className="flex items-center justify-center gap-2 text-accent py-3">
                  <Check className="w-6 h-6" />
                  <span className="font-semibold">Seleccionado</span>
                </div>
              ) : (
                <Button variant="cta" size="lg" onClick={handleMax12} className="w-full gap-2">
                  <Sparkles className="w-4 h-4" />
                  Activar MAX 12 ahora
                </Button>
              )}

              <p className="text-center text-xs text-muted-foreground mt-4">
                Upgrade inmediato. Tu cuenta queda MAX por 12 meses.
              </p>
            </div>

            {/* ULTRA 12 */}
            <div className={`card-premium p-6 md:p-8 border-2 transition-all ${accompanyUpsell ? 'border-accent bg-accent/5' : 'border-accent/30 hover:border-accent/50'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                  <Star className="w-4 h-4" fill="currentColor" />
                  Licencia + Acompañamiento
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">ULTRA 12</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4 text-center">
                Todo lo de MAX 12, más:
              </p>

              <ul className="space-y-3 mb-6">
                {ultra12Features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-background/50 rounded-xl p-4 mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Valor ULTRA:</span>
                  <span className="text-foreground">$750</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Crédito por lo que ya pagaste:</span>
                  <span className="text-accent">–$97</span>
                </div>
                <div className="border-t border-border/30 pt-2 flex justify-between">
                  <span className="font-semibold">Pagas hoy:</span>
                  <span className="font-display text-2xl font-bold text-accent">$653</span>
                </div>
              </div>

              {accompanyUpsell ? (
                <div className="flex items-center justify-center gap-2 text-accent py-3">
                  <Check className="w-6 h-6" />
                  <span className="font-semibold">Seleccionado</span>
                </div>
              ) : (
                <Button variant="cta" size="lg" onClick={handleUltra12} className="w-full gap-2">
                  <Calendar className="w-4 h-4" />
                  Quiero ULTRA 12 (con acompañamiento)
                </Button>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PostCompra;
