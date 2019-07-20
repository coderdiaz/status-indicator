import { shallowMount } from '@vue/test-utils';
import StatusIndicator from '../../packages/StatusIndicator/src/main.vue';

const vm = shallowMount(StatusIndicator);

// Helper function to create a component
const createComponent = propsData => shallowMount(StatusIndicator, { propsData });

describe('VueStatusIndicator.vue', () => {
  let cmp;
  it('has a mounted hook', () => {
    expect(typeof StatusIndicator.mounted).toBe('function');
  });

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  describe('Properties', () => {
    it('should be showed with the default color if the status prop not set', () => {
      cmp = createComponent();
      expect(cmp.vm.status).toBe('');
      expect(cmp.vm.$el.active).toBe(undefined);
    });

    it('should be showed with the active color if the status prop is set', () => {
      cmp = createComponent({ status: 'active' });
      expect(cmp.vm.status).toBe('active');
      expect(cmp.vm.$el.active).toBe('');
    });

    it('should be showed with the positive color if the status prop is set', () => {
      cmp = createComponent({ status: 'positive' });
      expect(cmp.vm.status).toBe('positive');
      expect(cmp.vm.$el.positive).toBe('');
    });

    it('should be showed with the intermediary color if the status prop is set', () => {
      cmp = createComponent({ status: 'intermediary' });
      expect(cmp.vm.status).toBe('intermediary');
      expect(cmp.vm.$el.intermediary).toBe('');
    });

    it('should be showed with the negative color if the status prop is set', () => {
      cmp = createComponent({ status: 'negative' });
      expect(cmp.vm.status).toBe('negative');
      expect(cmp.vm.$el.negative).toBe('');
    });

    it('should be showed without pulse effect when the pulse prop is false by default', () => {
      cmp = createComponent();
      expect(cmp.vm.status).toBeFalsy();
      expect(cmp.vm.$el.pulse).toBe(undefined);
    });

    it('should be showed with pulse effect when the pulse prop is false by default', () => {
      cmp = createComponent({ pulse: true });
      expect(cmp.vm.pulse).toBeTruthy();
      expect(cmp.vm.$el.pulse).toBe('');
    });
  });
});
