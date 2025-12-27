import { Button } from '@/components/ui/button';
import { Check, Sparkles, ArrowRight, Clock, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentModule = () => {
  const plans = [
    {
      name: 'PRO',
      price: 47,
      idealFor: 'Empezar con IA conversacional',
      features: ['1 canal', '6 productos', '20k contactos'],
    },
    {
      name: 'PLUS',
      price: 97,
      popular: true,
      idealFor: 'Escalar con IA + Marketing',
      features: ['2 canales', '15 productos', 'Contactos ilimitados'],
    },
    {
      name: 'MAX',
      price: 147,
      idealFor: 'Operaciones de mayor escala',
      features: ['4 canales', '30 productos', 'Soporte prioritario'],
    },
  ];

  const faqs = [
    { q: '¿Hay pagos ocultos?', a: 'No. Hoy pagas $97 y empiezas en PLUS.' },
    { q: '¿Cuándo elijo mi plan mensual?', a: 'El día 31 eliges PRO, PLUS o MAX.' },
    { q: '¿Puedo cancelar?', a: 'Sí, sin contratos ni penalizaciones.' },
  ];

  return (
    <section id="pago" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Activación y pago <span className="text-accent text-glow-green">(sin sorpresas)</span>
          </h2>
        </div>

        {/* Bloque A: Setup Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="card-premium p-8 border-2 border-accent/30 bg-accent/5">
            <div className="text-center">
              <span className="text-sm text-accent font-medium">Hoy pagas solo la activación</span>
              <h3 className="font-display text-2xl font-bold mt-2 mb-4">
                Setup Inicial de Activación — <span className="text-accent">$97</span>
              </h3>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <Check className="w-4 h-4" />
                <span className="text-sm font-medium">Mes 1 incluido: empiezas en PLUS (valor $97)</span>
              </div>
              <p className="text-muted-foreground">Hoy no hay ningún cobro adicional.</p>
            </div>
          </div>
        </div>

        {/* Bloque B: Timeline */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="font-display text-xl font-semibold text-center mb-6">¿Qué pasa después?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { step: 'Hoy', text: 'Pagas $97' },
              { step: '10 min', text: 'Onboarding' },
              { step: '24-48h', text: 'Config + QA' },
              { step: 'Día 31', text: 'Eliges plan' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-accent text-xs font-medium">{item.step}</span>
                  <p className="text-sm text-foreground/80">{item.text}</p>
                </div>
                {i < 3 && <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />}
              </div>
            ))}
          </div>
        </div>

        {/* Bloque C: Plans for Month 2 */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="font-display text-xl font-semibold text-center mb-6">Planes para el Mes 2</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div key={plan.name} className={`card-premium p-4 ${plan.popular ? 'border-accent/30' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">{plan.name}</span>
                  <span className="text-accent font-bold">${plan.price}/mes</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{plan.idealFor}</p>
                <div className="flex flex-wrap gap-1">
                  {plan.features.map((f, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque D: Mini FAQ */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="grid gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <HelpCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-sm">{faq.q}</span>
                  <p className="text-xs text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/checkout">
            <Button variant="cta" size="xl" className="gap-2">
              <Sparkles className="w-5 h-5" />
              Activar mi Agente IA — $97
            </Button>
          </Link>
          <p className="mt-4 text-muted-foreground text-sm">
            Incluye Mes 1 PLUS • Cero técnico • Sin contratos
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentModule;
