import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Building, Rocket } from 'lucide-react';
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
      includes: [
        'ConverxIA Chat completo',
        'Hasta 6 productos en el recomendador',
        'Usuarios y administradores ilimitados',
        'Agentes humanos sin límite',
        'Soporte por email (24-48h)',
        'Acceso a ConverxIA Academy',
        '1 canal activo (WhatsApp, IG, FB o TikTok)',
        'Hasta 20,000 contactos',
      ],
      example: 'Ideal si solo usas WhatsApp y tienes pocos productos.',
      checkoutUrl: '{{PRO_CHECKOUT_URL}}',
    },
    {
      id: 'PLUS' as const,
      name: 'PLUS',
      price: 97,
      icon: Building,
      popular: true,
      idealFor: 'Negocios en crecimiento que quieren escalar',
      includes: [
        'Todo lo de PRO',
        'ConverxIA Marketing completo',
        'Hasta 15 productos en recomendador',
        'Email marketing integrado',
        'Funnels y landing pages',
        'Herramientas para crecer en automático',
        '2 canales activos simultáneos',
        'Contactos y equipo ilimitados',
      ],
      example: 'Perfecto si vendes en WhatsApp + Instagram y quieres email marketing.',
      checkoutUrl: '{{PLUS_CHECKOUT_URL}}',
    },
    {
      id: 'MAX' as const,
      name: 'MAX',
      price: 147,
      icon: Rocket,
      idealFor: 'Operaciones grandes con alto volumen',
      includes: [
        'Todo lo de PLUS',
        'Hasta 30 productos en recomendador',
        'Funcionalidades avanzadas',
        'Capacidad para mayor escala',
        '4 canales activos (WA + IG + FB + TikTok)',
        'Contactos y equipo ilimitados',
        'Soporte prioritario',
      ],
      example: 'Para negocios con catálogo grande y presencia en todas las redes.',
      checkoutUrl: '{{MAX_CHECKOUT_URL}}',
    },
  ];

  const handleSelectPlan = (planId: 'PRO' | 'PLUS' | 'MAX') => {
    setSelectedPlan(planId);
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
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Check className="w-4 h-4" />
              <span className="text-sm font-medium">Tu Mes 1 PLUS ya está incluido</span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Elige tu plan para el <span className="text-accent text-glow-green">Mes 2</span>
            </h1>
            
            <p className="text-muted-foreground text-lg">
              Cuando termine tu primer mes, elige el plan que mejor se adapte a tus necesidades. Puedes cambiar en cualquier momento.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`card-premium p-6 relative ${
                  plan.popular ? 'border-accent/30 bg-accent/5' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Recomendado
                    </span>
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

                <div className="p-3 bg-background/50 rounded-lg mb-4">
                  <p className="text-sm font-medium text-accent">Ideal para:</p>
                  <p className="text-sm text-foreground/80">{plan.idealFor}</p>
                </div>

                <a href={plan.checkoutUrl}>
                  <Button
                    variant={plan.popular ? 'cta' : 'secondary-dark'}
                    className="w-full mb-4"
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    Elegir {plan.name}
                  </Button>
                </a>

                <div className="space-y-3 mb-4">
                  <p className="text-sm font-medium">Incluye:</p>
                  <ul className="space-y-2">
                    {plan.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/30">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Ejemplo:</span> {plan.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-muted-foreground text-sm">
            Sin contratos. Cancela cuando quieras. Puedes cambiar de plan en cualquier momento.
          </p>

          {/* Link to continue without selecting */}
          <div className="text-center mt-8">
            <Link
              to="/gracias"
              className="text-sm text-muted-foreground hover:text-accent transition-colors underline"
            >
              Ya lo decidí, ir a próximos pasos →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeleccionarPlan;
