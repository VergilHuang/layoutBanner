import { shallowMount } from '@vue/test-utils';
import SignUpForm from '@/components/SignUpForm.vue';

describe('SignUpForm.vue', () => {
  it('renders Form block passed', () => {
    const msg = {};
    const wrapper = shallowMount(SignUpForm, {
    	attachToDocument: true
    });
    expect(wrapper.contains('form')).toBe(true)
  });
});
