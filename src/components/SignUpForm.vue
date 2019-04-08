<template>	
  <form
    id="signup_form"
    class="container sp-form"
    action="#"
    method="post"
    accept-charset="utf-8"
  >
    <div class="sp-form-innerbox">
      <h2>Hire a advisor</h2>
      <div class="container sp-form-input-box">
        <input 
          :id="advisor.id" 
          v-model="advisor.text" 
          :class="advisor.class"
          :name="advisor.name" 
          :type="advisor.type" 
          :required="advisor.required" 
          :autocomplete="advisor.autocomplete" 
          @focus="inputFocus"
          @blur="inputBlur"
        >
        <label 
          class="sp-form-input-hint" 
          for="advisor" 
          :style="advisorLbStyle"
        >Your Full Name <i class="star">*</i>
        </label>
      </div>
      <div class="container sp-form-input-box">
        <input 
          :id="email.id" 
          v-model="email.text" 
          :class="email.class"
          :name="email.name" 
          :type="email.type" 
          :required="email.required" 
          :autocomplete="email.autocomplete" 
          @focus="inputFocus"
          @blur="inputBlur"
        >
        <label 
          class="sp-form-input-hint" 
          for="email" 
          :style="emailLbStyle"
        >Your Email <i class="star">*</i>
        </label>
      </div>
      <div class="container sp-form-input-box">
        <input 
          :id="phone.id" 
          v-model="phone.text" 
          :class="phone.class"
          :name="phone.name" 
          :type="phone.type" 
          :required="phone.required" 
          :autocomplete="phone.autocomplete" 
          @focus="inputFocus"
          @blur="inputBlur"
        >
        <label 
          class="sp-form-input-hint" 
          for="phone" 
          :style="phoneLbStyle"
        >Your Phone <i class="star">*</i>
        </label>
      </div>
      <div class="container sp-form-input-box">
        <textarea 
          :id="message.id"
          v-model="message.text" 
          form="signup_form" 
          :class="message.class"
          :name="message.name" 
          :type="message.type" 
          :required="message.required" 
          @focus="inputFocus" 
          @blur="inputBlur"
        />
        <label 
          class="sp-form-input-hint" 
          for="message" 
          :style="messageLbStyle"
        >Message <i class="star">*</i>
        </label>
      </div>
      <div class="container sp-form-btn-box">
        <button
          class="btn sp-form-btn red"
          @click.prevent="submit"
        >
          SUBMIT NOW
        </button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'SignUpForm',
  data: function() {
    return {
      advisor: {
        type: 'text',
        text: '',
        id: 'advisor',
        class: 'sp-form-input',
        name: 'advisor',
        required: true,
        isActive: false,
        autocomplete: 'off'
      },
      email: {
        type: 'email',
        text: '',
        id: 'email',
        class: 'sp-form-input',
        name: 'email',
        required: true,
        isActive: false,
        autocomplete: 'off'
      },
      phone: {
        type: 'text',
        text: '',
        id: 'phone',
        class: 'sp-form-input',
        name: 'phone',
        required: true,
        isActive: false,
        autocomplete: 'off'
      },
      message: {
        type: 'text',
        text: '',
        id: 'message',
        class: 'sp-form-textarea',
        name: 'message',
        required: true,
        isActive: false,
        autocomplete: 'off'
      },
      inputFocusStyle: {
        top: '-18px',
        left: '8px',
        color: '#222',
        fontSize: '0.82rem'
      },
    };
  },
  computed: {
  	// 當輸入框active的時候轉換style內聯樣式
    advisorLbStyle() {
      if (this.advisor.isActive) return this.inputFocusStyle;

      return null;
    },
    emailLbStyle() {
      if (this.email.isActive) return this.inputFocusStyle;

      return null;
    },
    phoneLbStyle() {
      if (this.phone.isActive) return this.inputFocusStyle;

      return null;
    },
    messageLbStyle() {
      if (this.message.isActive) return this.inputFocusStyle;

      return null;
    }
  },
  methods: {
    submit() {
      alert('SUBMIT has been clicked.');
    },
    inputFocus(e) {
      let id = e.target.id;
      this[id].isActive = true;
    },
    inputBlur(e) {
      let id = e.target.id;
      if(this[id].text.length === 0){
        this[id].isActive = false;
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import '../scss/signUpForm.scss';
</style>