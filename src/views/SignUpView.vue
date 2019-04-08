<template>
  <div class="sp-box">
    <div class="container">
      <div class="sp-msg-box">
        <div class="sp-msg">
          <p class="sp-msg-ecgm">
            {{ msg.encouragement }}
          </p>
          <h1 class="sp-msg-wel">
            {{ msg.welcome }}
          </h1>
          <p class="sp-msg-dt">
            {{ msg.detail }}
          </p>
          <div class="container sp-msg-btn">
            <button 
              type="button" 
              class="btn btn-rect red"
              @click="getStarted"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div class="sp-form-box">
        <SignUpForm />
      </div>
    </div>
  </div>
</template>
<script>
import SignUpForm from '../components/SignUpForm.vue';

export default {
  name: 'SignUpView',
  components: {
    SignUpForm
  },
  data: function() {
    return {
      msg: {
        encouragement: 'Are you ready for a Leap?',
        welcome: 'Welcome to Blackwell Global',
        detail: 'Would you like to trade in the world\'s most liquid market? The Forex market offers more liquidity than any other global findncial market. It operates twenty four hours a day five days per week, with a turnover of up to US$ 5 trillion daily.'
      }
    };
  },
  methods: {
    getStarted() {
      alert('GET STARTED has been clicked.');
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../scss/signUpView.scss';
</style>