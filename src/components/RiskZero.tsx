import { Check } from 'lucide-react';
import robotMascot from '@/assets/robot-mascot.png';

const RiskZero = () => {
  const guarantees = [
    'Dashboard completo configurado y funcional',
    'Verificación QA exhaustiva antes de la entrega',
    'Capacitación para usar tu sistema de forma autónoma',
    'Soporte para dudas del sistema',
    'Acceso inmediato desde el día 1',
    'Acceso completo a ConverxIA Academy',
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Robot mascot */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                <img
                  src={robotMascot}
                  alt="ConverxIA Robot Mascot"
                  className="relative z-10 w-full max-w-md mx-auto animate-float"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Tu inversión está <span className="text-accent text-glow-green">protegida</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Implementación guiada, sin integraciones complicadas. Te entregamos exactamente lo que ves en nuestros demos.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-foreground/80">{guarantee}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-muted-foreground text-sm">
                Tu agente IA estará listo y operando exactamente como se muestra en nuestros ejemplos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskZero;
