import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Counter, { Props, State } from '../counter';
import Display from '../display';

test('snapshots using mount', () => {
  expect(mount(<Counter />)).toMatchSnapshot();
});

test('snapshots using shallow', () => {
  expect(shallow(<Counter />)).toMatchSnapshot();
});

test('finding by components', () => {
  const wrapper = mount(<Counter />);

  const display = wrapper.find(Display);
  expect(display.text()).toBe('0');
});

test('reaching into component state', () => {
  const wrapper = mount<Props, State>(<Counter />, {});

  wrapper.find('[data-testid="increment"]').simulate('click');
  expect(wrapper.state().clicks).toBe(1);
});

test('reaching into component props', () => {
  const wrapper = mount(<Counter />);

  wrapper.find('[data-testid="increment"]').simulate('click');
  const display = wrapper.find(Display);

  expect(display.props().clicks).toBe(1);
});
