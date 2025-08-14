import { Card } from "@/components/ui/card";
import { Truck, Shield, DollarSign, Stethoscope } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Medicines delivered quickly to your doorstep with real-time tracking."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Pharmacies",
      description: "Safe & authentic medicines only from certified and trusted pharmacies."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable",
      description: "Competitive pricing with transparent costs and no hidden charges."
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Pharmacist Support",
      description: "Free guidance and consultation from certified pharmacists."
    }
  ];

  return (
    <section id="features" className="py-12 md:py-20 bg-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 animate-fade-in font-heading tracking-tight">
            Why Choose <span className="text-blue-900 relative inline-block hover:animate-pulse">JRX</span> <span className="text-teal-400 relative inline-block hover:animate-pulse">Delivery</span>?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up font-sans">
            We provide reliable healthcare services with a commitment to quality, safety, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-4 md:p-6 text-center hover:shadow-3d transition-all duration-300 hover:-translate-y-2 hover:scale-105 transform-gpu hover:rotate-x-3 hover:rotate-y-3 bg-gradient-card border-medical-light/50 animate-scale-in group cursor-pointer perspective-1000 hover:animate-popup`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-full mb-3 md:mb-4 text-primary-foreground group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3 font-heading tracking-tight group-hover:text-primary-glow transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;