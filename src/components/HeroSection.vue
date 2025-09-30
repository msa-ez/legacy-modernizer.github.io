<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>레거시 코드의 현대화,<br>AI 기반 자동 코드 변환 솔루션</h1>
          <p class="hero-subtitle">복잡한 레거시 코드를 현대적이고 유지보수가 쉬운 자바 아키텍처로 변환하세요!</p>
          <div class="hero-buttons">

            <!-- <g-link class="btn btn-primary" to="/#get-started" @click.native="scrollToSection('get-started')">지금 시작하기</g-link>
            <g-link class="btn btn-secondary" to="/#how-it-works" @click.native="scrollToSection('how-it-works')">작동 방식 알아보기</g-link> -->
            
            <a href="http://modernizer-app.uengine.io/" target="_blank" class="btn btn-primary">
              지금 시작하기
            </a>
            <g-link class="btn btn-secondary" to="/started/how-to-use/">
              사용 방법 보러가기
            </g-link>
          
          </div>
        </div>
        <div class="hero-image">
          <!-- <g-image src="~/img/tv-comparison.png" alt="브라운관 TV와 스마트 TV 비교" /> -->
          <g-image src="https://www.uengine.org/images/full-width-images/main-img-legacy.png" alt="레거시 모더나이저 화면 이미지" />
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
  background: linear-gradient(135deg, #f5f7fa 0%, #ccc 100%); 
  /* background-image: url('/images/hero-bg.png');
  background-repeat: no-repeat;
  background-position: right center; */
  border-bottom: 1px solid #e2e3e6;
  /* background: linear-gradient(to right, #e3e4e6, #1e88e5); */
  /* background: linear-gradient(to right, var(--legacy-bg-color), var(--modern-bg-color)); */
  /* color: white; */
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
  width: 80%;
  margin-left: 10%;
}

.hero-image img {
  max-width: 100%;
  /* border-radius: var(--border-radius);
  box-shadow: var(--box-shadow); */
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
    margin: -20px auto 10px;
    width: 100%;
  }
}
</style>
