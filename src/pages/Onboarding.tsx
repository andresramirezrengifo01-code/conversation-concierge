import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, Check, MessageCircle, Building2, Package, FileText, Palette } from 'lucide-react';
import { useFunnel } from '@/contexts/FunnelContext';
import group from '@/assets/group.svg';

const WHATSAPP_SUPPORT_URL = '{{WHATSAPP_SUPPORT_URL}}';

const Onboarding = () => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData, setOnboardingComplete } = useFunnel();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, title: 'Datos del negocio', icon: Building2 },
    { number: 2, title: 'Productos', icon: Package },
    { number: 3, title: 'Políticas', icon: FileText },
    { number: 4, title: 'Tono de marca', icon: Palette },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit onboarding
      setOnboardingComplete(true);
      navigate('/gracias');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateField = (field: string, value: any) => {
    setOnboardingData({ ...onboardingData, [field]: value });
  };

  const updateProduct = (index: number, field: string, value: string) => {
    const newProducts = [...onboardingData.products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setOnboardingData({ ...onboardingData, products: newProducts });
  };

  const updatePolicy = (field: string, value: string) => {
    setOnboardingData({
      ...onboardingData,
      policies: { ...onboardingData.policies, [field]: value },
    });
  };

  const updateTone = (field: string, value: any) => {
    setOnboardingData({
      ...onboardingData,
      tone: { ...onboardingData.tone, [field]: value },
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6 border-b border-border/30">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="inline-block">
            <img src={group} alt="ConverxIA" className="h-10" />
          </Link>
          <a
            href={WHATSAPP_SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            ¿Necesitas ayuda?
          </a>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Configura tu <span className="text-accent text-glow-green">Agente IA</span>
            </h1>
            <p className="text-muted-foreground">
              Solo tomará 10 minutos. Esta información nos ayuda a personalizar tu agente.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentStep === step.number
                      ? 'bg-accent text-accent-foreground'
                      : currentStep > step.number
                      ? 'bg-accent/20 text-accent'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 h-1 mx-1 rounded-full ${
                      currentStep > step.number ? 'bg-accent' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Title */}
          <div className="text-center mb-6">
            <span className="text-accent text-sm font-medium">Paso {currentStep} de 4</span>
            <h2 className="font-display text-xl font-semibold mt-1">
              {steps[currentStep - 1].title}
            </h2>
          </div>

          {/* Form Content */}
          <div className="card-premium p-6 md:p-8">
            {/* Step 1: Business Data */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="businessName">Nombre del negocio *</Label>
                  <Input
                    id="businessName"
                    value={onboardingData.businessName}
                    onChange={(e) => updateField('businessName', e.target.value)}
                    placeholder="Ej: Mi Tienda Online"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="country">País *</Label>
                  <Input
                    id="country"
                    value={onboardingData.country}
                    onChange={(e) => updateField('country', e.target.value)}
                    placeholder="Ej: México"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Rubro o industria *</Label>
                  <Input
                    id="industry"
                    value={onboardingData.industry}
                    onChange={(e) => updateField('industry', e.target.value)}
                    placeholder="Ej: Moda, Tecnología, Servicios..."
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="website">Web o Instagram</Label>
                  <Input
                    id="website"
                    value={onboardingData.website}
                    onChange={(e) => updateField('website', e.target.value)}
                    placeholder="Ej: www.mitienda.com o @mitienda"
                    className="mt-2"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Products */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <p className="text-muted-foreground text-sm">
                  Agrega al menos 3 productos o servicios principales. Esto ayuda al agente a recomendar correctamente.
                </p>
                {onboardingData.products.map((product, index) => (
                  <div key={index} className="p-4 bg-background/50 rounded-xl border border-border/30">
                    <h3 className="font-medium mb-4">Producto {index + 1}</h3>
                    <div className="grid gap-4">
                      <div>
                        <Label>Nombre *</Label>
                        <Input
                          value={product.name}
                          onChange={(e) => updateProduct(index, 'name', e.target.value)}
                          placeholder="Nombre del producto"
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Precio *</Label>
                          <Input
                            value={product.price}
                            onChange={(e) => updateProduct(index, 'price', e.target.value)}
                            placeholder="$0.00"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Link (opcional)</Label>
                          <Input
                            value={product.link}
                            onChange={(e) => updateProduct(index, 'link', e.target.value)}
                            placeholder="URL del producto"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Preguntas frecuentes sobre este producto</Label>
                        <Textarea
                          value={product.faqs}
                          onChange={(e) => updateProduct(index, 'faqs', e.target.value)}
                          placeholder="¿Cuánto tarda el envío? ¿Tiene garantía? etc."
                          className="mt-1"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={() =>
                    setOnboardingData({
                      ...onboardingData,
                      products: [...onboardingData.products, { name: '', price: '', link: '', faqs: '' }],
                    })
                  }
                  className="w-full"
                >
                  + Agregar otro producto
                </Button>
              </div>
            )}

            {/* Step 3: Policies */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <p className="text-muted-foreground text-sm">
                  Esta información permite al agente responder preguntas sobre tu operación.
                </p>
                <div>
                  <Label htmlFor="hours">Horarios de atención *</Label>
                  <Textarea
                    id="hours"
                    value={onboardingData.policies.hours}
                    onChange={(e) => updatePolicy('hours', e.target.value)}
                    placeholder="Ej: Lunes a Viernes 9am-6pm, Sábados 10am-2pm"
                    className="mt-2"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="shipping">Política de envíos *</Label>
                  <Textarea
                    id="shipping"
                    value={onboardingData.policies.shipping}
                    onChange={(e) => updatePolicy('shipping', e.target.value)}
                    placeholder="Ej: Envío gratis en pedidos mayores a $500. Tiempo de entrega 3-5 días."
                    className="mt-2"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="returns">Política de devoluciones</Label>
                  <Textarea
                    id="returns"
                    value={onboardingData.policies.returns}
                    onChange={(e) => updatePolicy('returns', e.target.value)}
                    placeholder="Ej: 30 días para cambios o devoluciones. El producto debe estar sin uso."
                    className="mt-2"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="payments">Métodos de pago aceptados *</Label>
                  <Textarea
                    id="payments"
                    value={onboardingData.policies.payments}
                    onChange={(e) => updatePolicy('payments', e.target.value)}
                    placeholder="Ej: Tarjeta, transferencia, efectivo en tienda, MercadoPago"
                    className="mt-2"
                    rows={2}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Brand Tone */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <p className="text-muted-foreground text-sm">
                  Define cómo debe comunicarse tu agente IA con los clientes.
                </p>
                <div>
                  <Label className="mb-3 block">Estilo de comunicación *</Label>
                  <RadioGroup
                    value={onboardingData.tone.style}
                    onValueChange={(value) => updateTone('style', value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border border-border/30">
                      <RadioGroupItem value="formal" id="formal" />
                      <Label htmlFor="formal" className="flex-1 cursor-pointer">
                        <span className="font-medium">Formal / Profesional</span>
                        <p className="text-sm text-muted-foreground">
                          Trato de usted, lenguaje corporativo
                        </p>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border border-border/30">
                      <RadioGroupItem value="friendly" id="friendly" />
                      <Label htmlFor="friendly" className="flex-1 cursor-pointer">
                        <span className="font-medium">Cercano / Amigable</span>
                        <p className="text-sm text-muted-foreground">
                          Trato de tú, tono casual y cálido
                        </p>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border border-border/30">
                  <Checkbox
                    id="emojis"
                    checked={onboardingData.tone.useEmojis}
                    onCheckedChange={(checked) => updateTone('useEmojis', checked)}
                  />
                  <Label htmlFor="emojis" className="flex-1 cursor-pointer">
                    <span className="font-medium">Usar emojis en las respuestas</span>
                    <p className="text-sm text-muted-foreground">
                      El agente incluirá emojis ocasionales para un tono más amigable
                    </p>
                  </Label>
                </div>
                <div>
                  <Label htmlFor="forbidden">Palabras o frases prohibidas (opcional)</Label>
                  <Textarea
                    id="forbidden"
                    value={onboardingData.tone.forbiddenWords}
                    onChange={(e) => updateTone('forbiddenWords', e.target.value)}
                    placeholder="Ej: competencia, barato, descuento..."
                    className="mt-2"
                    rows={2}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Palabras que el agente nunca debe mencionar
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </Button>
            <Button variant="cta" onClick={handleNext} className="gap-2">
              {currentStep === 4 ? 'Enviar onboarding' : 'Siguiente'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Support link */}
          <div className="text-center mt-8">
            <a
              href={WHATSAPP_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              ¿Tienes dudas? Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;
