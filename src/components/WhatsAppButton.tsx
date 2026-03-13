import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491100000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-elevated hover:scale-110 transition-transform animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-secondary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
