import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "부산 아이티윌",
      role: "K-디지털 교육과정",
      period: "2022.12 ~ 2023.06",
      description: "핀테크 디지털 금융서비스 자바 개발자",
      // responsibilities: [
      //   "Completed intensive training in Java enterprise development",
      //   "Mastered Spring framework and database technologies",
      //   "Developed multiple full-stack projects during training",
      //   "Demonstrated leadership in team-based projects",
      //   "Achieved highest scores in technical assessments"
      // ],
      // technologies: ["Java", "Spring", "Database Design", "Web Development"]
    },
    {
      company: "경성대학교",
      role: "중국학과",
      period: "2013.03 – 2019.08",
      // description: "중국학과",
      // responsibilities: [
      //   "Migrating legacy VB6 systems to modern Java/Spring Boot architecture",
      //   "Optimizing Oracle database performance and MyBatis ORM integration",
      //   "Implementing microservices with Eureka Server and Feign Client",
      //   "Developing secure REST APIs with JWT authentication",
      //   "Collaborating with cross-functional teams on system modernization"
      // ],
      // technologies: ["Java", "Spring Boot", "Oracle", "MyBatis", "Microservices"]
    },
  ];

  const certifications = [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      year: "2023.09",
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-6 text-foreground">Experience & Education</h2>
            <div className="section-divider mb-6"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company + exp.role}
                className="timeline-item fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="ml-6">
                  {/* Experience Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>


                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  {/* <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}

                  {/* Technologies */}
                  {/* <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name}
                  className="project-card fade-in"
                  style={{animationDelay: `${(experiences.length + index) * 0.2}s`}}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;