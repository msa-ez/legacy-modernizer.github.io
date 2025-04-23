<template>
  <section id="comparison" class="comparison-section section">
    <div class="container">
      <h2 class="section-title">전통적인 방식 vs Legacy Modernizer</h2>
      <div class="comparison-table">
        <div class="comparison-header">
          <div class="comparison-cell header-cell"></div>
          <div class="comparison-cell header-cell legacy">
            전통적인 방식<br>
            <span style="font-size: 1rem; font-weight: normal;">(사람에 의한 직접 전환)</span>
          </div>
          <div class="comparison-cell header-cell modern">
            Legacy Modernizer<br>
            <span style="font-size: 1rem; font-weight: normal;">(AI 기반 자동 전환)</span>
          </div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell feature-cell">시간 소요</div>
          <div class="comparison-cell legacy">
            <span class="icon">⏱️</span>
            <p>수개월 이상의 시간 소요</p>
          </div>
          <div class="comparison-cell modern">
            <span class="icon">⚡</span>
            <p>몇 시간 내로 자동 변환</p>
          </div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell feature-cell">비용</div>
          <div class="comparison-cell legacy">
            <span class="icon">💰</span>
            <p>고비용의 전문 인력 필요</p>
          </div>
          <div class="comparison-cell modern">
            <span class="icon">💸</span>
            <p>저렴한 비용으로 자동화</p>
          </div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell feature-cell">정확도</div>
          <div class="comparison-cell legacy">
            <span class="icon">❓</span>
            <p>사람의 실수 가능성</p>
          </div>
          <div class="comparison-cell modern">
            <span class="icon">✅</span>
            <p>AI 기반 정확한 변환</p>
          </div>
        </div>
        <div class="comparison-row">
          <div class="comparison-cell feature-cell">유지보수</div>
          <div class="comparison-cell legacy">
            <span class="icon">🔧</span>
            <p>복잡하고 어려운 유지보수</p>
          </div>
          <div class="comparison-cell modern">
            <span class="icon">🛠️</span>
            <p>쉽고 명확한 유지보수</p>
          </div>
        </div>
      </div>
      <div class="comparison-image">
        <div class="image-container">
          <g-image src="~/img/tv-comparison.png" alt="브라운관 TV와 스마트 TV 비교" />
          <div class="image-overlay">
            <div class="legacy-label">과거</div>
            <div class="modern-label">현재</div>
          </div>
        </div>
        <p class="image-caption">브라운관 TV에서 스마트 TV로의 진화처럼, 레거시 코드도 현대적인 코드로 진화할 수 있습니다.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComparisonSection'
}
</script>

<style scoped>
.comparison-section {
  margin-top: -3rem;
}

.comparison-table {
  margin-bottom: 3rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

.comparison-header, .comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.comparison-header {
  background-color: var(--dark-color);
  color: white;
}

.comparison-cell {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header-cell {
  font-weight: 700;
  font-size: 1.2rem;
}

.feature-cell {
  background-color: var(--light-color);
  font-weight: 700;
}

.legacy {
  background-color: var(--legacy-bg-color);
  color: white;
}

.modern {
  background-color: var(--middle-bg-color);
  color: white;
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.comparison-row:nth-child(odd) .feature-cell {
  background-color: #f1f5f9;
}

.comparison-image {
  margin-top: 3rem;
  text-align: center;
}

.image-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
}

.legacy-label, .modern-label {
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 700;
}

.legacy-label {
  background-color: var(--legacy-bg-color);
  color: white;
}

.modern-label {
  background-color: var(--modern-bg-color);
  color: white;
}

.image-caption {
  font-style: italic;
  color: var(--gray-color);
}

@media (max-width: 768px) {
  .comparison-header, .comparison-row {
    grid-template-columns: 1fr;
  }
  
  .comparison-cell {
    padding: 1rem;
  }
  
  .header-cell:first-child {
    display: none;
  }
  
  .feature-cell, .comparison-row:nth-child(odd) .feature-cell {
    background-color: var(--dark-color);
    color: white;
  }
}
</style>
