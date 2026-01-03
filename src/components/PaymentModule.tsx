import { Button } from '@/components/ui/button';
import { Check, Sparkles, Shield, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PaymentModule = () => {

  const setupFeatures = [
    'Activación completa de tu cuenta ConverxIA',
    'Configuración de tu Panel ConverxIA Launch (agente empático listo para operar)',
    'Flujo de Bienvenida',
    'Flujo de Onboarding',
    'Flujo de Información clave',
    'Flujo de Tomas de pedido',
    'Flujo de Preguntas frecuentes',
    'Flujo de Seguimiento y retomas',
    'Envío de links de pago (manuales)',
    'Pruebas internas antes de entregarte la cuenta',
  ];

  const allPlansInclude = [
    'Agente de IA Empática que atiende, vende y hace seguimiento',
    'Bandeja Unificada para gestionar todas las conversaciones',
    'CRM Integrado (contactos, historial, etiquetas, pipelines)',
    'Estadísticas de rendimiento y conversiones en tiempo real',
    'Campañas por Chat para envío masivo a contactos',
    'Herramientas avanzadas (flujos, GPT, automatizaciones)',
    'Acceso completo a ConverxIA Academy',
    'Notificaciones cuando tu equipo debe intervenir',
    'Administración de IA sin código y sin conocimientos técnicos, fácil y rápido',
  ];

  const plans = [
    {
      name: 'PRO',
      price: 47,
      tagline: 'Para empezar con IA sin enredos',
      features: [
        'Panel ConverxIA Launch – PRO',
        '1 canal activo',
        'Hasta 6 productos en agente',
        'Hasta 20,000 contactos',
        'Hasta 10 usuarios',
      ],
    },
    {
      name: 'PLUS',
      price: 97,
      tagline: 'Para escalar atención y ventas',
      popular: true,
      features: [
        'Todo lo de PRO, más:',
        'Panel ConverxIA Launch – PLUS',
        'Hasta 4 canales activos',
        'Hasta 15 productos en agente',
        'Contactos ilimitados',
        'Equipo ilimitado',
      ],
    },
    {
      name: 'MAX',
      price: 147,
      tagline: 'Para alto volumen o catálogo amplio',
      features: [
        'Todo lo de PLUS, más:',
        'Panel ConverxIA Launch – MAX',
        'Hasta 6 canales activos',
        'Hasta 30 productos en agente',
        'Contactos ilimitados',
        'Equipo ilimitado',
      ],
    },
  ];

  return (
    <section id="pago" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Main Title - Outside the card */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Activa tu cuenta</h2>
          <p className="text-lg text-muted-foreground">Dejamos tu cuenta lista para operar sin que hagas nada técnico</p>
        </div>

        {/* Trust badges */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-foreground/80">+2K negocios ya usan ConverxIA</span>
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-foreground/80">Activo en máximo 48h</span>
            </span>
          </div>
        </div>

        {/* STEP 1: Setup Inicial */}
        <div id="setup-activacion" className="max-w-4xl mx-auto mb-16">
          <div className="card-premium p-8 md:p-10 border-2 border-accent/40 bg-gradient-to-b from-accent/10 to-transparent relative overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
            
            <div className="relative">
              {/* Badge only */}
              <div className="flex flex-col items-center gap-3 mb-6">
                <span className="bg-accent text-accent-foreground text-sm font-bold px-5 py-2 rounded-full">
                  SETUP INICIAL DE ACTIVACIÓN
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="font-display text-5xl md:text-6xl font-bold text-accent text-glow-green">$97</span>
                  <span className="text-lg text-foreground/70">USD</span>
                </div>
                <p className="text-lg text-foreground/80">
                  Pago único · <span className="text-accent font-medium">Incluye el primer mes de uso</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                Nuestro equipo deja tu cuenta completamente lista para usar. Entras a ConverxIA y tu agente de IA ya está atendiendo y vendiendo, sin aprender tecnología ni configurar nada.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {setupFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link to="/post-compra" className="block max-w-md mx-auto">
                <Button variant="cta" size="xl" className="w-full gap-2 text-lg py-6">
                  <Sparkles className="w-5 h-5" />
                  Activar mi Agente IA
                </Button>
              </Link>

              {/* Trust */}
              <div className="flex items-center justify-center gap-6 mt-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  Pago seguro
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  Activo en 48h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Después del primer mes</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center">
              Selecciona tu plan
            </h3>
            <p className="text-center text-muted-foreground">
              Sin compromisos, el día 30 decides con qué plan continúas.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block card-premium overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border/30 hover:bg-transparent">
                  <TableHead className="w-1/3 py-6">
                    <div className="text-center">
                      <span className="font-display text-lg font-semibold text-foreground">PRO</span>
                      <div className="flex items-baseline justify-center gap-1 mt-1">
                        <span className="text-3xl font-bold text-foreground">$47</span>
                        <span className="text-muted-foreground">/mes</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Para empezar con IA sin enredos</p>
                    </div>
                  </TableHead>
                  <TableHead className="w-1/3 py-6 bg-accent/10 border-x border-accent/20">
                    <div className="text-center">
                      <div className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">
                        MÁS POPULAR
                      </div>
                      <div className="font-display text-lg font-semibold text-foreground">PLUS</div>
                      <div className="flex items-baseline justify-center gap-1 mt-1">
                        <span className="text-3xl font-bold text-accent">$97</span>
                        <span className="text-muted-foreground">/mes</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Para escalar atención y ventas</p>
                    </div>
                  </TableHead>
                  <TableHead className="w-1/3 py-6">
                    <div className="text-center">
                      <span className="font-display text-lg font-semibold text-foreground">MAX</span>
                      <div className="flex items-baseline justify-center gap-1 mt-1">
                        <span className="text-3xl font-bold text-foreground">$147</span>
                        <span className="text-muted-foreground">/mes</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Para alto volumen o catálogo amplio</p>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-border/30">
                  <TableCell className="text-center py-4">Panel ConverxIA Launch – PRO</TableCell>
                  <TableCell className="text-center py-4 bg-accent/5 border-x border-accent/10">Panel ConverxIA Launch – PLUS</TableCell>
                  <TableCell className="text-center py-4">Panel ConverxIA Launch – MAX</TableCell>
                </TableRow>
                <TableRow className="border-border/30">
                  <TableCell className="text-center py-4">1 canal activo</TableCell>
                  <TableCell className="text-center py-4 bg-accent/5 border-x border-accent/10">Hasta 4 canales activos</TableCell>
                  <TableCell className="text-center py-4">Hasta 6 canales activos</TableCell>
                </TableRow>
                <TableRow className="border-border/30">
                  <TableCell className="text-center py-4">Hasta 6 productos</TableCell>
                  <TableCell className="text-center py-4 bg-accent/5 border-x border-accent/10">Hasta 15 productos</TableCell>
                  <TableCell className="text-center py-4">Hasta 30 productos</TableCell>
                </TableRow>
                <TableRow className="border-border/30">
                  <TableCell className="text-center py-4">Hasta 20,000 contactos</TableCell>
                  <TableCell className="text-center py-4 bg-accent/5 border-x border-accent/10">Contactos ilimitados</TableCell>
                  <TableCell className="text-center py-4">Contactos ilimitados</TableCell>
                </TableRow>
                <TableRow className="border-border/30">
                  <TableCell className="text-center py-4">Hasta 10 usuarios</TableCell>
                  <TableCell className="text-center py-4 bg-accent/5 border-x border-accent/10">Equipo ilimitado</TableCell>
                  <TableCell className="text-center py-4">Equipo ilimitado</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-premium p-6 ${
                  plan.popular ? 'border-2 border-accent/40 bg-accent/5' : ''
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-3">
                    <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      MÁS POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <h4 className="font-display text-xl font-semibold mb-1">{plan.name}</h4>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-3xl font-bold ${plan.popular ? 'text-accent' : ''}`}>
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.tagline}</p>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* What All Plans Include - Now below plans */}
        <div className="max-w-4xl mx-auto mt-12 mb-10">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-center mb-6">
            Todos los planes incluyen:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allPlansInclude.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-card/30">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <span className="text-sm text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Single CTA Button */}
        <div className="max-w-md mx-auto">
          <Link to="/post-compra" className="block">
            <Button variant="cta" size="xl" className="w-full gap-2 text-lg py-6">
              <Sparkles className="w-5 h-5" />
              Activar mi Agente IA
            </Button>
          </Link>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Sin compromisos. El día 30 decides con qué plan continúas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentModule;
