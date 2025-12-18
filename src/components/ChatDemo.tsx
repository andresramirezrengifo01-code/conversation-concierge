import { useState } from 'react';
import { MessageSquare, DollarSign, Calendar, RefreshCw } from 'lucide-react';

const ChatDemo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: DollarSign,
      label: 'Objeción de precio',
      messages: [
        { type: 'user', text: 'Está un poco caro, ¿no tienen algo más económico?' },
        { type: 'bot', text: '¡Entiendo perfectamente! El precio refleja la calidad y durabilidad del producto. Además, incluimos envío gratis y garantía de 1 año. ¿Te gustaría conocer nuestro plan de pago en 3 cuotas sin interés?' },
        { type: 'user', text: 'Mmm, déjame pensarlo' },
        { type: 'bot', text: 'Claro, sin presión. Por cierto, tenemos un 15% de descuento para primera compra válido solo hoy. ¿Te envío el link de pago con el descuento aplicado?' },
      ],
    },
    {
      icon: Calendar,
      label: 'Disponibilidad',
      messages: [
        { type: 'user', text: '¿Tienen disponible el servicio para mañana?' },
        { type: 'bot', text: '¡Hola! Déjame revisar la agenda. Tenemos disponibilidad mañana a las 10am, 2pm y 5pm. ¿Cuál horario te funciona mejor?' },
        { type: 'user', text: 'A las 2pm estaría bien' },
        { type: 'bot', text: 'Perfecto, las 2pm confirmado. Te envío el link para agendar y asegurar tu espacio. ¿A qué número te confirmo el recordatorio?' },
      ],
    },
    {
      icon: MessageSquare,
      label: 'Link de pago',
      messages: [
        { type: 'user', text: 'Quiero comprar el paquete premium' },
        { type: 'bot', text: '¡Excelente elección! El paquete Premium incluye todo lo que necesitas. El total es $297 USD. ¿Te envío el link de pago seguro?' },
        { type: 'user', text: 'Sí, por favor' },
        { type: 'bot', text: 'Aquí está tu link de pago: [link] Una vez confirmado, recibirás acceso inmediato a tu cuenta. ¿Necesitas factura?' },
      ],
    },
    {
      icon: RefreshCw,
      label: 'Seguimiento',
      messages: [
        { type: 'bot', text: '¡Hola! Vi que estabas interesado en nuestro servicio la semana pasada. ¿Pudiste revisar la propuesta que te envié?' },
        { type: 'user', text: 'Sí, pero todavía no me decido' },
        { type: 'bot', text: 'Entiendo, es una decisión importante. ¿Hay algo específico que te gustaría aclarar? También puedo conectarte con uno de nuestros asesores si prefieres una llamada rápida.' },
        { type: 'user', text: 'Sí, prefiero hablar con alguien' },
        { type: 'bot', text: 'Perfecto, transfiero tu conversación a Carlos de nuestro equipo. Él te contactará en los próximos 5 minutos. 🤝' },
      ],
    },
  ];

  return (
    <section id="demo" className="py-24 relative bg-charcoal-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Mira cómo responde en <span className="text-accent text-glow-green">situaciones reales</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Responde con tu información y políticas. No inventa.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === index
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Chat window */}
          <div className="card-premium p-6 min-h-[400px]">
            <div className="space-y-4">
              {tabs[activeTab].messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary/20 text-foreground rounded-br-md'
                        : 'bg-accent/10 text-foreground border border-accent/20 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
