/* eslint-disable */
new Vue({
  el: '#app',
  data: {
    pulse: false,
  },
  methods: {
    toggleEffect() {
      this.pulse = !this.pulse;
    },
  },
});
