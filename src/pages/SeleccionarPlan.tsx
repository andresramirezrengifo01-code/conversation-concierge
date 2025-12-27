import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Building, Rocket, ArrowRight } from 'lucide-react';
import { useFunnel } from '@/contexts/FunnelContext';
import group from '@/assets/group.svg';

const SeleccionarPlan = () => {
  const { setSelectedPlan } = useFunnel();

  const plans = [
    {
      id: 'PRO' as const,
      name: 'PRO',
      price: 47,
      icon: Sparkles,
      idealFor: 'Negocios que empiezan con IA conversacional',
      includes: ['1 canal activo', '6 productos en recomendador', '20,000 contactos', 'Soporte por email'],
      example: 'Ideal si solo usas WhatsApp y tienes pocos productos.',
    },
    {
      id: 'PLUS' as const,
      name: 'PLUS',
      price: 97,
      icon: Building,
      popular: true,
      idealFor: 'Negocios en crecimiento que quieren escalar',
      includes: ['2 canales activos', '15 productos', 'Contactos ilimitados', 'Email marketing incluido'],
      example: 'Perfecto si vendes en WhatsApp + Instagram.',
    },
    {
      id: 'MAX' as const,
      name: 'MAX',
      price: 147,
      icon: Rocket,
      idealFor: 'Operaciones grandes con alto volumen',
      includes: ['4 canales activos', '30 productos', 'Soporte prioritario', 'Funciones avanzadas'],
      example: 'Para negocios con catálogo grande.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-mesh">
      <div className="fixed inset-0 bg-dots opacity-20 pointer-events-none" />
      
      <header className="relative z-10 py-6 border-b border-border/30 bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-block">
            <img src={group} alt="ConverxIA" className="h-10" />
          </Link>
        </div>
      </header>

      <main className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Check className="w-4 h-4" />
              <span className="text-sm font-medium">Tu Mes 1 PLUS ya está incluido</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Elige tu plan para el <span className="text-accent text-glow-green">Mes 2</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Cuando termine tu primer mes, elige el plan que mejor se adapte. Puedes cambiar en cualquier momento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.id} className={`card-premium p-6 relative ${plan.popular ? 'border-2 border-accent/30 bg-accent/5' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">Recomendado</span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <plan.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{plan.idealFor}</p>
                <Link to="/gracias" onClick={() => setSelectedPlan(plan.id)}>
                  <Button variant={plan.popular ? 'cta' : 'secondary-dark'} className="w-full mb-4 gap-2">
                    Elegir {plan.name}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <ul className="space-y-2">
                  {plan.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 pt-4 border-t border-border/30 text-xs text-muted-foreground">{plan.example}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground text-sm">Sin contratos. Cancela cuando quieras.</p>
        </div>
      </main>
    </div>
  );
};

export default SeleccionarPlan;
