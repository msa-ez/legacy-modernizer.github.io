<template>
  <section id="how-it-works" class="how-it-works-section section">
    <div class="container">
      <h2 class="section-title">주요 기능 및 작동 방식</h2>
      <h4 class="text-center" style="margin: -1rem 0 2rem;">Legacy Modernizer는 세 단계의 프로세스를 통해 레거시 코드를 현대화합니다</h4>
      <div class="steps">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">

            <div class="step-image">
              <!-- <h3>ANTLR를 활용한 구문 분석</h3> -->
              <h3>자동 코드 분석</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>

            <p>AI가 복잡한 레거시 코드를 분석하여 구조와 의미를 파악합니다. 스토어드 프로시저 파일을 의미적으로 완전한 단위로 나누어 분석하고, 코드의 구조를 파악합니다.</p>
            
          </div>
        </div>
        <div class="step-connector"></div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">

            <div class="step-image">
              <h3>그래프 형태로 시각화</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </div>
            <p>분석된 코드를 그래프 형태로 시각화하여 코드의 구조와 흐름을 직관적으로 파악할 수 있습니다. 복잡한 관계도 한눈에 이해할 수 있습니다.</p>
            
          </div>
        </div>
        <div class="step-connector"></div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">

            <div class="step-image">
              <h3>자바로 전환</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 3 21 3 21 8"></polyline>
                <line x1="4" y1="20" x2="21" y2="3"></line>
                <polyline points="21 16 21 21 16 21"></polyline>
                <line x1="15" y1="15" x2="21" y2="21"></line>
                <line x1="4" y1="4" x2="9" y2="9"></line>
              </svg>
            </div>
            <p>시각화된 코드 구조를 기반으로 현대적인 자바 코드로 자동 변환합니다. 객체 지향 설계와 도메인 주도 개발 방식을 적용하여 유지보수가 쉬운 코드를 생성합니다.</p>
            
          </div>
        </div>
      </div>
      <!-- <div class="how-it-works-comparison">
        <div class="comparison-title">
          <h3>브라운관 TV에서 스마트 TV로의 진화처럼</h3>
          <p>Legacy Modernizer는 오래된 레거시 코드를 현대적인 자바 코드로 변환하여 시스템을 현대화합니다.</p>
        </div>
      </div> -->

      <!-- <h2 class="section-title">지원 언어 및 향후 로드맵 안내</h2> -->
      <div class="supported-languages">
        <h3>지원 언어 유형</h3>
        <div class="languages-content">
          <ul>
            <li><b>소스 언어:</b> Oracle PL/SQL, Postgres SQL</li>
            <li><b>타겟 언어:</b> Java Spring Boot with JPA, Python with SQL Alchemy</li>
          </ul>
          <p class="mt-2">
            <b>* 향후 다양한 소스 언어와 타겟 언어 지원 예정</b><br>
            <b>* 고객 요청 시, 원하는 소스 및 타겟 언어에 대한 커스터마이징 지원 가능</b>
          </p>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorksSection'
}
</script>

<style scoped>
.how-it-works-section {
  /* margin-top: -3rem; */
  margin-bottom: 3rem;
}

.steps {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}

.step-item {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 0 2rem 2rem 2rem;
  margin-bottom: 1rem;
}

.step-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.step-content {
  flex-grow: 1;
}

.step-image {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 1.5rem;
}

.step-image svg {
  color: var(--primary-color);
  padding: 0.5rem;
}

.step-connector {
  width: 2px;
  height: 30px;
  background-color: var(--primary-color);
  margin-left: 25px;
  margin-bottom: 1rem;
}

.how-it-works-comparison {
  background: linear-gradient(to right, var(--legacy-bg-color), var(--modern-bg-color));
  color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
}

.comparison-title h3 {
  margin-bottom: 1rem;
}

.supported-languages {
  background: linear-gradient(135deg, #f5f7fa 0%, #ccc 100%); 
  /* background-color: white; */
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: center;
  border: 1px solid #f2f2f2;
}

.languages-content {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}

@media (max-width: 768px) {
  .step-item {
    flex-direction: column;
    padding: 2rem;
  }
  
  .step-number {
    margin: 0;
  }
  
  .step-image {
    margin-top: 0;
    flex-direction: row-reverse;
    justify-content: center;
    margin-left: -1rem;
  }

  .step-connector {
    display: none;
  }

  .supported-languages {
    margin-top: -1rem;
  }
}
</style>
