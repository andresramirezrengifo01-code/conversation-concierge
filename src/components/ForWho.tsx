import { ShoppingBag, Briefcase, Stethoscope, BookOpen, Users } from 'lucide-react';

const ForWho = () => {
  const audiences = [
    { icon: ShoppingBag, label: 'Ecommerce' },
    { icon: Briefcase, label: 'Servicios' },
    { icon: Stethoscope, label: 'Clínicas' },
    { icon: BookOpen, label: 'Info-productos' },
    { icon: Users, label: 'Agencias' },
  ];

  const painPoints = [
    'Te escriben fuera de horario',
    'Se enfrían chats sin seguimiento',
    'Tu equipo no alcanza',
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Si vendes por <span className="text-accent text-glow-green">WhatsApp</span> o DMs, esto es para ti.
          </h2>
        </div>

        {/* Audience tiles */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="card-premium card-premium-hover px-6 py-4 flex items-center gap-3"
            >
              <audience.icon className="w-5 h-5 text-accent" />
              <span className="font-medium">{audience.label}</span>
            </div>
          ))}
        </div>

        {/* Pain points */}
        <div className="max-w-2xl mx-auto">
          <div className="card-premium p-8">
            <h3 className="text-lg font-semibold mb-6 text-center text-muted-foreground">
              ¿Te identificas?
            </h3>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✗</span>
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
