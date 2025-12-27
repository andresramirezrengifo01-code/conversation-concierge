import { Button } from '@/components/ui/button';
import { Check, Shield, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import group from '@/assets/group.svg';

const CHECKOUT_URL = '{{CHECKOUT_URL}}';

const Checkout = () => {
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

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Resumen de tu <span className="text-accent text-glow-green">activación</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Revisa los detalles antes de continuar al pago seguro.
            </p>
          </div>

          {/* Order Summary Card */}
          <div className="card-premium p-8 mb-8">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/30">
              <div>
                <h2 className="font-display text-xl font-semibold">Setup Inicial de Activación</h2>
                <p className="text-muted-foreground text-sm mt-1">Pago único</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold">$97</span>
                <p className="text-accent text-sm font-medium">USD</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="font-semibold text-foreground/90">Incluido en tu activación:</h3>
              <ul className="space-y-3">
                {[
                  'Activación completa de tu cuenta ConverxIA',
                  'Configuración del Panel ConverxIA Launch (agente empático)',
                  'Flujos esenciales: bienvenida, onboarding, info, pedidos, FAQs, seguimiento',
                  'QA interno antes de entrega',
                  'Mes 1 incluido en plan PLUS (valor $97)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
              <p className="text-sm text-center">
                <span className="text-accent font-semibold">✓ Mes 1 PLUS ya incluido.</span>{' '}
                <span className="text-muted-foreground">Hoy no hay ningún cobro adicional.</span>
              </p>
            </div>
          </div>

          {/* What happens next */}
          <div className="card-premium p-6 mb-8">
            <h3 className="font-semibold mb-4">¿Qué pasa después del pago?</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">1</span>
                <span className="text-foreground/80">Volverás automáticamente para completar el onboarding (10 min)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">2</span>
                <span className="text-foreground/80">Nuestro equipo configura tu agente + QA</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">3</span>
                <span className="text-foreground/80">El día 31 eliges tu plan para el Mes 2</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a href={CHECKOUT_URL} className="block">
            <Button variant="cta" size="xl" className="w-full gap-3">
              <Lock className="w-5 h-5" />
              Ir al pago seguro
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>

          {/* Trust badges */}
          <div className="mt-6 flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Pago 100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent" />
              <span>SSL encriptado</span>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Al pagar vuelves automáticamente para continuar con el onboarding.
          </p>

          {/* Dev mode: simulate payment */}
          <div className="mt-12 pt-8 border-t border-border/30">
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
