import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-background">El Mundo del Celular</span>
          </div>

          <p className="text-background/50 text-sm text-center">
            © {new Date().getFullYear()} El Mundo del Celular — Gerli, Avellaneda. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <a href="#inicio" className="text-sm text-background/50 hover:text-background transition-colors">Inicio</a>
            <a href="#productos" className="text-sm text-background/50 hover:text-background transition-colors">Productos</a>
            <a href="#contacto" className="text-sm text-background/50 hover:text-background transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
