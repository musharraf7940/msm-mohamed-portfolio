import { ExternalLink, Github, ShoppingBag, GraduationCap, Network, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website for Retail Clothing Store",
      description: "A comprehensive web application for a clothing business in Colombo, featuring product catalog, shopping cart, and user management.",
      icon: ShoppingBag,
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      category: "Web Application",
      highlights: ["Responsive Design", "User Authentication", "Product Management"]
    },
    {
      title: "Student Management System (CRUD)",
      description: "A complete student information management system with Create, Read, Update, and Delete operations for educational institutions.",
      icon: GraduationCap,
      technologies: ["HTML", "CSS", "JavaScript", "Database"],
      category: "Web Application",
      highlights: ["CRUD Operations", "Data Management", "Clean UI"]
    },
    {
      title: "Global Network Design (Multi-campus VLAN & WAN)",
      description: "Comprehensive network infrastructure design simulating multi-campus connectivity with VLAN segmentation and WAN implementation.",
      icon: Network,
      technologies: ["Cisco Packet Tracer", "Network Design", "VLAN", "WAN"],
      category: "Network Design",
      highlights: ["Multi-campus Setup", "VLAN Configuration", "WAN Implementation"]
    },
    {
      title: "Enterprise Security Assessment & Network Hardening",
      description: "Security analysis and network hardening project focusing on vulnerability assessment and implementing security best practices.",
      icon: Shield,
      technologies: ["Wireshark", "Linux", "Cisco Packet Tracer", "Security"],
      category: "Cybersecurity",
      highlights: ["Security Assessment", "Network Analysis", "Hardening Techniques"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.title}
                className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-primary font-medium mb-1">{project.category}</div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">{project.title}</h3>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted text-foreground text-sm rounded-md border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects and bring innovative ideas to life. 
              Let's discuss how we can work together.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary hover:bg-white/90"
            >
              Get In Touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;