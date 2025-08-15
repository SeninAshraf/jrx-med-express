import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Header />

      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="relative">
          <HeroSection />
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-20">
          <FeaturesSection />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="relative py-20 bg-gradient-to-r from-medical-light/10 to-background">
          <HowItWorksSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-20">
          <TestimonialsSection />
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="relative">
        <Footer />
      </footer>

      {/* Floating Elements */}
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default Index;
