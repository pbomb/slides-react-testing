import { mount, render } from 'enzyme';
import * as React from 'react';
import Counter from '../counter';

test('renders enabled buttons by default', () => {
  expect(render(<Counter />)).toMatchSnapshot();
});

test('renders disabled buttons', () => {
  expect(render(<Counter disabled={true} />)).toMatchSnapshot();
});

test('increments the counter when clicking the + button', () => {
  const wrapper = mount(<Counter />);
  wrapper.find('[data-testid="increment"]').simulate('click');
  expect(wrapper.find('span[data-testid="count"]').text()).toBe('1');
});

test('decrements the counter when clicking the - button', () => {
  const wrapper = mount(<Counter />);
  wrapper.find('[data-testid="decrement"]').simulate('click');
  expect(wrapper.find('span[data-testid="count"]').text()).toBe('-1');
});
