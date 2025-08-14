import { Button } from "@/components/ui/button";
import { Phone, Users, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";

const HeroSection = () => {
  const handleOrderNow = () => {
    window.open(
      "https://wa.me/919847334455?text=Hi%20I%20want%20to%20order%20medicines",
      "_blank"
    );
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Medicine delivery service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-700/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto text-left sm:text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4 leading-tight drop-shadow-2xl font-heading tracking-tighter">
            <span className="inline-block animate-slide-up" style={{animationDelay: '0.2s'}}>Your </span>
            <span className="inline-block text-secondary animate-slide-up font-extrabold hover:animate-pulse transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>Health</span>
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4 leading-tight drop-shadow-2xl font-heading tracking-tighter">
            <span className="inline-block animate-slide-up" style={{animationDelay: '0.6s'}}>Delivered </span>
            <span className="inline-block text-primary animate-slide-up font-extrabold hover:animate-pulse transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.8s'}}>Fast</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-3xl mb-6 md:mb-8 text-white/95 leading-relaxed animate-fade-in drop-shadow-lg font-semibold font-sans text-left" style={{animationDelay: '1.4s'}}>
            Your trusted healthcare partner delivering medicines quickly and safely to your doorstep.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 transform-gpu hover:rotate-x-3 hover:rotate-y-3 shadow-xl hover:shadow-3d animate-fade-in perspective-1000 hover:animate-popup" style={{animationDelay: '1.0s'}}>
              <Clock className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 text-primary-glow drop-shadow-lg" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 drop-shadow-sm text-center">24/7 Service</h3>
              <p className="text-base md:text-lg text-white/90 font-medium text-center">Round the clock availability</p>
            </div>

            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl animate-fade-in hover:animate-popup" style={{animationDelay: '1.2s'}}>
              <Users className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 text-primary-glow drop-shadow-lg" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 drop-shadow-sm text-center">1000+ Customers</h3>
              <p className="text-base md:text-lg text-white/90 font-medium text-center">Satisfied and happy customers</p>
            </div>

            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 transform-gpu hover:rotate-x-3 hover:rotate-y-3 sm:col-span-2 md:col-span-1 shadow-xl hover:shadow-3d animate-fade-in perspective-1000 hover:animate-popup" style={{animationDelay: '1.4s'}}>
              <MapPin className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 text-primary-glow drop-shadow-lg" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 drop-shadow-sm text-center">Kottakkal & Nearby</h3>
              <p className="text-base md:text-lg text-white/90 font-medium text-center">Complete area coverage</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4 mt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={handleOrderNow}
              className="text-lg md:text-xl px-10 md:px-16 py-5 md:py-7 w-full sm:w-auto min-w-[220px] hover:shadow-glow font-bold tracking-wide transform hover:scale-105 hover:rotate-y-3 transition-all duration-500 shadow-3d animate-scale-in perspective-1000 font-heading" style={{animationDelay: '1.6s'}}
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 mr-3 group-hover:animate-pulse" />
              Order Now
            </Button>

            <Button
              variant="heroSecondary"
              size="lg"
              onClick={scrollToHowItWorks}
              className="text-lg md:text-xl px-10 md:px-16 py-5 md:py-7 w-full sm:w-auto min-w-[220px] font-semibold tracking-wide transform hover:scale-105 hover:rotate-y-3 transition-all duration-500 shadow-3d animate-scale-in perspective-1000 font-heading" style={{animationDelay: '1.8s'}}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
