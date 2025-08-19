import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with animation */}
          <h1 className="text-white mb-6 animate-fade-in-up">
            <span className="block">천호영</span>
            <span className="block text-primary">Backend Developer</span>
          </h1>
          
          
          {/* Red accent divider */}
          <div className="section-divider mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}></div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button 
              variant="outline" 
              className="btn-outline-red"
              onClick={scrollToAbout}
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;