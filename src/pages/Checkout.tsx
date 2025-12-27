import { Button } from '@/components/ui/button';
import { Check, Shield, ArrowRight, Lock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import group from '@/assets/group.svg';

const CHECKOUT_URL = '{{CHECKOUT_URL}}';

const Checkout = () => {
  const included = [
    'Activación completa de tu cuenta ConverxIA',
    'Configuración del Panel ConverxIA Launch (agente empático)',
    'Flujos esenciales: bienvenida, onboarding, info clave, toma de pedido',
    'FAQs, seguimiento/retomas, links de pago manuales',
    'QA interno antes de entrega',
    'Mes 1 incluido en plan PLUS (valor $97)',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-mesh">
      {/* Background effects */}
      <div className="fixed inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 py-6 border-b border-border/30 bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="inline-block">
            <img src={group} alt="ConverxIA" className="h-10" />
          </Link>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Shield className="w-4 h-4 text-accent" />
            <span>Pago 100% seguro</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Title */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Último paso</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Resumen de tu <span className="text-accent text-glow-green">activación</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Revisa los detalles antes de continuar al pago seguro.
            </p>
          </div>

          {/* Order Summary Card */}
          <div className="card-premium p-8 mb-8 border-2 border-accent/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-border/30 gap-4">
              <div>
                <h2 className="font-display text-2xl font-bold">Setup Inicial de Activación</h2>
                <p className="text-muted-foreground mt-1">Pago único • Sin suscripción hoy</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-accent">$97</span>
                <p className="text-muted-foreground text-sm">USD</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                Incluido en tu activación:
              </h3>
              <ul className="grid gap-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-xl">
                    <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold text-lg">Mes 1 PLUS ya incluido</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Hoy no hay ningún cobro adicional. El día 31 eliges tu plan mensual.
              </p>
            </div>
          </div>

          {/* What happens next */}
          <div className="card-premium p-6 mb-8">
            <h3 className="font-semibold mb-6 text-center">¿Qué pasa después del pago?</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Onboarding', desc: 'Completas el formulario (10 min)' },
                { step: '2', title: 'Configuración', desc: 'Nuestro equipo configura + QA' },
                { step: '3', title: 'Día 31', desc: 'Eliges tu plan mensual' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-background/50 rounded-xl">
                  <div className="w-10 h-10 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a href={CHECKOUT_URL} className="block">
            <Button variant="cta" size="xl" className="w-full gap-3 text-lg">
              <Lock className="w-5 h-5" />
              Ir al pago seguro — $97
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Pago 100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent" />
              <span>SSL encriptado</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>Sin contratos</span>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Al pagar vuelves automáticamente para continuar con el onboarding.
          </p>

          {/* Dev mode: simulate payment */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-center text-muted-foreground text-xs mb-4">
              [Modo desarrollo] Simular pago completado:
            </p>
            <Link to="/post-compra?paid=true">
              <Button variant="outline" className="w-full">
                Simular pago exitoso →
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
