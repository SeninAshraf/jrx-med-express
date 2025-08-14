import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Menon",
      location: "Kottakkal",
      text: "JRX Delivery has been a lifesaver for my family. Their prompt service and genuine medicines give us peace of mind.",
      rating: 5
    },
    {
      name: "Priya Nair",
      location: "Malappuram",
      text: "I've been using JRX for my monthly prescriptions. Their pharmacist support is excellent and delivery is always on time.",
      rating: 5
    },
    {
      name: "Abdul Hameed",
      location: "Tirur",
      text: "Very reliable service. The medicines are properly packed and the delivery person is always courteous and professional.",
      rating: 4
    },
    {
      name: "Lakshmi Krishnan",
      location: "Valanchery",
      text: "As a senior citizen, I appreciate their doorstep delivery. They even help explain the medication schedule when needed.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 animate-fade-in font-heading tracking-tight">
            What Our <span className="text-blue-900 relative inline-block hover:animate-pulse">Customers</span> Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up font-sans">
            Don't just take our word for it - hear from our satisfied customers across Kottakkal and nearby areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 text-left hover:shadow-3d transition-all duration-300 hover:-translate-y-2 hover:scale-105 transform-gpu hover:rotate-x-3 hover:rotate-y-3 bg-gradient-card border-medical-light/50 animate-scale-in group cursor-pointer perspective-1000`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rating Stars */}
              <div className="flex mb-4 group-hover:scale-110 transition-transform duration-300">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} group-hover:animate-pulse`}
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-base text-foreground mb-4 font-sans leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="mt-auto">
                <h4 className="text-lg font-semibold text-foreground font-heading tracking-tight group-hover:text-primary-glow transition-all duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;