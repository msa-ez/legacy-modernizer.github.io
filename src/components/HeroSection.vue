<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>레거시 코드의 현대화,<br>AI 기반 자동 코드 변환 솔루션</h1>
          <p class="hero-subtitle">복잡한 레거시 코드를 현대적이고 유지보수가 쉬운 자바 아키텍처로 변환하세요!</p>
          <div class="hero-buttons">
            <g-link class="btn btn-primary" to="/#get-started" @click.native="scrollToSection('get-started')">지금 시작하기</g-link>
            <g-link class="btn btn-secondary" to="/#how-it-works" @click.native="scrollToSection('how-it-works')">작동 방식 알아보기</g-link>
          </div>
        </div>
        <div class="hero-image">
          <g-image src="~/img/tv-comparison.png" alt="브라운관 TV와 스마트 TV 비교" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollToSection(sectionId) {
      this.$nextTick(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTitle = element.querySelector('.section-title');
          if (sectionTitle) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const elementPosition = sectionTitle.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, var(--legacy-bg-color), var(--modern-bg-color));
  color: white;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.hero-text {
  z-index: 2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image {
  text-align: center;
  z-index: 2;
}

.hero-image img {
  max-width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  
  .hero-text {
    text-align: center;
    order: 2;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image {
    order: 1;
    margin-bottom: 2rem;
  }
}
</style>
