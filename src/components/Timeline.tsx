import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Trophy, Calendar } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      year: "2023 - Present",
      title: "Computer Science & Software Engineering",
      subtitle: "SLIIT City University",
      description: "Pursuing degree in Computer Science with focus on software engineering principles, algorithms, and modern web technologies.",
      icon: GraduationCap,
      type: "education",
      color: "bg-blue-500"
    },
    {
      year: "2023",
      title: "Full Stack Development Projects",
      subtitle: "Personal & Academic Projects",
      description: "Developed multiple web applications including e-commerce platforms, student management systems, and network infrastructure designs.",
      icon: Code,
      type: "experience",
      color: "bg-green-500"
    },
    {
      year: "2023",
      title: "Network Design & Security",
      subtitle: "Specialized Training",
      description: "Completed enterprise-level network design and security assessment projects using industry-standard tools like Cisco Packet Tracer and Wireshark.",
      icon: Trophy,
      type: "achievement",
      color: "bg-purple-500"
    },
    {
      year: "2022",
      title: "Programming Foundation",
      subtitle: "Self-Learning & Practice",
      description: "Started journey in programming with Java, JavaScript, HTML, and CSS. Built strong foundation in problem-solving and logical thinking.",
      icon: Briefcase,
      type: "experience",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From the beginning of my programming journey to where I am today
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary-glow to-primary opacity-30"></div>
            
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className="relative mb-16"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                    <motion.div 
                      className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`grid grid-cols-2 gap-8 items-center ${isEven ? '' : 'text-right'}`}>
                    <motion.div 
                      className={`${isEven ? 'pr-8' : 'order-2 pl-8'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-shadow">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-primary font-semibold text-sm">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <h4 className="text-lg text-primary font-medium mb-3">{item.subtitle}</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        
                        {/* Type Badge */}
                        <div className="mt-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            item.type === 'education' ? 'bg-blue-100 text-blue-800' :
                            item.type === 'experience' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Spacer for the other side */}
                    <div className={`${isEven ? 'order-2' : ''}`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-primary rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              What's Next?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              I'm excited about the future and ready to take on new challenges. 
              Looking forward to internship opportunities and collaborative projects.
            </p>
            <motion.div 
              className="flex flex-wrap justify-center gap-3 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <div className="px-4 py-2 bg-white/20 rounded-full text-primary-foreground">
                Seeking Internships
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full text-primary-foreground">
                Open to Collaboration
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full text-primary-foreground">
                Always Learning
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;