<template>
  <span class="status-indicator"></span>
</template>
<script>
export default {
  name: 'StatusIndicator',
  props: {
    status: {
      type: String,
      default: '',
      validator(value) {
        if (value === '') return true;
        return ['active', 'positive', 'intermediary', 'negative'].indexOf(value) !== -1;
      },
    },
    pulse: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.status !== '') this.$el[this.status] = '';
    if (this.pulse) this.$el.pulse = '';
  },
};
</script>
<style src="./status-indicator.css"></style>
