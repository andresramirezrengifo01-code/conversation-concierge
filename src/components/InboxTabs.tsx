import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const InboxTabs = () => {
  const [activeTab, setActiveTab] = useState('whatsapp');

  const channels = [
    { id: 'whatsapp', name: 'WhatsApp', color: 'bg-green-500' },
    { id: 'instagram', name: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { id: 'facebook', name: 'Facebook', color: 'bg-blue-500' },
    { id: 'tiktok', name: 'TikTok', color: 'bg-black' },
  ];

  const conversations = [
    { name: 'María G.', message: 'Hola, ¿tienen disponible el producto X?', time: 'Ahora', unread: true },
    { name: 'Carlos R.', message: 'Perfecto, voy a hacer el pago', time: '2 min', unread: true },
    { name: 'Ana P.', message: '¿Cuánto tarda el envío?', time: '5 min', unread: false },
    { name: 'Luis M.', message: 'Gracias por la información', time: '15 min', unread: false },
  ];

  return (
    <section id="canales" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Tus conversaciones en un solo <span className="text-accent text-glow-green">inbox</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            WhatsApp primero. También Instagram, Facebook y TikTok (según plan).
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-premium overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-border/30">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveTab(channel.id)}
                  className={`flex-1 py-4 px-4 text-sm font-medium transition-all relative ${
                    activeTab === channel.id
                      ? 'text-foreground bg-accent/5'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${channel.color}`} />
                    {channel.name}
                  </div>
                  {activeTab === channel.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
              ))}
            </div>

            {/* Inbox simulation */}
            <div className="p-4">
              <div className="space-y-2">
                {conversations.map((conv, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl flex items-center gap-4 transition-all cursor-pointer ${
                      conv.unread 
                        ? 'bg-accent/5 border border-accent/20' 
                        : 'bg-background/50 hover:bg-muted/20'
                    }`}
                  >
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${conv.unread ? 'text-foreground' : 'text-foreground/80'}`}>
                          {conv.name}
                        </span>
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                      </div>
                      <p className={`text-sm truncate ${conv.unread ? 'text-foreground/90' : 'text-muted-foreground'}`}>
                        {conv.message}
                      </p>
                    </div>
                    {conv.unread && (
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <div className="px-4 pb-4">
              <p className="text-center text-xs text-muted-foreground">
                Canales disponibles según tu plan. WhatsApp incluido en todos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InboxTabs;
