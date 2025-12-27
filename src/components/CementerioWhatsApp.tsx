import { Skull, Clock, UserX, TrendingDown } from 'lucide-react';

const CementerioWhatsApp = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Respuestas tardías',
      description: 'Los clientes escriben y no contestas a tiempo. La venta se enfría.',
    },
    {
      icon: UserX,
      title: 'Chats sin seguimiento',
      description: 'Preguntan, no compran y nadie les vuelve a escribir. Se olvidan de ti.',
    },
    {
      icon: TrendingDown,
      title: 'Tu equipo no alcanza',
      description: 'Vendes más de lo que puedes atender. Pierdes ventas por falta de manos.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Skull className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">¿Te suena familiar?</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Bienvenido al <span className="text-primary">cementerio</span> de WhatsApp
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Donde mueren las ventas que pudieron ser tuyas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card-premium card-premium-hover p-6 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CementerioWhatsApp;
