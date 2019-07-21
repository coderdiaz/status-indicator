<template>
  <span class="status-indicator" :[status]="true" :pulse="pulse"></span>
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
};
</script>
<style src="./status-indicator.css"></style>
