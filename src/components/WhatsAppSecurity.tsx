import { Shield, Check } from 'lucide-react';

const WhatsAppSecurity = () => {
  const points = [
    'Conexión profesional con WhatsApp Business API (WABA)',
    'Cumplimiento de buenas prácticas de Meta',
    'Sin riesgo de bloqueo por uso no autorizado',
    'Tú controlas límites y volumen',
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12 border-accent/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  Automatiza sin poner tu WhatsApp en <span className="text-accent">riesgo</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Conexión profesional con WhatsApp Business API (WABA) y buenas prácticas.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {points.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-secondary/30 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Sobre costos de WhatsApp:</strong> WhatsApp cobra por conversaciones de 24h (varía según país/volumen). 
                    <span className="text-accent"> ConverxIA no cobra comisión/markup</span> por esas conversaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSecurity;
