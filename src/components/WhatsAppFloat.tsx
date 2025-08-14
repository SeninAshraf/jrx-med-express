import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919847334455?text=Hi%20I%20want%20to%20order%20medicines",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center justify-center group hover:scale-110 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
      aria-label="Order via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />

      {/* Enhanced pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" style={{animationDelay: '0.5s'}}></span>
    </button>
  );
};

export default WhatsAppFloat;
