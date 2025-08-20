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
            <p className="fade-in">
              <strong className="text-primary">"항상 고민하는 백엔드 개발자"</strong>입니다.
            </p>
            
            <p className="fade-in">
              단순히 기능이 <strong className="text-primary">'동작하는 것'</strong>을 넘어, <strong className="text-primary">'효율적으로 동작하는 것'</strong>에 대한 깊은 고민을 멈추지 않습니다.
            </p>
            
            <p className="fade-in">
              <strong className="text-primary"></strong> 레거시 시스템을 웹 환경으로 마이그레이션하는 과정에서, <strong className="text-primary">10초를 넘기던 비효율적인 쿼리를 분석하고 인덱스 전략을 재설계</strong>하여 로딩 시간을 <strong className="text-primary">1초 미만으로 단축</strong>했습니다.
            </p>

            <p className="fade-in">
              <strong className="text-primary"></strong> 반복되는 로직을 공통 모듈로 분리하는 리팩토링을 주도하여 <strong className="text-primary">코드 중복을 70% 이상 제거</strong>하고, 시스템의 유지보수성과 확장성을 동시에 확보했습니다.
            </p>

            <p className="fade-in">
              <strong className="text-primary">코드의 품질을 높이는 것이 곧 비즈니스의 지속가능성을 확보하는 길</strong>이라고 생각합니다. 깊은 고민을 바탕으로 다양한 팀과 소통하며 협업하며, 비효율적인 프로세스를 자동화하는 데 앞장섰습니다.
            </p>

            <p className="fade-in">
              <strong className="text-primary">견고한 아키텍처와 효율적인 코드로 비즈니스 성장에 기여</strong>하고 싶습니다.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;