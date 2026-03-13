import { motion } from "framer-motion";
import { Wrench, Clock, Shield, Truck } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Reparación de Pantallas",
    description: "Cambio de pantalla para todas las marcas. Servicio rápido con repuestos de calidad.",
  },
  {
    icon: Clock,
    title: "Reparaciones Express",
    description: "Diagnóstico y reparación en el día. Cambio de baterías, conectores y más.",
  },
  {
    icon: Shield,
    title: "Garantía en Reparaciones",
    description: "Todos nuestros trabajos tienen garantía. Tu tranquilidad es nuestra prioridad.",
  },
  {
    icon: Truck,
    title: "Punto de Entrega",
    description: "Recibí tus compras online en nuestro local. Retiro cómodo y seguro en Gerli.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Servicios</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Servicio Técnico Profesional
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Reparamos tu celular con la mejor calidad y rapidez
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all group text-center"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svc.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-card-foreground mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground">{svc.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Rating highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 gradient-hero rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="text-5xl font-display font-bold text-primary-foreground mb-2">8.2/10</div>
          <p className="text-primary-foreground/80 text-lg">Calificación promedio de nuestros clientes</p>
          <p className="text-primary-foreground/60 text-sm mt-2">100% recomendado en Facebook</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
