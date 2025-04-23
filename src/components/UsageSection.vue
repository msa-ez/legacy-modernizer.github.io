<template>
  <section id="usage" class="usage-section section">
    <div class="container">
      <h2 class="section-title">누구나 쉽게 사용할 수 있습니다</h2>
      <div class="usage-steps">
        <div class="usage-step card">
          <div class="step-number">1</div>
          <h3>코드 업로드</h3>
          <p>스토어드 프로시저 파일과 관련 테이블 정의 파일을 업로드합니다. 파일명 규칙(SP_, DDL_, SEQ_)을 지켜주세요.</p>
        </div>
        <div class="usage-step card">
          <div class="step-number">2</div>
          <h3>그래프 시각화 확인</h3>
          <p>업로드된 코드가 그래프 형태로 시각화됩니다. 각 노드를 클릭하여 상세 정보를 확인하고 코드의 흐름을 파악할 수 있습니다.</p>
        </div>
        <div class="usage-step card">
          <div class="step-number">3</div>
          <h3>자바 코드 변환</h3>
          <p>변환 버튼을 클릭하면 현대적인 자바 코드로 자동 변환됩니다. 변환된 코드는 ZIP 파일로 다운로드할 수 있습니다.</p>
        </div>
      </div>
      <div class="usage-note">
        <h3>기술적 지식이 없어도 사용 가능합니다</h3>
        <p>Legacy Modernizer는 직관적인 인터페이스로 설계되어 있어 기술적 지식이 없는 사용자도 쉽게 사용할 수 있습니다. 마치 브라운관 TV에서 스마트 TV로 전환하는 것처럼 간단하게 레거시 코드를 현대화할 수 있습니다.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UsageSection'
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
  margin: 0 auto 1.5rem;
}

.usage-note {
  background: linear-gradient(to right, var(--legacy-bg-color), var(--modern-bg-color));
  color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
}

@media (max-width: 768px) {
  .usage-steps {
    grid-template-columns: 1fr;
  }
}
</style>
