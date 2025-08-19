import { Calendar, Building, Code, Database } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ERP 마이그레이션",
      period: "2023.10 –",
      company: "하이록코리아",
      href: "https://www.hy-lok.com/Index.hylok",
      role: "Backend Developer",
      description: "기존 모놀리식 ERP 시스템의 확장성 및 유지보수성 한계를 극복하기 위해 마이크로서비스 아키텍처를 도입하고, 동적 서비스 통신 및 인증 시스템을 구축했습니다.",
      technologies: ["Java", "Spring Boot", "Oracle", "MyBatis", "JWT", "Feign Client", "Eureka Server"],
      achievements: [
        "하드코딩된 URL 의존성 문제를 해결하고, Spring Cloud OpenFeign과 Eureka를 활용해 동적 서비스 디스커버리 시스템을 구축했습니다. 이를 통해 서비스 간 통신 코드 중복을 70% 줄였고, 새로운 백엔드 서비스 추가 시 코드 수정이 불필요해져 개발 생산성을 크게 높였습니다.",
      ],
      achievements2: [
        "마이크로서비스 환경에서 발생하는 세션 불일치 문제를 해결하고자 JWT 기반 인증 시스템으로 전환했습니다. 인터셉터를 활용해 모든 API 요청에 대해 중앙 집중식 권한 검증 시스템을 구축하고, Role-based Access Control을 도입하여 권한 관리의 효율성을 높였습니다.",
      ],
      achievements3: [
        "FeignClientBuilder를 이용한 동적 서비스 라우팅 시스템과 공통에러 처리 및 로깅 시스템을 구축하여 API 호출 코드 재사용성을 90% 향상시켰습니다.",
      ],
      achievements4: [
        "노후화된 레거시 코드 리팩토링을 통해 시스템 유지보수성을 개선했습니다. 비효율적인 쿼리를 최적화하고 공통 모듈화 작업을 진행하여 코드 중복을 70% 줄였으며, 비즈니스 로직을 자동화하여 데이터 오류율을 80% 감소시켰습니다.",
        "대용량 쓰기로 일괄 삽입(Batch Insert)과 MERGE 기반의 upsert를 도입해 DB 왕복 횟수를 줄여 대용량 데이터 처리 성능을 향상시켰습니다."
      ]
    },
    // {
    //   title: "Microservices Architecture Implementation",
    //   period: "2023",
    //   company: "Hirock Korea",
    //   role: "Backend Developer",
    //   description: "Designed and implemented microservices infrastructure for enterprise applications",
    //   technologies: ["Spring Boot", "Eureka Server", "Feign Client", "JWT"],
    //   achievements: [
    //     "Built service discovery mechanism with Eureka Server",
    //     "Implemented JWT-based authentication across services",
    //     "Created API gateway for centralized routing",
    //     "Established monitoring and logging for distributed systems"
    //   ]
    // },
    // {
    //   title: "Database Performance Optimization",
    //   period: "2023",
    //   company: "Hirock Korea", 
    //   role: "Backend Developer",
    //   description: "Comprehensive optimization of Oracle database queries and MyBatis mapping",
    //   technologies: ["Oracle", "MyBatis", "SQL", "Performance Tuning"],
    //   achievements: [
    //     "Analyzed and optimized slow-performing queries",
    //     "Implemented efficient MyBatis mappers",
    //     "Created database indexing strategies",
    //     "Reduced query execution time by up to 60%"
    //   ]
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-6 text-foreground">Work Experience</h2>
            <div className="section-divider mb-6"></div>
          </div>

          {/* Projects Timeline */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="project-card fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Project Header */}
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Building className="h-4 w-4" />
                      <a 
                        href={project.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline cursor-pointer"
                      >
                        {project.company}
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {project.role}
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground mb-4 leading-relaxed font-semibold">
                      {project.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        동적 서비스 디스커버리 및 통신 효율화
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                      JWT 기반 인증 및 권한 관리 시스템 구축
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements2.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                      통합 API 관리 시스템 구현
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements3.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                      비지니스 로직 리팩토링 및 성능 개선
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements4.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;