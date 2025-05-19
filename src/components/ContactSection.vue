<template>
  <section id="contact" class="contact-section">
 
    <div class="container">
      <div class="contact-info" :class="{ 'form-open': isFormOpen }">
        <div v-if="!isFormOpen">
          <h3>더 궁금한 점이 있으신가요?</h3>
          <p><b>Legacy Modernizer</b>에 대해 더 알고 싶으시거나 문의사항이 있으시면 언제든지 연락주세요.</p>
          <!-- <a href="#" class="btn btn-primary">문의하기</a> -->
          <button @click="openForm" class="btn btn-primary contact-btn">
            <span>문의하기</span>
          </button>
        </div>

        <ContactFormModal ref="contactForm" @form-toggle="handleFormToggle" />

      </div>

    </div>


  </section>
</template>

<script>
import ContactFormModal from '@/components/ContactFormModal.vue';

export default {
  name: 'GetStartedSection',
  components: {
    ContactFormModal
  },
  data() {
    return {
      isFormOpen: false
    };
  },
  methods: {
    openForm() {
      this.isFormOpen = true;
      this.$refs.contactForm.showForm = true;
    },
    handleFormToggle(isOpen) {
      this.isFormOpen = isOpen;
    }
  }
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

.btn-large {
  padding: 0.7rem 1.2rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

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
  position: relative;
  min-height: 200px;
  overflow: hidden;
  width: 100%;
  transition: min-height 0.3s ease;
}

.contact-info.form-open {
  min-height: 600px;
}

.contact-info h3 {
  margin-bottom: 1rem;
}

.contact-info p {
  margin-bottom: 1.5rem;
}

.contact-btn {
  position: relative;
  z-index: 1;
}

#contact {
  position: relative;
}

@media (max-width: 768px) {
  .contact-info.form-open {
    min-height: 800px;
  }
  
  .get-started-content {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
  
  .get-started-cta {
    padding: 2rem;
  }
}
</style>
