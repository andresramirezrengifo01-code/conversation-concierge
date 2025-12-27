import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle, Calendar, BookOpen, FileText, ArrowRight } from 'lucide-react';
import { useFunnel } from '@/contexts/FunnelContext';
import group from '@/assets/group.svg';
import robotMascot from '@/assets/robot-mascot.png';

const WHATSAPP_SUPPORT_URL = '{{WHATSAPP_SUPPORT_URL}}';
const CALENDLY_URL = '{{CALENDLY_URL}}';
const POLICY_URL = '{{POLICY_URL}}';

const Gracias = () => {
  const { onboardingComplete, selectedPlan } = useFunnel();

  const nextSteps = [
    {
      title: 'Onboarding completado',
      description: 'Tu información fue recibida correctamente',
      completed: onboardingComplete,
    },
    {
      title: 'Configuración del agente',
      description: 'Nuestro equipo está configurando tu agente IA',
      completed: false,
    },
    {
      title: 'QA y pruebas',
      description: 'Verificamos que todo funcione correctamente',
      completed: false,
    },
    {
      title: 'Entrega y capacitación',
      description: 'Te entregamos tu agente listo para operar',
      completed: false,
    },
  ];

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
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-accent" />
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¡Todo listo! <span className="text-accent text-glow-green">Gracias</span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Tu onboarding fue recibido. Nuestro equipo ya está trabajando en configurar tu agente IA.
            </p>
          </div>

          {/* Mascot + Message */}
          <div className="card-premium p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
            <img
              src={robotMascot}
              alt="ConverxIA Robot"
              className="w-24 h-24 object-contain"
            />
            <div>
              <h2 className="font-display text-lg font-semibold mb-2">
                Tu agente estará listo pronto
              </h2>
              <p className="text-muted-foreground text-sm">
                En las próximas horas recibirás un mensaje confirmando que tu agente IA está activo y listo para operar. Mientras tanto, explora la Academy o agenda una llamada si tienes dudas.
              </p>
            </div>
          </div>

          {/* Next Steps Checklist */}
          <div className="card-premium p-6 mb-8">
            <h2 className="font-display text-xl font-semibold mb-6">Próximos pasos</h2>
            <div className="space-y-4">
              {nextSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl ${
                    step.completed ? 'bg-accent/10' : 'bg-background/50'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.completed
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {step.completed ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <h3 className={`font-medium ${step.completed ? 'text-accent' : ''}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plan Selection Info */}
          {selectedPlan && (
            <div className="card-premium p-4 mb-8 bg-accent/5 border-accent/20">
              <p className="text-sm text-center">
                <span className="text-accent font-medium">Plan seleccionado para Mes 2:</span>{' '}
                {selectedPlan} — Se activará automáticamente al terminar tu primer mes.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <a href={WHATSAPP_SUPPORT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <MessageCircle className="w-6 h-6 text-accent" />
                <span className="font-medium">Soporte WhatsApp</span>
                <span className="text-xs text-muted-foreground">Dudas o ayuda</span>
              </Button>
            </a>
            
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                <Calendar className="w-6 h-6 text-accent" />
                <span className="font-medium">Agendar llamada</span>
                <span className="text-xs text-muted-foreground">Con el equipo</span>
              </Button>
            </a>
            
            <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="font-medium">ConverxIA Academy</span>
              <span className="text-xs text-muted-foreground">Tutoriales y recursos</span>
            </Button>
          </div>

          {/* Plan Selection CTA */}
          {!selectedPlan && (
            <Link to="/seleccionar-plan">
              <Button variant="cta" size="lg" className="w-full gap-2 mb-8">
                Elegir plan para Mes 2
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          )}

          {/* Footer Links */}
          <div className="text-center pt-8 border-t border-border/30">
            <a
              href={POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <FileText className="w-4 h-4" />
              Términos y condiciones / Política de privacidad
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gracias;
