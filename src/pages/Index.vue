<template>
  <div>
    <Layout>
      <HeroSection />
      <IntroSection />
      <!-- <FeaturesSection /> -->
      <HowItWorksSection />
      <!-- <UsageSection /> -->
      <ComparisonSection />
      <GetStartedSection />
      <ContactSection />
    </Layout>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';
import Footer from '@/components/Footer.vue';
import HeroSection from '~/components/HeroSection.vue'
import IntroSection from '~/components/IntroSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import HowItWorksSection from '~/components/HowItWorksSection.vue'
import UsageSection from '~/components/UsageSection.vue'
import ComparisonSection from '~/components/ComparisonSection.vue'
import GetStartedSection from '~/components/GetStartedSection.vue'
import ContactSection from '~/components/ContactSection.vue'

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon,
    Footer,
    HeroSection,
    IntroSection,
    FeaturesSection,
    HowItWorksSection,
    UsageSection,
    ComparisonSection,
    GetStartedSection,
    ContactSection
  },
  metaInfo() {
    const title = 'Legacy Modernizer - 레거시 코드의 현대화';
    const description = 'Legacy Modernizer,레거시 코드의 현대화,AI 기반 미래지향적 코드 변환 솔루션, ANTLR, 그래프, 시각화, 자바전환';
    
    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        {
          key: 'keywords',
          name: 'keywords',
          content: 'intromsaez,이벤트 스토밍,EventStorming,msaeasy,MSA설계,교육,MSA강의,MSA교육,CNA,마이크로서비스,스프링부트,SpringBoot,이벤트 스토밍 강의,이벤트 스토밍 교육,쿠버네티스,컨테이너,이벤트 스토밍 설계,마이크로서비스 교육,쿠버네티스 강의,쿠버네티스 교육,스프링부트 강의,스프링부트 교육,CNA강의,CNA 강의,CNA교육,CNA 교육,객체지향 강의,객체지향 교육,CNA 구현,CNA구현,kubernetes,kubernetes 강의,kubernetes 교육'
        },
      ]
    }
  },
  // created(){
  //   this.$router.push('/started/');
  // }
}
</script>
<style>
.home-links a {
  margin-right: 1rem;
}
</style>