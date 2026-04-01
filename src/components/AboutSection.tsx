import { motion } from "framer-motion";
import { Flame, Heart, MapPin } from "lucide-react";
import interiorImg from "@/assets/pizzeria-interior.jpg";

const values = [
  {
    icon: Flame,
    title: "Masa Artesanal",
    description: "Preparada con tiempo y dedicación para lograr el punto perfecto.",
  },
  {
    icon: Heart,
    title: "Ingredientes Frescos",
    description: "Seleccionamos cada ingrediente para que notes la diferencia.",
  },
  {
    icon: MapPin,
    title: "De Barrio",
    description: "Somos parte de Gerli. Hacemos pizza con identidad local.",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={interiorImg}
                alt="Interior de La Aceituna Negra"
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
              Pizza con carácter de barrio
            </h2>
            <p className="text-muted-foreground mb-8">
              En La Aceituna Negra creemos que una buena pizza se hace con buenos ingredientes, masa de calidad y mucho amor. Desde Gerli, Avellaneda, llevamos sabor a cada mesa y a cada delivery.
            </p>

            <div className="space-y-6">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg gradient-warm flex items-center justify-center shrink-0">
                    <val.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{val.title}</h3>
                    <p className="text-muted-foreground text-sm">{val.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
