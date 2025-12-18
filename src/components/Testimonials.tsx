import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Javier Salazar',
      company: 'Clínica Estética Lumière',
      text: 'Antes tardábamos horas en responder; ahora la IA contesta en segundos y no se nos enfrían los chats. En ConverxIA encontramos algo que verdaderamente funciona.',
      date: 'Noviembre 2025',
    },
    {
      name: 'Marcela González',
      company: 'CEO Clínica Estética Lumière',
      text: 'Precalifica, gestiona objeciones y hace seguimiento sin que el paciente se pierda. Resultados: +63 consultas calificadas y +17% ticket medio en 60 días.',
      date: 'Noviembre 2025',
    },
    {
      name: 'Carlos Mendoza',
      company: 'Tienda Online TechGadgets',
      text: 'Vendemos 24/7 sin estar pendientes. El agente responde preguntas sobre stock, envíos y hasta cierra ventas mientras dormimos.',
      date: 'Octubre 2025',
    },
  ];

  const logos = ['Terpel', 'Tesa', 'Hotmart', 'Cambridge', 'Kimberly-Clark', 'Huggies'];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative bg-charcoal-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Resultados cuando el seguimiento deja de depender de ti
          </h2>
        </div>

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-secondary/50 border border-border flex items-center justify-center hover:bg-secondary transition-colors flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="card-premium p-8 bg-gradient-to-br from-card to-card/50">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-bold">{testimonial.name[0]}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-accent text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-secondary/50 border border-border flex items-center justify-center hover:bg-secondary transition-colors flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-accent w-6' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Logos */}
        <div className="mt-16">
          <p className="text-center text-muted-foreground mb-8">
            Grandes marcas que confían en <span className="text-foreground">ConverxIA</span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-xl font-display font-bold text-foreground/50"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
