import { 
  Check, 
  Inbox, 
  Bot, 
  BarChart3, 
  Users, 
  Zap, 
  Settings,
  Bell,
  FileText
} from 'lucide-react';

const InterfaceList = () => {
  const features = [
    { icon: Inbox, text: 'Bandeja unificada de todos tus canales' },
    { icon: Bot, text: 'Agente IA configurado con tu información' },
    { icon: Users, text: 'Handoff a humano en un clic' },
    { icon: BarChart3, text: 'Dashboard con métricas de conversación' },
    { icon: Zap, text: 'Automatización de seguimientos' },
    { icon: Bell, text: 'Notificaciones cuando tu equipo debe intervenir' },
    { icon: FileText, text: 'Historial completo de cada cliente' },
    { icon: Settings, text: 'Configuración sin código' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Qué obtendrás con <span className="text-accent text-glow-green">nuestra interfaz</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para operar tu atención conversacional
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-premium p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-background/50 hover:bg-accent/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground/90 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceList;
