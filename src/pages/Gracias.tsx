import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, Calendar, BookOpen, FileText, Sparkles } from 'lucide-react';
import { useFunnel } from '@/contexts/FunnelContext';
import group from '@/assets/group.svg';
import robotMascot from '@/assets/robot-mascot.png';

const WHATSAPP_SUPPORT_URL = '{{WHATSAPP_SUPPORT_URL}}';
const CALENDLY_URL = '{{CALENDLY_URL}}';
const POLICY_URL = '{{POLICY_URL}}';

const Gracias = () => {
  const { onboardingComplete, selectedPlan } = useFunnel();

  const nextSteps = [
    { title: 'Onboarding completado', description: 'Tu información fue recibida', completed: onboardingComplete },
    { title: 'Configuración del agente', description: 'Nuestro equipo trabaja en tu agente', completed: false },
    { title: 'QA y pruebas', description: 'Verificamos que todo funcione', completed: false },
    { title: 'Entrega', description: 'Te entregamos tu agente listo', completed: false },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-mesh">
      <div className="fixed inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <header className="relative z-10 py-6 border-b border-border/30 bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-block">
            <img src={group} alt="ConverxIA" className="h-10" />
          </Link>
        </div>
      </header>

      <main className="relative z-10 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-accent" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¡Todo listo! <span className="text-accent text-glow-green">Gracias</span>
            </h1>
            <p className="text-muted-foreground text-lg">Nuestro equipo ya está configurando tu agente IA.</p>
          </div>

          <div className="card-premium p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
            <img src={robotMascot} alt="ConverxIA Robot" className="w-24 h-24 object-contain" />
            <div>
              <h2 className="font-display text-lg font-semibold mb-2">Tu agente estará listo pronto</h2>
              <p className="text-muted-foreground text-sm">Recibirás un mensaje confirmando que tu agente está activo.</p>
            </div>
          </div>

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
              <p className="text-sm"><span className="text-accent font-medium">Plan Mes 2:</span> {selectedPlan}</p>
            </div>
          )}

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

          {!selectedPlan && (
            <Link to="/seleccionar-plan">
              <Button variant="cta" size="lg" className="w-full gap-2 mb-8">
                <Sparkles className="w-4 h-4" />
                Elegir plan para Mes 2
              </Button>
            </Link>
          )}

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
