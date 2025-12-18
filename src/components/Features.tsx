import { Zap, Target, UserCheck, Send, MessageSquare, Image } from 'lucide-react';
import robotMascot from '@/assets/robot-mascot.png';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'IA empática',
      description: 'Tu mejor vendedor, en IA: responde al instante, 24/7, sin fallas.',
    },
    {
      icon: Target,
      title: 'Seguimiento infalible',
      description: 'Secuencia automática que insiste hasta cierre o descarte las ventas.',
    },
    {
      icon: UserCheck,
      title: 'Personalización avanzada',
      description: 'Distingue nuevo vs. recurrente, adapta el mensaje al instante y convierte más.',
    },
    {
      icon: Send,
      title: 'Campañas masivas',
      description: 'Dispara mensajes a toda tu base en 1 clic y crea picos de ventas en minutos.',
    },
    {
      icon: MessageSquare,
      title: 'Comunicación multimedial',
      description: 'Texto, imágenes, audios y documentos: responde como tu cliente prefiere.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¿Qué obtendrás con nuestra{' '}
              <span className="text-accent text-glow-green">interfaz</span> de ConverxIA?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Resultados tangibles desde la primera semana — más conversaciones ganadas, más citas, más cobros... con menos esfuerzo del equipo.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="card-premium card-premium-hover p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Robot mascot */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-full blur-3xl" />
            <img
              src={robotMascot}
              alt="ConverxIA Robot"
              className="relative z-10 w-full max-w-lg mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
