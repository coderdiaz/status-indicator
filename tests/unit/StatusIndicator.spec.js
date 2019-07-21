import { shallowMount } from '@vue/test-utils';
import StatusIndicator from '../../packages/StatusIndicator/src/main.vue';

const vm = shallowMount(StatusIndicator);

// Helper function to create a component
const createComponent = propsData => shallowMount(StatusIndicator, { propsData });

describe('VueStatusIndicator.vue', () => {
  let cmp;
  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  describe('Properties', () => {
    it('should be showed with the default color if the status prop not set', () => {
      cmp = createComponent();
      expect(cmp.vm.status).toBe('');
      expect(cmp.vm.pulse).toBeFalsy();
      expect(cmp.vm.$el.hasAttribute('status')).toBeFalsy();
      expect(cmp.vm.$el.hasAttribute('pulse')).toBeFalsy();
    });

    it('should be showed with the positive color if the status prop is set', () => {
      cmp = createComponent({ status: 'active' });
      expect(cmp.vm.status).toBe('active');
      expect(cmp.vm.pulse).toBeFalsy();
      expect(cmp.vm.$el.hasAttribute('active')).toBeTruthy();
      expect(cmp.vm.$el.hasAttribute('pulse')).toBeFalsy();
    });

    it('should be showed with the positive color if the status prop is set', () => {
      cmp = createComponent({ status: 'positive' });
      expect(cmp.vm.status).toBe('positive');
      expect(cmp.vm.pulse).toBeFalsy();
      expect(cmp.vm.$el.hasAttribute('positive')).toBeTruthy();
      expect(cmp.vm.$el.hasAttribute('pulse')).toBeFalsy();
    });

    it('should be showed with the intermediary color if the status prop is set', () => {
      cmp = createComponent({ status: 'intermediary' });
      expect(cmp.vm.status).toBe('intermediary');
      expect(cmp.vm.pulse).toBeFalsy();
      expect(cmp.vm.$el.hasAttribute('intermediary')).toBeTruthy();
      expect(cmp.vm.$el.hasAttribute('pulse')).toBeFalsy();
    });

    it('should be showed with the negative color if the status prop is set', () => {
      cmp = createComponent({ status: 'negative' });
      expect(cmp.vm.status).toBe('negative');
      expect(cmp.vm.pulse).toBeFalsy();
      expect(cmp.vm.$el.hasAttribute('negative')).toBeTruthy();
      expect(cmp.vm.$el.hasAttribute('pulse')).toBeFalsy();
    });

    it('should be showed without pulse effect when the pulse prop is false by default', () => {
      cmp = createComponent();
      expect(cmp.vm.status).toBe('');
      expect(cmp.vm.pulse).toBeFalsy();
      expect(cmp.vm.$el.hasAttribute('pulse')).toBeFalsy();
    });

    it('should be showed with pulse effect when the pulse prop is false by default', () => {
      cmp = createComponent({ pulse: true });
      expect(cmp.vm.status).toBe('');
      expect(cmp.vm.pulse).toBeTruthy();
      expect(cmp.vm.$el.hasAttribute('pulse')).toBeTruthy();
    });
  });
});
