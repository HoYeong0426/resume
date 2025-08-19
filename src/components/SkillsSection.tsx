import { 
  Code, 
  Database, 
  Server, 
  Shield, 
  Zap, 
  GitBranch,
  Globe,
  Settings
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "Java", icon: Code },
    { name: "Spring Boot", icon: Zap },
    { name: "Oracle", icon: Database },
    { name: "MyBatis", icon: Database },
    { name: "REST API", icon: Server },
    { name: "Feign Client", icon: Globe },
    { name: "Eureka Server", icon: Server },
    { name: "JWT", icon: Shield },
    { name: "Spring Security", icon: Shield },
    { name: "JavaScript", icon: Code },
    { name: "jQuery", icon: Code },
    { name: "Wijmo", icon: Settings }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-foreground">Skills</h2>
            <div className="section-divider mb-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="skill-item group cursor-default fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 rounded-full bg-secondary group-hover:bg-primary transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <span className="font-medium text-sm text-center group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;