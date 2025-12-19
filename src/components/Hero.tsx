import { Button } from '@/components/ui/button';
import { Sparkles, Play, Clock, Settings, MessageSquare, CreditCard } from 'lucide-react';

const Hero = () => {
  const trustChips = [
    { icon: Clock, label: 'Implementación en horas' },
    { icon: Settings, label: 'Cero técnico' },
    { icon: MessageSquare, label: 'WhatsApp API oficial (WABA)' },
    { icon: CreditCard, label: 'Sin comisiones por mensajes' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-mesh">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Eyebrow badge */}
          <div className="animate-fade-up">
            <span className="eyebrow-badge">
              Si te escriben y no respondes rápido, se enfría la venta.
            </span>
          </div>

          {/* Main headline */}
          <h1 className="mt-8 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up stagger-1">
            Convierte{' '}
            <span className="text-accent text-glow-green">conversaciones</span>{' '}
            en ventas, sin estar pegado al celular.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up stagger-2">
            ConverxIA responde en segundos 24/7 con el tono de tu marca, hace seguimiento y guía al cliente a agendar o pagar.{' '}
            <span className="text-foreground">Si hace falta, tu equipo toma el control en un clic.</span>
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Button variant="cta" size="xl" className="w-full sm:w-auto gap-2">
              <Sparkles className="w-5 h-5" />
              Activar mi Agente IA
            </Button>
            <Button variant="secondary-dark" size="xl" className="w-full sm:w-auto gap-2">
              <Play className="w-5 h-5" />
              Ver cómo funciona (2 min)
            </Button>
          </div>

          {/* Trust chips */} 
        </div>

        {/* VSL Container */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-up stagger-5">
          <div className="vsl-container aspect-video relative group cursor-pointer">
            {/* Video placeholder with mesh pattern */}
            <div className="absolute inset-0 bg-dots opacity-20" />
            
            {/* Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="chip-green text-xs">
                VSL / DEMO
              </span>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="play-button group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        
          {/* Trust chips */} 
          <div className="mt-8 flex flex-row items-center justify-center gap-3 flex-nowrap animate-fade-up stagger-5">
            {trustChips.map((chip, index) => (
              <div key={index} className="chip whitespace-nowrap">
                <chip.icon className="w-4 h-4 text-accent" />
                <span className="text-foreground/80">{chip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
