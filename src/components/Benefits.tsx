import { Clock, RefreshCw, Users, Calendar, CreditCard, Image } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Atención 24/7 en segundos',
      description: 'Responde inmediatamente a cualquier hora.',
    },
    {
      icon: RefreshCw,
      title: 'Seguimiento automático',
      description: 'Recupera conversaciones que se enfriaron.',
    },
    {
      icon: Users,
      title: 'Califica y enruta leads',
      description: 'Identifica quién está listo para comprar.',
    },
    {
      icon: Calendar,
      title: 'Agendamiento sin fricción',
      description: 'Citas confirmadas mientras duermes.',
    },
    {
      icon: CreditCard,
      title: 'Envío de links de pago',
      description: 'Cierra ventas directamente en el chat.',
    },
    {
      icon: Image,
      title: 'Multimedia completo',
      description: 'Texto, audio, imágenes y documentos.',
    },
  ];

  return (
    <section className="py-24 relative bg-charcoal-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Todo lo que necesitas para <span className="text-accent text-glow-green">convertir</span> chats en ventas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-premium card-premium-hover p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
