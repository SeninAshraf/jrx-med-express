import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-40 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 flex items-center justify-center group hover:scale-110 btn-professional ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </button>
  );
};

export default BackToTop;
