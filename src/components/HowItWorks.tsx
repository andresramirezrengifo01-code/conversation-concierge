import { Link2, FileText, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Link2,
      number: '01',
      title: 'Conectamos tus canales',
      description: 'WhatsApp, Instagram, Facebook, TikTok. Tu eliges según tu plan.',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Cargamos tu información base + productos',
      description: 'Políticas, precios, horarios y hasta 30 productos en el recomendador.',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Sales a operar con dashboard listo',
      description: 'Tu Agente IA responde, califica leads y hace seguimiento desde el día 1.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Listo en <span className="text-accent text-glow-green">horas</span>. Sin aprender nada técnico.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Nuestro equipo se encarga de todo. Tú solo entregas tu información.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-premium card-premium-hover p-8 text-center group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <span className="absolute -top-2 -right-2 md:right-4 text-6xl font-display font-bold text-foreground/5">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          Puedes empezar simple y escalar después.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
