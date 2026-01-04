import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, Calendar, BookOpen, FileText, Sparkles, AlertTriangle, Zap, Crown, Rocket } from 'lucide-react';
import { useFunnel } from '@/contexts/FunnelContext';
import robotMascot from '@/assets/robot-mascot.png';

const WHATSAPP_SUPPORT_URL = '{{WHATSAPP_SUPPORT_URL}}';
const CALENDLY_URL = '{{CALENDLY_URL}}';
const POLICY_URL = '{{POLICY_URL}}';

const Gracias = () => {
  const { onboardingComplete, selectedPlan, setSelectedPlan } = useFunnel();

  // Dynamic date formatting
  const today = new Date();
  const dayName = today.toLocaleDateString('es-ES', { weekday: 'long' });
  const dayNumber = today.getDate();
  const monthName = today.toLocaleDateString('es-ES', { month: 'long' });

  const nextSteps = [
    { title: 'Onboarding completado', description: 'Tu información fue recibida', completed: onboardingComplete },
    { title: 'Configuración del agente', description: 'Nuestro equipo trabaja en tu agente', completed: false },
    { title: 'QA y pruebas', description: 'Verificamos que todo funcione', completed: false },
    { title: 'Entrega', description: 'Te entregamos tu agente listo', completed: false },
  ];

  const plans = [
    {
      id: 'PRO' as const,
      name: 'PRO',
      price: 47,
      icon: Sparkles,
      channels: '1 canal',
      products: '6 productos',
      contacts: '20K contactos',
    },
    {
      id: 'PLUS' as const,
      name: 'PLUS',
      price: 97,
      icon: Rocket,
      channels: '2 canales',
      products: '15 productos',
      contacts: 'Ilimitados',
    },
    {
      id: 'ULTRA' as const,
      name: 'ULTRA',
      price: 147,
      icon: Crown,
      featured: true,
      channels: '4 canales',
      products: '30 productos',
      contacts: 'Ilimitados',
      extras: ['Soporte prioritario', 'Funciones avanzadas'],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-mesh">
      <div className="fixed inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Sticky top bar with attention message */}
      <header className="fixed top-0 left-0 right-0 z-50 py-3 border-b border-accent/30 bg-background/95 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-center">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            <span className="text-yellow-500 font-bold uppercase text-sm">ATENCIÓN</span>
            <span className="text-foreground text-sm">
              Hoy {dayName} {dayNumber} de {monthName} tu cuenta ya está activa
            </span>
            <span className="text-muted-foreground text-sm hidden sm:inline">|</span>
            <span className="text-accent font-semibold text-sm hidden sm:inline">Solo te falta 1 paso</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success header */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-accent" />
            </div>
            <p className="text-accent font-medium mb-2">¡Pago confirmado!</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¡Bienvenido a <span className="text-accent text-glow-green">ConverxIA</span>!
            </h1>
          </div>

          {/* Upsell intro block */}
          <div className="text-center mb-8 p-6 rounded-2xl bg-gradient-to-b from-accent/10 to-transparent border border-accent/20">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Desbloqueaste una mejora de máximo rendimiento</span>
            </div>
            <p className="text-destructive font-medium mb-2">No cierres esta pestaña: solo está disponible ahora</p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Más canales</span> | 
              <span className="text-foreground font-medium"> Más capacidad</span> | 
              <span className="text-foreground font-medium"> Mejor rendimiento</span>
            </p>
          </div>

          {/* Plans grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative p-5 rounded-2xl transition-all duration-300 ${
                  plan.featured 
                    ? 'bg-gradient-to-b from-accent/20 to-accent/5 border-2 border-accent shadow-lg shadow-accent/20 scale-105 md:scale-110' 
                    : 'card-premium hover:border-accent/30'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg animate-pulse">
                      ⚡ RECOMENDADO
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3 mt-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.featured ? 'bg-accent text-accent-foreground' : 'bg-accent/10'}`}>
                    <plan.icon className={`w-5 h-5 ${plan.featured ? '' : 'text-accent'}`} />
                  </div>
                  <h3 className={`font-display text-xl font-bold ${plan.featured ? 'text-accent' : ''}`}>{plan.name}</h3>
                </div>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${plan.featured ? 'text-accent' : ''}`}>${plan.price}</span>
                  <span className="text-muted-foreground text-sm">/mes</span>
                </div>
                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{plan.channels}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{plan.products}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{plan.contacts}</span>
                  </li>
                  {plan.extras?.map((extra, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="font-medium text-accent">{extra}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.featured ? 'cta' : 'secondary-dark'} 
                  className={`w-full ${plan.featured ? 'shadow-lg shadow-accent/30' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.featured ? '🚀 Elegir ULTRA' : `Elegir ${plan.name}`}
                </Button>
              </div>
            ))}
          </div>

          {/* Robot + message */}
          <div className="card-premium p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
            <img src={robotMascot} alt="ConverxIA Robot" className="w-24 h-24 object-contain" />
            <div>
              <h2 className="font-display text-lg font-semibold mb-2">Tu agente estará listo pronto</h2>
              <p className="text-muted-foreground text-sm">Recibirás un mensaje confirmando que tu agente está activo.</p>
            </div>
          </div>

          {/* Next steps */}
          <div className="card-premium p-6 mb-8">
            <h2 className="font-display text-xl font-semibold mb-6">Próximos pasos</h2>
            <div className="space-y-3">
              {nextSteps.map((step, i) => (
                <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${step.completed ? 'bg-accent/10' : 'bg-background/50'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${step.completed ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {step.completed ? <Check className="w-4 h-4" /> : <span className="text-sm font-medium">{i + 1}</span>}
                  </div>
                  <div>
                    <h3 className={`font-medium ${step.completed ? 'text-accent' : ''}`}>{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedPlan && (
            <div className="card-premium p-4 mb-8 bg-accent/5 border-accent/20 text-center">
              <p className="text-sm"><span className="text-accent font-medium">Plan seleccionado:</span> {selectedPlan}</p>
            </div>
          )}

          {/* Support buttons */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <a href={WHATSAPP_SUPPORT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <MessageCircle className="w-6 h-6 text-accent" />
                <span className="font-medium">Soporte WhatsApp</span>
              </Button>
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Calendar className="w-6 h-6 text-accent" />
                <span className="font-medium">Agendar llamada</span>
              </Button>
            </a>
            <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="font-medium">Academy</span>
            </Button>
          </div>

          <div className="text-center pt-8 border-t border-border/30">
            <a href={POLICY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
              <FileText className="w-4 h-4" />
              Términos y condiciones
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gracias;
