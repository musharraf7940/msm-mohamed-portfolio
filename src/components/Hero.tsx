import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["DEVELOPER", "PROBLEM SOLVER", "QUICK LEARNER", "TEAM PLAYER"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-hero-accent/30 rounded-full"
      initial={{ 
        x: Math.random() * window.innerWidth, 
        y: Math.random() * window.innerHeight,
        opacity: 0
      }}
      animate={{ 
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: [0, 1, 0]
      }}
      transition={{ 
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--hero-accent)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--hero-accent)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-hero-accent opacity-5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-primary-glow opacity-5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            className="text-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="w-2 h-2 bg-hero-accent rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-hero-accent font-medium">Available for work</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="block">MUSHARRAF</span>
              <span className="block text-hero-accent">MOHAMED</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-xl lg:text-2xl text-muted-foreground mb-2">
                Aspiring Software{" "}
                <motion.span
                  key={currentTitle}
                  className="text-hero-accent font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {titles[currentTitle]}
                </motion.span>
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Passionate about building modern, responsive web applications. 
                Currently pursuing Computer Science and Software Engineering at SLIIT City University.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex gap-3">
                <motion.a
                  href="https://linkedin.com/in/msm-mohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-hero-pattern rounded-lg flex items-center justify-center hover:bg-hero-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="mailto:mohammedmsm2002@gmail.com"
                  className="w-8 h-8 bg-hero-pattern rounded-lg flex items-center justify-center hover:bg-hero-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-8 h-8 bg-hero-pattern rounded-lg flex items-center justify-center hover:bg-hero-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="bg-hero-accent hover:bg-primary-glow text-hero-bg font-semibold px-8 relative overflow-hidden"
                >
                  <span className="relative z-10">View Projects</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-primary-glow"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-hero-bg px-8"
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <motion.div 
                  className="text-2xl font-bold text-hero-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                >
                  4+
                </motion.div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <motion.div 
                  className="text-2xl font-bold text-hero-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, type: "spring" }}
                >
                  2+
                </motion.div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <motion.div 
                  className="text-2xl font-bold text-hero-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, type: "spring" }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.img
                    src={heroPortrait}
                    alt="Musharraf Mohamed"
                    className="relative w-full h-auto rounded-2xl shadow-elegant"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <motion.div 
              className="absolute top-10 -left-4 bg-gradient-card rounded-lg p-4 shadow-card"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [20, 10, 20]
              }}
              transition={{ 
                opacity: { delay: 1 },
                x: { delay: 1 },
                y: { delay: 1, duration: 3, repeat: Infinity }
              }}
            >
              <div className="text-sm font-semibold text-foreground">Problem Solver</div>
              <div className="text-xs text-muted-foreground">Analytical Mindset</div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -right-4 bg-gradient-card rounded-lg p-4 shadow-card"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [-20, -28, -20]
              }}
              transition={{ 
                opacity: { delay: 1.5 },
                x: { delay: 1.5 },
                y: { delay: 1.5, duration: 2.5, repeat: Infinity }
              }}
            >
              <div className="text-sm font-semibold text-foreground">Quick Learner</div>
              <div className="text-xs text-muted-foreground">Adaptable & Growth-Oriented</div>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -right-8 bg-gradient-card rounded-lg p-3 shadow-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -12, 0]
              }}
              transition={{ 
                opacity: { delay: 2 },
                x: { delay: 2 },
                y: { delay: 2, duration: 4, repeat: Infinity }
              }}
            >
              <div className="text-xs font-semibold text-foreground">Team Player</div>
              <div className="text-xs text-muted-foreground">Collaborative</div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-hero-text hover:text-hero-accent transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;