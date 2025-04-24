export function initContactForm() {
  return {
    showForm: false,
    showPolicyModal: false,
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
    },

    toggleForm() {
      this.showForm = !this.showForm;
      if (!this.showForm) {
        this.resetForm();
      }
    },

    togglePolicyModal() {
      this.showPolicyModal = !this.showPolicyModal;
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

        // 운영용(help계정 연결) - mjkydzab / 테스트용 - mqapyyrq
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
  };
} 