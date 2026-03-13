import { motion } from "framer-motion";
import { MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-shop.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="El Mundo del Celular - Tienda en Gerli" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="absolute inset-0 gradient-hero opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-secondary/20 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-6 border border-secondary/30">
              📍 Gerli, Avellaneda
            </span>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Tu tienda de celulares de{" "}
              <span className="text-secondary">confianza</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg font-body">
              Venta de celulares nuevos y usados, accesorios, reparaciones técnicas y punto de entrega para compras online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-hero text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-elevated"
            >
              <MessageCircle className="w-5 h-5" />
              Escribinos por WhatsApp
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground font-semibold px-7 py-3.5 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
            >
              Ver Productos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-6 text-primary-foreground/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              Brasil 35, Gerli
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              Lacarra 1558, Gerli
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              100% recomendado
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
