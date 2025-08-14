import { Button } from "@/components/ui/button";
import { Phone, Users, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";

const HeroSection = () => {
  const handleOrderNow = () => {
    window.open(
      "https://wa.me/917034567890?text=Hi%20I%20want%20to%20order%20medicines",
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
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Medicine delivery service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 via-blue-700/90 to-blue-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in drop-shadow-lg">
            <span className="block md:inline">Fast, Reliable &</span>
            <span className="block md:inline"> Safe Medicine Delivery</span>
            <span className="block">at Your Doorstep</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 text-white/95 leading-relaxed animate-fade-in drop-shadow-md font-medium px-4">
            Your trusted healthcare partner – delivering medicines quickly and safely to your doorstep.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <Clock className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-primary-glow drop-shadow-md" />
              <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 drop-shadow-sm">24/7 Service</h3>
              <p className="text-sm md:text-base text-white/90 font-medium">Round the clock availability</p>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <Users className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-primary-glow drop-shadow-md" />
              <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 drop-shadow-sm">1000+ Customers</h3>
              <p className="text-sm md:text-base text-white/90 font-medium">Satisfied and happy customers</p>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 sm:col-span-2 md:col-span-1 shadow-lg hover:shadow-xl">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-primary-glow drop-shadow-md" />
              <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 drop-shadow-sm">Kottakkal & Nearby</h3>
              <p className="text-sm md:text-base text-white/90 font-medium">Complete area coverage</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4 mt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={handleOrderNow}
              className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto min-w-[200px] hover:shadow-glow font-bold tracking-wide transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 mr-3" />
              Order Now
            </Button>

            <Button
              variant="heroSecondary"
              size="lg"
              onClick={scrollToHowItWorks}
              className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto min-w-[200px] font-semibold tracking-wide transform hover:scale-105 transition-all duration-300 shadow-lg"
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
