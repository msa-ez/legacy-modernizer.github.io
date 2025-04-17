<template>
  <div>
    <!-- 문의하기 모달 -->
    <div v-if="showForm" class="fixed z-[9999]">
      <div class="relative w-full max-w-2xl p-6 mx-4 bg-white rounded-lg shadow-xl">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">문의하기</h2>
          <button @click="toggleForm" class="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full" style="margin-top: -10px;">
            <XIcon size="1.5x" />
          </button>
        </div>
        <form id="modal-contact-form" @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">이름</label>
            <input v-model="formData.name" type="text" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ui-primary">
          </div>
          <div class="my-2">
            <label class="block mb-1 font-medium">이메일</label>
            <input v-model="formData.email" type="email" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ui-primary">
          </div>
          <div>
            <label class="block mb-1 font-medium">문의내용</label>
            <textarea v-model="formData.message" required rows="4" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ui-primary" style="resize: none;"></textarea>
          </div>
          <div class="flex items-center my-2">
            <input v-model="policyAgreed" type="checkbox" required class="mr-2">
            <span class="text-sm">
              <a href="#" @click.prevent="showPrivacyPolicy = true" class="text-ui-primary hover:underline">개인정보 수집 및 이용</a>에 동의합니다.
            </span>
          </div>
          <button type="submit" class="w-full px-4 py-2 font-bold text-white rounded-lg bg-ui-primary hover:bg-ui-primary-dark">
            문의하기
          </button>
        </form>
      </div>
    </div>

    <!-- 개인정보 모달 -->
    <div v-if="showPrivacyPolicy" class="fixed z-[10000]">
      <div class="relative p-6 bg-white rounded-lg shadow-xl" style="max-width: 21rem; margin-top: 20px;">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">개인정보 수집 및 이용 동의</h2>
          <button @click="showPrivacyPolicy = false" class="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full" style="margin-top: -10px;">
            <XIcon size="1.5x" />
          </button>
        </div>
        <div class="prose max-w-none">
            유엔진솔루션즈(이하 "회사")가 문의하신 내용에 대한 답변을 제공하기 위해 개인정보를 수집·이용하고자 하는 경우에는 ｢개인정보 보호법｣등 관계 법령에 따라 본인의 동의가 필요합니다. 
            <br>회사 제품 구매 및 컨설팅 문의 응답, 회사가 제공하는 서비스 이용과정을 위한 최소한의 개인정보를 수집하고 이용합니다.
            <br>수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료될 경우 즉시 파기됩니다.
        </div>
        <div class="flex justify-end mt-4">
          <button @click="showPrivacyPolicy = false" class="px-4 py-2 font-bold text-white rounded-lg bg-ui-primary hover:bg-ui-primary-dark">
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
  components: {
    XIcon
  },
  data() {
    return {
      showForm: false,
      showPrivacyPolicy: false,
      formData: {
        name: '',
        email: '',
        message: ''
      },
      policyAgreed: false,
      policyError: '',
      fieldErrors: {
        name: false,
        email: false,
        message: false
      }
    };
  },

  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
      if (!this.showForm) {
        this.resetForm();
      }
    },

    validateField(field) {
      this.fieldErrors[field] = !this.formData[field].trim();
      return !this.fieldErrors[field];
    },

    validateForm() {
      let isValid = true;
      const requiredFields = ['name', 'email', 'message'];

      requiredFields.forEach(field => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      if (!this.policyAgreed) {
        this.policyError = '개인정보 수집 및 이용에 동의해주세요.';
        isValid = false;
      } else {
        this.policyError = '';
      }

      return isValid;
    },

    async submitForm() {
      if (!this.validateForm()) {
        return;
      }

      try {
        const formData = new FormData();
        Object.entries(this.formData).forEach(([key, value]) => {
          formData.append(key, value);
        });

        // 테스트 - mqapyyrq / 치윤씨 메일 연결(운영용) - mjkydzab
        const response = await fetch('https://formspree.io/f/mjkydzab', { 
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert('문의가 성공적으로 전송되었습니다.');
          this.resetForm();
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    },

    resetForm() {
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      this.policyAgreed = false;
      this.policyError = '';
      this.fieldErrors = {
        name: false,
        email: false,
        message: false
      };
      this.showForm = false;
    }
  }
};
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 100px;
  right: 20px;
  transform: translateY(0);
}

button {
  transition: all 0.2s ease-in-out;
}
</style> 