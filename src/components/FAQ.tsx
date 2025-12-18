import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Necesito saber de tecnología?',
      answer: 'Para nada. Con nuestro Setup Todo Incluido, nuestro equipo configura absolutamente todo. Tú solo entregas información básica y usas un dashboard sencillo.',
    },
    {
      question: '¿En cuánto tiempo queda listo mi agente?',
      answer: 'Con el Setup Todo Incluido, tu agente IA está configurado y operando en horas (depende de la información que nos entregues). Sin tutoriales largos ni complicaciones.',
    },
    {
      question: '¿Qué pasa si no tengo toda la información de mi negocio?',
      answer: 'Con solo la información básica de tu empresa y algunos productos iniciales, tu agente puede empezar a operar. Después podrás cargar más productos fácilmente desde tu Dashboard.',
    },
    {
      question: '¿Qué canales puedo conectar?',
      answer: 'WhatsApp (principal), Instagram DM, Facebook Messenger y TikTok. La cantidad de canales activos depende del plan que elijas.',
    },
    {
      question: '¿El agente IA reemplaza a mi equipo?',
      answer: 'No necesariamente. Para productos de bajo costo puede completar ventas automáticamente. Para productos consultivos, califica al prospecto y pasa al cliente "listo" a tu equipo humano.',
    },
    {
      question: '¿Me pueden bloquear WhatsApp?',
      answer: 'Usamos WhatsApp Business API (WABA), la forma oficial de automatizar. Esto reduce drásticamente el riesgo de bloqueo comparado con métodos no autorizados. Además, seguimos buenas prácticas.',
    },
    {
      question: '¿Cómo cobra WhatsApp?',
      answer: 'WhatsApp cobra por conversaciones de 24 horas (el costo varía según país y volumen). ConverxIA no agrega comisión ni markup sobre esas conversaciones.',
    },
    {
      question: '¿Puedo cancelar cuando quiera?',
      answer: 'Completamente. Todos nuestros planes mensuales son sin contratos ni permanencia. Cancelas cuando quieras sin penalidades.',
    },
    {
      question: '¿Mis datos están seguros?',
      answer: 'Sí. Todas las conversaciones y datos se almacenan de forma segura y encriptada. Solo tú tienes acceso a la información de tu negocio. Cumplimos con RGPD.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-charcoal-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Preguntas <span className="text-accent text-glow-green">frecuentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact card */}
          <div className="mt-12 card-premium p-8 text-center bg-gradient-to-br from-card to-accent/5 border-accent/20">
            <h3 className="font-display text-xl font-semibold mb-2">
              ¿Te quedó una pregunta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está listo para ayudarte.
            </p>
            <Button variant="outline-green" size="lg">
              <MessageCircle className="w-5 h-5" />
              Hablar con el equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
