import { Palette, Code2, Layout } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Creating visually appealing and user-friendly web interfaces that engage users and provide excellent user experience.",
      icon: Palette,
      features: [
        "Responsive Design",
        "UI/UX Design",
        "Modern Aesthetics",
        "User-Centered Approach"
      ]
    },
    {
      title: "Programming",
      description: "Developing robust applications using modern programming languages and following best practices for clean, maintainable code.",
      icon: Code2,
      features: [
        "Java Development",
        "JavaScript Programming",
        "Problem Solving",
        "Code Optimization"
      ]
    },
    {
      title: "Front-End Development",
      description: "Building interactive and dynamic web applications with modern frameworks and technologies for optimal performance.",
      icon: Layout,
      features: [
        "React Applications",
        "HTML/CSS/JavaScript",
        "Interactive Features",
        "Performance Optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group text-center"
              >
                {/* Service Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center justify-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Effect Indicator */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Available for Projects
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm committed to delivering high-quality solutions that meet your specific needs. 
              Whether you're looking for a simple website or a complex web application, 
              I'm here to help bring your vision to reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Responsive Design
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Clean Code
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Modern Technologies
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Timely Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;