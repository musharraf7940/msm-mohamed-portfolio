import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero-bg text-hero-text py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Musharraf Mohamed</h3>
            <p className="text-muted-foreground">
              Aspiring Software Developer passionate about creating innovative web solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/msm-mohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-hero-pattern rounded-lg flex items-center justify-center hover:bg-hero-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:mohammedmsm2002@gmail.com"
                className="w-10 h-10 bg-hero-pattern rounded-lg flex items-center justify-center hover:bg-hero-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-hero-pattern rounded-lg flex items-center justify-center hover:bg-hero-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-hero-accent transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-hero-accent transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-hero-accent transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-hero-pattern mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Musharraf Mohamed. Made with 
            <Heart className="h-4 w-4 text-red-500" />
            for innovative web experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;