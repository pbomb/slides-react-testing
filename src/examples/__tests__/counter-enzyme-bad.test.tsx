import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Counter, { Display, Props, State } from '../counter';

test('renders enabled buttons (mount)', () => {
  expect(mount(<Counter />)).toMatchSnapshot();
});

test('renders disabled buttons (shallow)', () => {
  expect(shallow(<Counter disabled={true} />)).toMatchSnapshot();
});

test('finding by components', () => {
  const wrapper = mount(<Counter />);

  const display = wrapper.find(Display);
  expect(display.text()).toBe('0');
});

test('reaching into component state', () => {
  const wrapper = mount<Props, State>(<Counter />);

  wrapper.find('[data-testid="increment"]').simulate('click');
  expect(wrapper.state().clicks).toBe(1);
});

test('reaching into component props', () => {
  const wrapper = mount(<Counter />);

  wrapper.find('[data-testid="increment"]').simulate('click');
  const display = wrapper.find(Display);

  expect(display.props().clicks).toBe(1);
});

test('decrements the counter when clicking the - button', () => {
  const wrapper = mount(<Counter />);

  // @ts-ignore
  wrapper.instance().handleDecrement();
  wrapper.update();
  const display = wrapper.find(Display);

  expect(display.text()).toBe('-1');
});
