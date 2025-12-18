const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">C</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl text-foreground">
                conver<span className="text-accent">x</span>IA
              </span>
              <p className="text-muted-foreground text-xs">
                Convierte conversaciones en ventas
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <a
              href="mailto:hola@converxia.com"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              hola@converxia.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ConverxIA. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Términos y condiciones
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de privacidad
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground/60 text-center">
          Este sitio no forma parte del sitio web de Facebook ni de Facebook Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
