import { 
  Clock, 
  RefreshCw, 
  Target, 
  Calendar, 
  CreditCard, 
  FileImage 
} from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: Clock,
      title: 'Atención 24/7 en segundos',
      description: 'Responde instantáneamente sin importar la hora o el día.',
    },
    {
      icon: RefreshCw,
      title: 'Seguimiento automático',
      description: 'Retoma conversaciones frías y recupera ventas perdidas.',
    },
    {
      icon: Target,
      title: 'Califica y enruta leads',
      description: 'Identifica clientes listos para comprar y avísale a tu equipo.',
    },
    {
      icon: Calendar,
      title: 'Agendamiento sin fricción',
      description: 'Conecta con tu calendario y deja que el agente agende por ti.',
    },
    {
      icon: CreditCard,
      title: 'Envío de links de pago',
      description: 'Guía al cliente hasta el pago con links personalizados.',
    },
    {
      icon: FileImage,
      title: 'Texto, audio, imágenes, docs',
      description: 'Responde en el formato que el cliente prefiera.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Todo lo que necesitas para <span className="text-accent text-glow-green">vender más</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Herramientas diseñadas para convertir conversaciones en ventas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-premium card-premium-hover p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
