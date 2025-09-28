import { GraduationCap, User, Heart, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">MS Musharraf Mohamed</h3>
                  <p className="text-muted-foreground">Aspiring Software Developer</p>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                I'm a passionate software developer with a strong foundation in modern web technologies. 
                My journey in computer science has equipped me with both technical skills and soft skills 
                that are essential in today's collaborative development environment.
              </p>
              
              <p className="text-foreground leading-relaxed">
                I thrive on solving complex problems and am always eager to learn new technologies. 
                My goal is to contribute to innovative projects that make a positive impact while 
                continuously growing as a developer.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>
              <p className="text-foreground font-medium">Computer Science and Software Engineering</p>
              <p className="text-muted-foreground">SLIIT City University</p>
              <p className="text-sm text-muted-foreground">Currently Pursuing</p>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Core Strengths</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-primary">Problem Solving</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-primary">Teamwork</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-primary">Rapid Learning</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-primary">Communication</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Passion</h3>
              </div>
              <p className="text-foreground">
                Building modern, responsive web applications that solve real-world problems 
                and deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;