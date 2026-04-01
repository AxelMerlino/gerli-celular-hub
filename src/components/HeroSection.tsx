import { motion } from "framer-motion";
import { MapPin, MessageCircle, Clock } from "lucide-react";
import heroImg from "@/assets/hero-pizza.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Pizza artesanal de La Aceituna Negra" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="absolute inset-0 gradient-hero opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-secondary/20 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-6 border border-secondary/30">
              🍕 Pizzería Artesanal en Gerli
            </span>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Masa madre, ingredientes{" "}
              <span className="text-secondary">de verdad</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg font-body">
              Fugazzeta, muzzarella y pizzas especiales con porciones generosas e identidad de barrio. Vení a probar o pedí por WhatsApp.
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
              className="inline-flex items-center gap-2 gradient-warm text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-elevated"
            >
              <MessageCircle className="w-5 h-5" />
              Pedí por WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground font-semibold px-7 py-3.5 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
            >
              Ver el Menú
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
              Gerli, Avellaneda
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              Noches y fines de semana
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
