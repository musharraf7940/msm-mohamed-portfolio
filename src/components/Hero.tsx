import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--hero-accent)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--hero-accent)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-hero-accent opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-glow opacity-5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-hero-text">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-hero-accent rounded-full animate-pulse" />
              <span className="text-hero-accent font-medium">Available for work</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">MUSHARRAF</span>
              <span className="block text-hero-accent">MOHAMED</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-2">
              Aspiring Software Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Passionate about building modern, responsive web applications. 
              Currently pursuing Computer Science and Software Engineering at SLIIT City University.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-hero-accent hover:bg-primary-glow text-hero-bg font-semibold px-8"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-hero-bg px-8"
              >
                Contact Me
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-hero-accent">4+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-hero-accent">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-hero-accent">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30" />
                  <img
                    src={heroPortrait}
                    alt="Musharraf Mohamed"
                    className="relative w-full h-auto rounded-2xl shadow-elegant"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -left-4 bg-card rounded-lg p-4 shadow-card animate-bounce">
              <div className="text-sm font-semibold text-foreground">Problem Solver</div>
              <div className="text-xs text-muted-foreground">Analytical Mindset</div>
            </div>
            
            <div className="absolute bottom-10 -right-4 bg-card rounded-lg p-4 shadow-card animate-bounce" style={{ animationDelay: '1s' }}>
              <div className="text-sm font-semibold text-foreground">Quick Learner</div>
              <div className="text-xs text-muted-foreground">Adaptable & Growth-Oriented</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;