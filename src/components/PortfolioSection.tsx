import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database } from "lucide-react";

const PortfolioSection = () => {
  const portfolioProjects = [
    {
      title: "마이크로서비스 통신 아키텍처 설계 및 구현",
      descriptionGiven: [
        "기존 모놀리식 ERP 시스템에서 견적, 수주, A/S, 선수금 등 다양한 업무 모듈 추가 필요",
        "각 모듈별 개별 백엔드 서비스와의 통신 시 하드코딩된 URL 및 인증 로직으로 인한 개발 생산성 저하",
        "새로운 서비스 추가 시 프론트엔드 코드 수정 필요로 인한 확장성 한계"
      ],
      descriptionWhen: [
        "Spring Cloud OpenFeign을 활용한 동적 서비스 디스커버리 시스템 구축",
        "Eureka 서버 연동으로 서비스 간 자동 라우팅 및 로드밸런싱 구현",
        "RequestInterceptor를 통한 JWT 토큰 자동 전달 시스템 설계",
        "REST API 통합 엔드포인트(/rest-api)를 통한 중앙화된 API 관리"
      ],
      descriptionThen: [
        "서비스 간 통신 코드 중복 70% 감소",
        "새로운 백엔드 서비스 추가 시 프론트엔드 코드 수정 불필요"
      ],
      blogLinks: [
        { name: "Spring Cloud OpenFeign", href: "https://rich-yuna-daddy.tistory.com/entry/Feign-Client%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-API-%ED%98%B8%EC%B6%9C-%EB%B0%8F-%EC%98%88%EC%99%B8-%EC%B2%98%EB%A6%AC" },
      ]
    },
    {
      title: "JWT 기반 인증 시스템 및 권한 관리 체계 구축",
      descriptionGiven: [
        "기존 세션 기반 인증으로 인한 마이크로서비스 환경에서의 세션 불일치 문제",
        "각 페이지별 개별 권한 검증으로 인한 코드 중복 및 보안 취약점",
        "사용자 권한 변경 시 모든 관련 코드 수정 필요로 인한 유지보수성 저하"
      ],
      descriptionWhen: [
        "JWT 토큰 기반 인증 시스템으로 전환",
        "인터셉터를 통한 중앙화된 권한 검증 시스템 구현",
        "쿠키 기반 토큰 저장 및 자동 갱신 메커니즘 설계",
        "Role-based Access Control을 통한 세밀한 권한 관리",
      ],
      descriptionThen: [
        "인증 관련 코드 중복 80% 감소",
        "사용자 인증 응답 시간 200ms 이하 개선"
      ],
    },
    {
      title: "동적 서비스 라우팅 및 API 통합 관리 시스템",
      descriptionGiven: [
        "다양한 백엔드 서비스와의 통신 시 하드코딩된 URL 관리",
        "서비스별 개별 API 호출 로직으로 인한 개발 생산성 저하",
        "API 버전 관리 및 일관성 유지의 어려움",
        "에러 처리 및 로깅의 중복 구현"
      ],
      descriptionWhen: [
        "FeignClientBuilder를 활용한 런타임 서비스 라우팅 시스템 구현",
        "동적 서비스명 파라미터를 통한 유연한 백엔드 서비스 호출",
        "통합된 에러 처리 및 로깅 시스템 구축",
        "API 응답 표준화 및 일관된 데이터 형식 적용"
      ],
      descriptionThen: [
        "API 호출 코드 재사용성 90% 향상",
        "새로운 서비스 추가 시 개발 시간 단축",
        "에러 처리 코드 중복 80% 감소",
      ],
    },
    {
      title: "데이터 무결성 및 트랜잭션 관리 시스템",
      descriptionGiven: [
        "복잡한 비즈니스 로직에서 데이터 일관성 보장 어려움",
        "동시 사용자 환경에서의 데이터 충돌 및 무결성 문제",
        "대용량 데이터 처리 시 메모리 부족 및 성능 저하",
        "데이터 백업 및 복구 시스템 부재"
      ],
      descriptionWhen: [
        "낙관적 락(Optimistic Lock)을 통한 동시성 제어",
        "데이터 검증 및 비즈니스 규칙 검증 시스템 구현",
        "HikariCP를 통한 데이터베이스 커넥션 풀 최적화"
      ],
      descriptionThen: [
        "데이터 무결성 오류 0건 달성",
        "데이터베이스 응답 시간 40% 개선",
      ],
    },
    {
      title: "비즈니스 로직 리팩토링 및 성능 개선",
      descriptionGiven: [
        "레거시 코드에 중복 로직이 다수 존재해 변경 전파 비용과 회귀 결함 위험이 높음.",
        "컨트롤러, 서비스, 매퍼 계층별로 데이터 및 에러 처리가 각기 다르게 구현되어 있어 일관성이 떨어짐.",
        "불필요한 I/O를 유발하는 비효율적인 쿼리가 많았고, 트랜잭션 경계가 불분명해 데이터 정합성 문제가 발생.",
      ],
      descriptionWhen: [
        "디자인 패턴 적용(Strategy Pattern, Singleton Pattern)",
        "인증 정보 접근·마이크로서비스 호출 단일화",
        "AOP로 트랜잭션 및 로깅 일원화",
        "MyBatis 쿼리 개선 및 커넥션 풀 튜닝"
      ],
      descriptionThen: [
        "중복 코드 70% 감소, 데이터 오류율 80% 감소",
        "트랜잭션 경계 명확화 → 부분 커밋/롤백 문제 제거",
        "불필요 I/O 축소와 커넥션 재활용 최적화로 평균 응답 시간 및 p95 지연 감소",
      ],
      blogLinks: [
        { name: "Strategy Pattern", href: "https://rich-yuna-daddy.tistory.com/entry/%EC%8A%A4%ED%94%84%EB%A7%81%EC%97%90%EC%84%9C-%EC%A0%84%EB%9E%B5-%ED%8C%A8%ED%84%B4Strategy-Pattern-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0" },
        { name: "Singleton Pattern", href: "https://rich-yuna-daddy.tistory.com/entry/Jackson-%EA%B8%B0%EB%B0%98-JSON-%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0%EC%99%80-%EC%BB%A4%EC%8A%A4%ED%85%80-ObjectMapper-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0" },
        { name: "트랜잭션", href: "https://rich-yuna-daddy.tistory.com/entry/Spring-AOP%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EA%B4%80%EB%A6%AC-%EC%84%A4%EC%A0%95" },
        { name: "로깅", href: "https://rich-yuna-daddy.tistory.com/entry/Spring-AOP%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%A1%9C%EA%B9%85Log-%EC%84%A4%EC%A0%95" },
      ]
    },
    {
      title: "프론트엔드 성능 최적화 및 사용자 경험 개선",
      descriptionGiven: [
        "대용량 데이터 처리 시 그리드 렌더링 성능 저하",
        "파일 업로드/다운로드 시 사용자 대기 시간 증가",
        "복잡한 폼 검증으로 인한 사용자 불편함",
      ],
      descriptionWhen: [
        "Wijmo 그리드 컴포넌트를 활용한 가상화 렌더링 구현",
        "jQuery Validation을 활용한 실시간 폼 검증 및 사용자 피드백 시스템",
        "반응형 디자인 및 모바일 최적화 적용"
      ],
      descriptionThen: [
        "그리드 렌더링 성능 300% 향상 (10,000행 기준)",
        "폼 검증 오류율 60% 감소",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-6 text-foreground">Portfolio</h2>
            <div className="section-divider mb-6"></div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioProjects.map((project, index) => (
              <div 
                key={project.title}
                className="project-card fade-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                                     {/* Given Section */}
                   <div className="space-y-2">
                     <h4 className="text-lg font-semibold text-primary">Given</h4>
                     <div className="space-y-2 ml-4">
                       {project.descriptionGiven?.map((desc, idx) => (
                         <div key={idx} className="flex items-start gap-2">
                           <span className="text-primary font-bold text-sm mt-1">•</span>
                           <p className="text-muted-foreground leading-relaxed text-sm">
                             {desc}
                           </p>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* When Section */}
                   <div className="space-y-2">
                     <h4 className="text-lg font-semibold text-primary">When</h4>
                     <div className="space-y-2 ml-4">
                       {project.descriptionWhen?.map((desc, idx) => (
                         <div key={idx} className="flex items-start gap-2">
                           <span className="text-primary font-bold text-sm mt-1">•</span>
                           <p className="text-muted-foreground leading-relaxed text-sm">
                             {desc}
                           </p>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Then Section */}
                   <div className="space-y-2">
                     <h4 className="text-lg font-semibold text-primary">Then</h4>
                     <div className="space-y-2 ml-4">
                       {project.descriptionThen?.map((desc, idx) => (
                         <div key={idx} className="flex items-start gap-2">
                           <span className="text-primary font-bold text-sm mt-1">•</span>
                           <p className="text-muted-foreground leading-relaxed text-sm">
                             {desc}
                           </p>
                         </div>
                       ))}
                     </div>
                   </div>

                                     {/* Blog Links */}
                   {project.blogLinks && project.blogLinks.length > 0 && (
                     <div>
                       <div className="flex items-center gap-2 mb-3">
                         <ExternalLink className="h-4 w-4 text-primary" />
                         <span className="text-sm font-medium text-foreground">관련 블로그:</span>
                       </div>
                       <div className="flex flex-wrap gap-2">
                         {project.blogLinks.map((link, idx) => (
                           <a
                             key={idx}
                             href={link.href}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs rounded-full font-medium transition-colors cursor-pointer border border-primary/20 hover:border-primary/40"
                           >
                             {link.name}
                           </a>
                         ))}
                       </div>
                     </div>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;