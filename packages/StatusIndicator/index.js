import StatusIndicator from './src/main.vue';

StatusIndicator.install = (Vue) => {
  Vue.component(StatusIndicator.name, StatusIndicator);
};

export default StatusIndicator;
