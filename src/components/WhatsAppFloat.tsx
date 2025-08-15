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
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-700 flex items-center justify-center group hover:scale-110 btn-professional ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
      aria-label="Order via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10" />

      {/* Enhanced pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" style={{animationDelay: '0.5s'}}></span>

      {/* Hover tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Order via WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </button>
  );
};

export default WhatsAppFloat;
