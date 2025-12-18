import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'PRO',
      price: 47,
      description: 'Ideal para empezar con IA conversacional.',
      popular: false,
      features: [
        'ConverxIA Chat completo',
        'Hasta 6 productos en agente recomendador',
        'Usuarios y administradores ilimitados',
        'Agentes humanos de chat sin límite',
        'Soporte estándar por email (24-48h)',
        'Acceso completo a ConverxIA Academy',
        '1 canal activo (WhatsApp, IG, FB o TikTok)',
        'Hasta 20,000 contactos',
      ],
    },
    {
      name: 'PLUS',
      price: 97,
      description: 'Escala tu negocio con IA + Marketing.',
      popular: true,
      features: [
        'Todo lo de PRO',
        'ConverxIA Marketing completo',
        'Hasta 15 productos en agente recomendador',
        'Email marketing',
        'Funnels y landing pages',
        'Herramientas para crecer en automático',
        '2 canales activos en simultáneo',
        'Contactos y equipo ilimitados',
      ],
    },
    {
      name: 'MAX',
      price: 147,
      description: 'La solución completa para negocios que quieren más.',
      popular: false,
      features: [
        'Todo lo de PLUS',
        'Hasta 30 productos en agente recomendador',
        'Funcionalidades avanzadas',
        'Capacidad para operaciones de mayor escala',
        '4 canales activos (WhatsApp + IG + FB + TikTok)',
        'Contactos y equipo ilimitados',
        'Soporte prioritario',
      ],
    },
  ];

  return (
    <section id="planes" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Elige tu plan <span className="text-accent text-glow-green">perfecto</span>
          </h2>
        </div>

        {/* Setup info */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <p className="text-lg">
              Empieza con <span className="text-accent font-semibold">Setup $97</span> (pago único) — incluye tu primer mes.
            </p>
            <p className="text-muted-foreground mt-2">
              Luego eliges el plan mensual según canales y catálogo.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-premium p-8 relative ${
                plan.popular ? 'border-accent/30 bg-accent/5' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </div>

              <Button
                variant={plan.popular ? 'cta' : 'secondary-dark'}
                className="w-full mb-6"
                size="lg"
              >
                <Sparkles className="w-4 h-4" />
                Seleccionar Plan
              </Button>

              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground text-sm">
          Sin contratos. Cancela cuando quieras.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
