import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const handleCallNow = () => {
    window.open("tel:+919847334455", "_blank");
  };

  const handleEmailNow = () => {
    window.open("mailto:contact@jrxdelivery.com", "_blank");
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919847334455?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 animate-fade-in font-heading tracking-tight">
            Get In <span className="text-blue-600 relative inline-block hover:animate-pulse">Touch</span> With Us
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up font-sans">
            Have questions or need assistance? We're here to help you with all your medicine delivery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 transform-gpu hover:rotate-x-3 hover:rotate-y-3 shadow-xl hover:shadow-3d animate-fade-in perspective-1000 group cursor-pointer" 
                onClick={handleCallNow}
                style={{animationDelay: '0.1s'}}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-glow">
                    <Phone className="w-6 h-6 text-primary group-hover:text-primary-glow group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-heading tracking-tight group-hover:text-primary-glow transition-all duration-300">Call Us</h3>
                    <p className="text-muted-foreground font-sans">+91 98473 34455</p>
                    <p className="text-sm text-muted-foreground/70 mt-1 font-sans">Available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 transform-gpu hover:rotate-x-3 hover:rotate-y-3 shadow-xl hover:shadow-3d animate-fade-in perspective-1000 group cursor-pointer" 
                onClick={handleEmailNow}
                style={{animationDelay: '0.2s'}}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-glow">
                    <Mail className="w-6 h-6 text-primary group-hover:text-primary-glow group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-heading tracking-tight group-hover:text-primary-glow transition-all duration-300">Email Us</h3>
                    <p className="text-muted-foreground font-sans">contact@jrxdelivery.com</p>
                    <p className="text-sm text-muted-foreground/70 mt-1 font-sans">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 transform-gpu hover:rotate-x-3 hover:rotate-y-3 shadow-xl hover:shadow-3d animate-fade-in perspective-1000 group" 
                style={{animationDelay: '0.3s'}}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-glow">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-primary-glow group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-heading tracking-tight group-hover:text-primary-glow transition-all duration-300">Our Location</h3>
                    <p className="text-muted-foreground font-sans">Janatha Pharma, Kottakkal</p>
                    <p className="text-sm text-muted-foreground/70 mt-1 font-sans">Malappuram, Kerala</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 transform-gpu hover:rotate-x-3 hover:rotate-y-3 shadow-xl hover:shadow-3d animate-fade-in perspective-1000 group" 
                style={{animationDelay: '0.4s'}}>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-glow">
                    <Clock className="w-6 h-6 text-primary group-hover:text-primary-glow group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-heading tracking-tight group-hover:text-primary-glow transition-all duration-300">Working Hours</h3>
                    <p className="text-muted-foreground font-sans">24/7 Service</p>
                    <p className="text-sm text-muted-foreground/70 mt-1 font-sans">Always available for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form/CTA */}
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-500 shadow-xl hover:shadow-3d animate-fade-in perspective-1000 transform-gpu hover:rotate-x-1 hover:rotate-y-1" 
            style={{animationDelay: '0.5s'}}>
            <h3 className="text-xl md:text-2xl font-bold mb-4 font-heading tracking-tight">Ready to order medicines?</h3>
            <p className="text-muted-foreground mb-6 font-sans">Contact us through any of these convenient methods:</p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleWhatsApp}
                className="w-full py-6 text-lg font-heading tracking-tight shadow-xl hover:shadow-3d perspective-1000 transform hover:scale-105 hover:rotate-y-3 transition-all duration-300 group"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" /> WhatsApp Us
              </Button>
              
              <Button 
                onClick={handleCallNow}
                variant="outline" 
                className="w-full py-6 text-lg font-heading tracking-tight shadow-xl hover:shadow-3d perspective-1000 transform hover:scale-105 hover:rotate-y-3 transition-all duration-300 group"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" /> Call Us
              </Button>
              
              <Button 
                onClick={handleEmailNow}
                variant="secondary" 
                className="w-full py-6 text-lg font-heading tracking-tight shadow-xl hover:shadow-3d perspective-1000 transform hover:scale-105 hover:rotate-y-3 transition-all duration-300 group"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" /> Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;