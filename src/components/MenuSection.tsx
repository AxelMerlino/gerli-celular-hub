import { motion } from "framer-motion";
import fugazzetaImg from "@/assets/fugazzeta.jpg";
import muzzarellaImg from "@/assets/muzzarella.jpg";
import especialImg from "@/assets/especial.jpg";

const pizzas = [
  {
    name: "Muzzarella",
    description: "Salsa de tomate, muzzarella de primera y orégano. El clásico de siempre.",
    image: muzzarellaImg,
    tag: "Clásica",
  },
  {
    name: "Fugazzeta",
    description: "Cebolla caramelizada, abundante queso fundido. La reina de la pizzería argentina.",
    image: fugazzetaImg,
    tag: "⭐ Favorita",
  },
  {
    name: "Especial de la Casa",
    description: "Combinación de ingredientes frescos del día. Preguntá por la pizza del momento.",
    image: especialImg,
    tag: "Del día",
  },
];

const extras = [
  "Empanadas",
  "Fainá",
  "Bebidas",
  "Postres caseros",
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestras Pizzas</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            El Menú
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Masa artesanal, ingredientes frescos y porciones con identidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pizzas.map((pizza, i) => (
            <motion.div
              key={pizza.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {pizza.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-card-foreground mb-2">{pizza.name}</h3>
                <p className="text-muted-foreground text-sm">{pizza.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">También tenemos:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {extras.map((item) => (
              <span
                key={item}
                className="text-sm bg-card text-card-foreground px-4 py-2 rounded-full shadow-card border border-border"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-xs mt-6">
            Consultá precios y promos del día por WhatsApp o Instagram
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
