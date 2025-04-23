<template>
  <section id="features" class="features-section section">
    <div class="container">
      <h2 class="section-title">주요 기능</h2>
      <h4 class="text-center" style="margin-bottom: 30px;">Legacy Modernizer는 레거시 코드 현대화를 위한 세 가지 핵심 기능을 제공합니다</h4>
      
      <div class="usage-steps">
        <div class="usage-step card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
          <h3>자동 코드 분석</h3>
          <p>복잡한 스토어드 프로시저 코드를 AI가 자동으로 분석하여 구조와 의미를 파악합니다. ANTLR를 활용한 구문 분석으로 코드의 의미를 정확히 이해합니다.</p>
        </div>
        <div class="usage-step card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <h3>시각적 표현</h3>
          <p>코드의 흐름을 그래프 형태로 시각화하여 한눈에 파악할 수 있습니다. 복잡한 코드 구조를 직관적으로 이해하고 분석할 수 있습니다.</p>
        </div>
        <div class="usage-step card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 3 21 3 21 8"></polyline>
              <line x1="4" y1="20" x2="21" y2="3"></line>
              <polyline points="21 16 21 21 16 21"></polyline>
              <line x1="15" y1="15" x2="21" y2="21"></line>
              <line x1="4" y1="4" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3>자동 변환</h3>
          <p>분석된 코드를 현대적인 자바 아키텍처로 자동 변환합니다. 객체 지향 설계와 도메인 주도 개발 방식을 적용하여 유지보수가 쉬운 코드를 생성합니다.</p>
        </div>
      </div>
      <!-- <div class="features-comparison">
        <div class="comparison-title">
          <h3>브라운관 TV에서 스마트 TV로, 레거시 코드에서 현대적 코드로</h3>
        </div>
        <div class="comparison-content grid-2">
          <div class="comparison-item legacy">
            <h4>레거시 코드</h4>
            <ul>
              <li>복잡하고 이해하기 어려운 구조</li>
              <li>유지보수의 어려움</li>
              <li>확장성 부족</li>
              <li>전문가에게 의존적</li>
            </ul>
          </div>
          <div class="comparison-item modern">
            <h4>현대적 코드</h4>
            <ul>
              <li>명확하고 이해하기 쉬운 구조</li>
              <li>쉬운 유지보수</li>
              <li>높은 확장성</li>
              <li>팀 협업 용이</li>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>

<style scoped>
.usage-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.usage-step {
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.usage-step:hover {
  transform: translateY(-10px);
}

.features-grid {
  margin-bottom: 3rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon svg {
  color: var(--primary-color);
}

.features-comparison {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2rem;
}

.comparison-title {
  text-align: center;
  margin-bottom: 2rem;
}

.comparison-item {
  padding: 1.5rem;
  border-radius: var(--border-radius);
}

.comparison-item h4 {
  margin-bottom: 1rem;
  text-align: center;
}

.legacy {
  background-color: var(--legacy-bg-color);
  color: white;
}

.modern {
  background-color: var(--modern-bg-color);
  color: white;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .usage-steps {
    grid-template-columns: 1fr;
  }


  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .comparison-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
