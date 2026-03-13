import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Martín L.",
    rating: 5,
    text: "Excelente atención. Me arreglaron la pantalla del Samsung en el día. Muy recomendable.",
    source: "Facebook",
  },
  {
    name: "Carolina S.",
    rating: 5,
    text: "Compré un iPhone usado y anda perfecto. Buenos precios y el local es muy prolijo.",
    source: "Google",
  },
  {
    name: "Diego R.",
    rating: 4,
    text: "Gran variedad de accesorios y fundas. Los cargadores son de buena calidad. Vuelvo siempre.",
    source: "Facebook",
  },
  {
    name: "Lucía M.",
    rating: 5,
    text: "Uso el local como punto de entrega para mis compras online. Súper cómodo y confiable.",
    source: "Google",
  },
];

const ReviewsSection = () => {
  return (
    <section id="opiniones" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Opiniones</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card relative"
            >
              <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-card-foreground mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-sm text-card-foreground">{review.name}</span>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{review.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
