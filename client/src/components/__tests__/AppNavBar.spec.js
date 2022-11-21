import {
  describe, it, expect, beforeAll,
} from 'vitest';

import { mount } from '@vue/test-utils';
import AppNavBar from '../AppNavBar.vue';

let wrapper;

describe('AppNavBar', () => {
  describe('with left slot', () => {
    beforeAll(() => {
      wrapper = mount(AppNavBar, {
        slots: {
          left: '<p>Some text</p>',
        },
      });
    });

    it('renders properly', () => {
      expect(wrapper.find('p').text()).toContain('Some text');
    });
  });
});
