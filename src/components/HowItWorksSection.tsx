import { Card } from "@/components/ui/card";
import { MessageCircle, FileCheck, Package, Truck } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Place Your Order",
      description: "Click WhatsApp button or call us to place your medicine order easily.",
      stepNumber: "1"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Verification",
      description: "Our pharmacy team checks your prescription for authenticity and safety.",
      stepNumber: "2"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Dispatch",
      description: "Medicines are carefully packed and sent via our trusted courier network.",
      stepNumber: "3"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Delivery",
      description: "Receive your medicines safely at your doorstep with real-time tracking.",
      stepNumber: "4"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 animate-fade-in">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Simple, secure, and fast - our streamlined process ensures you get your medicines quickly and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card 
                className={`p-4 md:p-6 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-gradient-card border-medical-light/50 animate-scale-in group cursor-pointer`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm md:text-base group-hover:shadow-glow transition-all duration-300">
                    {step.stepNumber}
                  </div>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-medical-light rounded-full mb-3 md:mb-4 text-primary mt-3 md:mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>

              {/* Connector Line (hidden on mobile, shown on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-primary opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;