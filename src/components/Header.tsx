import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero-bg/95 backdrop-blur-sm border-b border-hero-pattern">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-hero-text">
            Portfolio.
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-hero-text hover:text-hero-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-hero-text hover:text-hero-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-hero-text hover:text-hero-accent transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-hero-text hover:text-hero-accent transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-hero-text hover:text-hero-accent transition-colors"
            >
              Services
            </button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-hero-bg"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-hero-text hover:text-hero-accent"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-hero-pattern">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-hero-text hover:text-hero-accent transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-hero-text hover:text-hero-accent transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-hero-text hover:text-hero-accent transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-hero-text hover:text-hero-accent transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-hero-text hover:text-hero-accent transition-colors text-left"
              >
                Services
              </button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-hero-bg w-fit"
              >
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;