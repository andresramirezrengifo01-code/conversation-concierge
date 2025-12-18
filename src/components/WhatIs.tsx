import { Inbox, Bot, Target } from 'lucide-react';

const WhatIs = () => {
  const features = [
    {
      icon: Inbox,
      title: 'Bandeja unificada omnicanal',
      description: 'WhatsApp, Instagram, Facebook, TikTok en un solo lugar. Sin saltar entre apps.',
    },
    {
      icon: Bot,
      title: 'IA + handoff a humano',
      description: 'Tu agente responde 24/7. Tu equipo entra solo cuando hace falta criterio humano.',
    },
    {
      icon: Target,
      title: 'Seguimiento automático + calificación',
      description: 'Recordatorios, retomas y leads calificados sin que nadie lo olvide.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            No es un chatbot. Es tu <span className="text-accent text-glow-green">operación conversacional</span> en un solo lugar.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-premium card-premium-hover p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
