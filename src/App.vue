<template>
  <div id="app">
    <SignUpView />
  </div>
</template>

<script>
import SignUpView from './views/SignUpView.vue';

export default {
  name: 'App',
  components: {
    SignUpView
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
@import 'initialize-css';

$main_color: rgb(255,0,0);
$main_color_hover: rgb(154,22,33);

html{
  font-size:14px;
}

#app {
  font-family: Arial, 'Avenir', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

}

.container{
  position: relative;
  margin: 8px 0;
}

.btn{
  font-size: 1.25rem;
  font-weight: 500;
  border: 0;
  outline: none;
  padding: 11px 22px;
  &:hover{
    background: $main_color_hover;
  }
}
.btn-rect{
  border-radius: 4px;
}
.red{
  background: $main_color;
  color:#fff;
}
</style>
