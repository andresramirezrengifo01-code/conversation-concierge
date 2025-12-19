import { MessageCircle } from 'lucide-react';

const Channels = () => {
  const channels = [
    { name: 'WhatsApp', primary: true },
    { name: 'Instagram', primary: false },
    { name: 'Facebook', primary: false },
    { name: 'TikTok', primary: false },
  ];

  return (
    <section id="canales" className="py-24 relative bg-charcoal-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Tus conversaciones, en un solo <span className="text-accent text-glow-green">inbox</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            WhatsApp primero. También Instagram, Facebook y TikTok (según plan).
          </p>
        </div>

        <div className="flex flex-nowrap justify-center gap-4 max-w-4xl mx-auto overflow-x-auto">
          {channels.map((channel, index) => (
            <div
              key={index}
              className={`card-premium px-8 py-6 flex items-center gap-4 ${
                channel.primary ? 'border-accent/30 bg-accent/5' : ''
              }`}
            >
              <MessageCircle className={`w-8 h-8 ${channel.primary ? 'text-accent' : 'text-muted-foreground'}`} />
              <div>
                <p className={`font-semibold text-lg ${channel.primary ? 'text-accent' : ''}`}>
                  {channel.name}
                </p>
                {channel.primary && (
                  <span className="text-xs text-accent/70">Canal principal</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-muted-foreground text-sm">
          Canales disponibles según tu plan seleccionado
        </p>
      </div>
    </section>
  );
};

export default Channels;
