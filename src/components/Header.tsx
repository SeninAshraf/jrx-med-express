import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Heart, Users, Phone } from "lucide-react";
const jrxLogoUrl = "https://cdn.builder.io/api/v1/image/assets%2F47b38bbf4f44465297797acbe32aace0%2F9e8620f395cb4f449e054b1195524f15?format=webp&width=800";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleOrderNow = () => {
    window.open(
      "https://wa.me/919847334455?text=Hi%20I%20want%20to%20order%20medicines",
      "_blank"
    );
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-100/50"
            : "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src={jrxLogoUrl}
                alt="JRX Delivery - Janatha Pharma"
                className="h-12 w-auto md:h-14 scale-x-150 hover:scale-x-160 transition-all duration-500"
              />
            </div>

            {/* Center Navigation */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <nav className="flex items-center">
                <div className="flex items-center bg-gradient-to-r from-medical/20 to-medical-dark/20 backdrop-blur-md rounded-full p-1 border border-medical-light/30 shadow-soft">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="relative px-6 py-3 rounded-full text-foreground font-semibold transition-all duration-500 ease-out hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary/80  hover:scale-105 active:scale-95 group"
                  >
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="relative px-6 py-3 rounded-full text-foreground font-semibold transition-all duration-500 ease-out hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary/80  hover:scale-105 active:scale-95 group"
                  >
                    <span className="relative z-10">Services</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="relative px-6 py-3 rounded-full text-foreground font-semibold transition-all duration-500 ease-out hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary/80  hover:scale-105 active:scale-95 group"
                  >
                    <span className="relative z-10">How It Works</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="relative px-6 py-3 rounded-full text-foreground font-semibold transition-all duration-500 ease-out hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary/80  hover:scale-105 active:scale-95 group"
                  >
                    <span className="relative z-10">Contact</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </nav>
            </div>

            {/* Right Side - Order Now Button */}
            <div className="flex items-center">
              <Button
                variant="medical"
                size="sm"
                onClick={handleOrderNow}
                className="px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-500 bg-gradient-to-r from-medical to-medical-dark hover:from-medical-dark hover:to-medical border-2 border-medical-light/30 hover:border-medical-light/60"
              >
                <Phone className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header with Burger Menu */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-gray-100/30"
            : "bg-background/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={jrxLogoUrl}
                alt="JRX Delivery - Janatha Pharma"
                className="h-12 w-auto"
              />
            </div>

            {/* Burger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out top-3 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            }`}
          >
            <nav className="pt-6 pb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 space-y-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="flex items-center w-full p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Home className="w-5 h-5 mr-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Home
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("features")}
                  className="flex items-center w-full p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Heart className="w-5 h-5 mr-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Services
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="flex items-center w-full p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Users className="w-5 h-5 mr-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    How It Works
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center w-full p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 mr-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Contact
                  </span>
                </button>

                <div className="pt-4 border-t border-white/20">
                  <Button
                    variant="medical"
                    onClick={handleOrderNow}
                    className="w-full py-4 text-base font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Order Now
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
