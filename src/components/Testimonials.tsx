import { motion } from "framer-motion";
import { Star, Quote, User, Users, BookOpen } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Computer Science Professor",
      organization: "SLIIT City University",
      content: "Musharraf demonstrates exceptional problem-solving skills and shows great potential in software development. His dedication to learning and collaborative nature make him stand out among his peers.",
      rating: 5,
      avatar: "SJ",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      name: "Ahmed Hassan",
      role: "Project Team Lead",
      organization: "Academic Project",
      content: "Working with Musharraf on our student management system was a great experience. He brings creativity to problem-solving and is always willing to help team members. His technical skills are impressive.",
      rating: 5,
      avatar: "AH", 
      icon: Users,
      color: "bg-green-500"
    },
    {
      name: "Priya Sharma",
      role: "Study Group Partner",
      organization: "SLIIT City University",
      content: "Musharraf has been an invaluable study partner. His ability to explain complex concepts clearly and his patient approach to helping others learn makes him a natural mentor and team player.",
      rating: 5,
      avatar: "PS",
      icon: User,
      color: "bg-purple-500"
    }
  ];

  const stats = [
    { label: "Team Projects", value: "8+", icon: Users },
    { label: "Study Hours", value: "500+", icon: BookOpen },
    { label: "Code Reviews", value: "25+", icon: Star },
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from professors, peers, and project collaborators
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-gradient-card rounded-xl p-6 text-center shadow-card hover:shadow-elegant transition-shadow"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <motion.div 
                  className="text-3xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <Quote className="w-full h-full text-primary" />
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.organization}</p>
                  </div>
                  <div className={`w-8 h-8 ${testimonial.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Accent Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${testimonial.color}`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-card rounded-2xl p-8 max-w-3xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects and learn from experienced developers. 
              If you're looking for a dedicated, quick-learning team member, let's connect!
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;