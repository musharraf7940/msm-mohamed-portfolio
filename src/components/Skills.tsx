import { Code, Wrench, Users, MessageSquare } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "React", level: 75 },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Code },
    { name: "Rapid Learning", icon: Wrench },
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: MessageSquare },
  ];

  return (
    <section id="skills" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiency combined with essential soft skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
              </div>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="bg-gradient-card rounded-xl p-6 shadow-card">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Soft Skills</h3>
              </div>
            </div>

            <div className="grid gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                        <div className="w-full bg-primary/20 rounded-full h-2 mt-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: '90%',
                              animationDelay: `${index * 0.2}s`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Skills Badge */}
            <div className="mt-8 bg-gradient-primary rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-primary-foreground mb-2">Always Learning</h4>
              <p className="text-primary-foreground/90">
                Continuously expanding my skill set with new technologies and best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;