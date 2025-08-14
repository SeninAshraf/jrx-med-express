import { Button } from "@/components/ui/button";
import { MapPin, Mail, Instagram, Phone } from "lucide-react";

const Footer = () => {
  const handleOrderNow = () => {
    window.open(
      "https://wa.me/919847334455?text=Hi%20I%20want%20to%20order%20medicines",
      "_blank"
    );
  };

  const openGoogleMaps = () => {
    window.open(
      "https://maps.app.goo.gl/J4KLV7k1zpafJTo38",
      "_blank"
    );
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/jrxdelivery/?hl=en", "_blank");
  };

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      {/* Call to Action Section */}
      <div className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Medicines? Order Now!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fast, reliable, and safe medicine delivery service in Kottakkal and nearby areas.
          </p>
          <Button
            variant="heroSecondary"
            size="lg"
            onClick={handleOrderNow}
            className="text-lg px-8 py-4"
          >
            Order via WhatsApp
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F47b38bbf4f44465297797acbe32aace0%2F9e8620f395cb4f449e054b1195524f15?format=webp&width=800"
                  alt="JRX Delivery Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">JRX Delivery</h3>
                  <p className="text-sm text-secondary-foreground/80">Janatha Pharma</p>
                </div>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Your trusted healthcare partner delivering medicines quickly and safely 
                to your doorstep in Kottakkal and nearby areas.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Visit Our Store</h4>
              <div className="space-y-4">
                <button
                  onClick={openGoogleMaps}
                  className="group w-full"
                >
                  <div className="bg-primary/10 rounded-xl p-4 border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-6 h-6 mt-1 text-primary group-hover:text-primary-glow transition-colors" />
                      <div className="text-left">
                        <h5 className="font-semibold text-secondary-foreground mb-1">Janatha Pharma</h5>
                        <p className="text-sm text-secondary-foreground/80">
                          Soopibazar, Kottakkal,<br />
                          Kerala 676503, India
                        </p>
                        <span className="text-xs text-primary font-medium mt-2 inline-block">📍 View on Google Maps</span>
                      </div>
                    </div>
                  </div>
                </button>

                <a
                  href="mailto:inventixx3@gmail.com"
                  className="flex items-center space-x-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors group p-3 rounded-lg hover:bg-primary/5"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-glow" />
                  <span>inventixx3@gmail.com</span>
                </a>

                <a
                  href="tel:+919847334455"
                  className="flex items-center space-x-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors group p-3 rounded-lg hover:bg-primary/5"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-glow" />
                  <span>+91 98473 34455</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <button
                onClick={openInstagram}
                className="flex items-center space-x-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-glow" />
                <span>@jrxdelivery</span>
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-secondary-foreground/60">
              © {new Date().getFullYear()} JRX Delivery - Janatha Pharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
