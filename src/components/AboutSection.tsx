const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="mb-6 text-foreground">Introduce</h2>
          <div className="section-divider mb-12"></div>
          
          {/* About Content */}
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            {/* <p className="fade-in">
              From <strong className="text-primary">national IT training top award</strong> to 
              <strong className="text-primary"> Information Processing Engineer</strong>, 
              my journey in technology has been driven by passion and continuous growth.
            </p> */}
            
            <p className="fade-in">
            <strong className="text-primary">매일 성장하는 백엔드 개발자</strong>입니다.
            </p>
            
            <p className="fade-in">
            스스로 문제를 찾아내고 해결하며 실질적인 성과를 만들어내는 것을 목표로 합니다. 2년간 백엔드 개발을 담당하며, <strong className="text-primary">레거시 시스템을 웹 환경으로 성공적으로 마이그레이션하는 프로젝트</strong>를 이끌었습니다.
            </p>
            
            <p className="fade-in">
            평균 10초 이상 소요되던 비효율적인 쿼리를 최적화하여 로딩 시간을 <strong className="text-primary">1초 이내로 단축</strong>했고, 반복되는 비즈니스 로직을 공통 모듈로 분리하여 <strong className="text-primary">코드 중복을 70% 이상 제거</strong>하며 유지보수성을 극적으로 향상시켰습니다.
            </p>

            <p className="fade-in">
            비지니스 성장은 혼자가 아닌 함께 만들 수 있다고 생각하기에 다양한 직무의 구성원들과 <strong className="text-primary">적극적으로 커뮤니케이션</strong>하며 협업해왔습니다. 또한 적극적인 커뮤니케이션으로 반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 일을 좋아합니다.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;