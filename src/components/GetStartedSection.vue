<template>
  <section id="get-started" class="get-started-section">
 
    <div class="container">
      <div class="get-started-content">
        <div class="get-started-text">
          <h2 class="section-title">직접 체험해보세요</h2>

          <p>Legacy Modernizer를 통해 복잡한 레거시 코드를 현대적인 자바 코드로 쉽고 빠르게 변환하세요.
             샘플 코드를 사용하거나 직접 코드를 업로드하여 변환 과정을 확인할 수 있습니다.</p>

             <div class="get-started-buttons">
              <a href="http://modernizer-app.uengine.io/" target="_blank" class="btn btn-primary">
                지금 시작하기
              </a>
              <g-link class="btn btn-secondary" to="/started/domain-driven/">
                사용 방법 보러가기
              </g-link>
            </div>
          
             <!-- <a href="http://modernizer-app.uengine.io/" class="btn btn-primary btn-large">지금 시작하기</a> -->
            <p class="cta-subtext">무료로 체험해보세요</p>
        </div>
        <div class="get-started-cta">
          <img src="https://ju0735.github.io/uengine-new.github.io/images/legacy-modernizer/10.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GetStartedSection'
}
</script>

<style scoped>
.section-title {
  text-align: left;
  margin-bottom: 1rem;
}

.get-started-content {
  background: linear-gradient(to right, var(--legacy-bg-color), var(--modern-bg-color));
  color: white;
  /* background-color: white; */
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 3rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

/* .get-started-steps {
  margin-top: 2rem;
} */

.step {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.step-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  margin-right: 1rem;
  flex-shrink: 0;
}

.get-started-buttons {
  display: flex;
  gap: 1rem;
  margin: 2rem 0 1rem 0;
}

.get-started-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* background: linear-gradient(to right, var(--legacy-bg-color), var(--modern-bg-color));
  padding: 3rem;
  color: white; */
  padding: 5px;
  border-radius: var(--border-radius);
  background-color: white;
}

/* .btn-large {
  padding: 0.7rem 1.2rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
} */

.cta-subtext {
  font-size: 0.9rem;
  opacity: 0.8;
}

.contact-info {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin-bottom: 3rem;
}

.contact-info h3 {
  margin-bottom: 1rem;
}

.contact-info p {
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .get-started-content {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
  
  .get-started-cta {
    padding: 2rem;
  }
}
</style>
