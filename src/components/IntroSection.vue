<template>
  <section id="intro" class="intro-section section">
    <div class="container">
      <h2 class="section-title">왜 시스템 현대화가 필요할까요?</h2>
      <div class="intro-content grid-2">
        <div class="intro-item legacy-item">
          <h3>레거시 시스템의 한계</h3>
          <div class="intro-icon">
            <div class="legacy-icon"></div>
          </div>
          <p>오래된 브라운관 TV처럼, 레거시 코드는 제한된 기능과 복잡한 유지보수로 인해 비즈니스 성장을 방해합니다. 스토어드 프로시저와 같은 레거시 코드는 이해하기 어렵고, 수정이 어려우며, 확장성이 떨어집니다.</p>
          <ul>
            <li>✔ 복잡한 코드 구조로 인한 유지보수 어려움</li>
            <li>✔ 기술 부채 증가와 개발 속도 저하</li>
            <li>✔ 새로운 기능 추가의 어려움</li>
            <li>✔ 전문 인력 확보의 어려움</li>
          </ul>
        </div>
        <div class="intro-item modern-item">
          <h3>현대적 시스템의 장점</h3>
          <div class="intro-icon">
            <div class="modern-icon"></div>
            <div class="wifi-icon"></div>
          </div>
          <p>스마트 TV처럼, 현대적인 코드 구조는 다양한 기능과 쉬운 확장성을 제공합니다. 객체 지향 설계와 도메인 주도 개발 방식은 코드의 가독성을 높이고 유지보수를 용이하게 만듭니다.</p>
          <ul>
            <li>✔ 명확한 코드 구조와 쉬운 유지보수</li>
            <li>✔ 빠른 개발 속도와 효율적인 협업</li>
            <li>✔ 확장성과 유연성 향상</li>
            <li>✔ 최신 기술 활용으로 경쟁력 강화</li>
          </ul>
        </div>
      </div>
      <div class="intro-solution">
        <h3>Legacy Modernizer가 해결합니다</h3>
        <p>Legacy Modernizer는 복잡한 레거시 코드를 AI 기술을 활용하여 현대적이고 유지보수가 쉬운 자바 코드로 자동 변환합니다.
           <br>마치 브라운관 TV에서 스마트 TV로 업그레이드하는 것처럼, 여러분의 시스템도 현대화할 수 있습니다.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroSection'
}
</script>

<style scoped>
.intro-section {
  margin-top: 2rem;
}
.intro-content {
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  align-items: stretch;
}

.intro-item {
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.intro-item:hover {
  transform: translateY(-5px);
}

.intro-item h3 {
  /* margin-bottom: 1rem; */
}

.intro-item p {
  margin-bottom: 1rem;
  flex-grow: 1;
}

.intro-icon {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.intro-item ul {
  /* margin-top: 1rem; */
  flex-shrink: 0;
}

.legacy-item {
  background-color: var(--legacy-bg-color);
  color: white;
}

.modern-item {
  background-color: var(--middle-bg-color);
  color: white;
}

.legacy-icon {
  width: 80px;
  height: 80px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm0 13H4V8h16v11z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.modern-icon {
  width: 80px;
  height: 80px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm0 13H4V8h16v11zM8 16h8v2H8z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.wifi-icon {
  width: 80px;
  height: 80px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M13.414 19.412a1.994 1.994 0 0 0 0-2.826a1.994 1.994 0 0 0-2.828-.002a2 2 0 1 0 2.828 2.828m7.071-7.897a2 2 0 0 1-1.414-.586c-3.899-3.899-10.243-3.898-14.143 0A2 2 0 0 1 2.099 8.1c5.459-5.458 14.341-5.458 19.799 0a2 2 0 0 1-1.413 3.415M7.757 15.757a2 2 0 0 1-1.414-3.414c3.118-3.119 8.194-3.119 11.313 0a2 2 0 0 1-2.829 2.829a4.005 4.005 0 0 0-5.657 0a2 2 0 0 1-1.413.585"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.intro-solution {
  /* background-color: white; */
  padding: 2rem;
  border-radius: var(--border-radius);
  /* box-shadow: var(--box-shadow); */
  text-align: center;

  background: linear-gradient(to right, var(--legacy-bg-color), var(--modern-bg-color));
  color: white;
}

@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .intro-item {
    margin-bottom: 0;
  }

}

@media (max-width: 576px) {
  
}
</style>
