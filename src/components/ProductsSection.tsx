import { motion } from "framer-motion";
import { Smartphone, Headphones, Wrench } from "lucide-react";
import phonesImg from "@/assets/phones.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import repairImg from "@/assets/repair.jpg";

const categories = [
  {
    icon: Smartphone,
    title: "Celulares",
    description: "Samsung, iPhone, Motorola, Xiaomi. Nuevos y usados con garantía.",
    image: phonesImg,
    items: ["Samsung Galaxy", "iPhone", "Motorola", "Xiaomi", "Equipos usados"],
  },
  {
    icon: Headphones,
    title: "Accesorios",
    description: "Fundas, cargadores, auriculares, vidrios templados y más.",
    image: accessoriesImg,
    items: ["Fundas y protectores", "Cargadores", "Auriculares", "Cables", "Vidrios templados"],
  },
  {
    icon: Wrench,
    title: "Repuestos",
    description: "Pantallas, baterías y componentes para todas las marcas.",
    image: repairImg,
    items: ["Pantallas", "Baterías", "Conectores", "Botones", "Componentes"],
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Catálogo</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Nuestros Productos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Todo lo que necesitás para tu celular en un solo lugar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-card-foreground">{cat.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
