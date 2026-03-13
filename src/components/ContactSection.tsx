import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Visitanos o Escribinos
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Direcciones</h3>
                  <p className="text-sm text-muted-foreground">Brasil 35, B1869 Gerli</p>
                  <p className="text-sm text-muted-foreground">Cnel. M. P. Lacarra 1558, Gerli</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Horarios</h3>
                  <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 - 19:00</p>
                  <p className="text-sm text-muted-foreground">Sábados: 9:00 - 14:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Teléfono</h3>
                  <p className="text-sm text-muted-foreground">011 XXXX-XXXX</p>
                  <a href="https://wa.me/5491100000000" className="text-sm text-primary hover:underline">
                    WhatsApp directo →
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/MundoCelularAvellaneda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/mundocelular15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                title="Ubicación El Mundo del Celular"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5!2d-58.37!3d-34.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQwJzQ4LjAiUyA1OMKwMjInMTIuMCJX!5e0!3m2!1ses!2sar!4v1000000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card space-y-5">
              <h3 className="font-display font-bold text-xl text-card-foreground mb-2">Envianos tu consulta</h3>
              <div>
                <label className="text-sm font-medium text-card-foreground block mb-1.5">Nombre</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground block mb-1.5">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="11 XXXX-XXXX"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground block mb-1.5">Mensaje</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-hero text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {sent ? "¡Enviado!" : "Enviar Consulta"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
