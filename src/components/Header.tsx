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

    window.addEventListener("scroll", handleScroll);
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
      "https://wa.me/917034567890?text=Hi%20I%20want%20to%20order%20medicines",
      "_blank"
    );
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src={jrxLogoUrl}
                alt="JRX Delivery - Janatha Pharma"
                className="h-10 w-auto md:h-12 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <Button variant="medical" size="sm" onClick={handleOrderNow}>
                Order Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header with Burger Menu */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-md shadow-soft"
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
                className="h-8 w-auto"
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
                    className="w-full py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
