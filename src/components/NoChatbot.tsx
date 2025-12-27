import { Bot, Heart, Zap } from 'lucide-react';

const NoChatbot = () => {
  const cards = [
    {
      icon: Bot,
      badge: 'No es un chatbot',
      title: 'Es un agente que entiende contexto',
      description: 'Responde preguntas complejas, no solo palabras clave. Entiende objeciones, horarios, precios y más.',
    },
    {
      icon: Heart,
      badge: 'No es impersonal',
      title: 'Habla con el tono de tu marca',
      description: 'Configura si es formal o cercano, con emojis o sin ellos. Tu agente habla como tú.',
    },
    {
      icon: Zap,
      badge: 'No es lento',
      title: 'Responde en segundos, 24/7',
      description: 'Mientras duermes, viajas o atiendes otros clientes. Cero mensajes sin respuesta.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Esto <span className="text-accent text-glow-green">no</span> es un chatbot tradicional
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Es un agente conversacional entrenado con tu información
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card-premium card-premium-hover p-8"
            >
              <div className="chip-green text-xs mb-4">{card.badge}</div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoChatbot;
