import { render, Simulate } from 'react-testing-library';
import * as React from 'react';
import Counter from '../counter';

test('renders enabled buttons by default', () => {
  const { container } = render(<Counter />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders disabled buttons', () => {
  const { container } = render(<Counter disabled={true} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('increments the counter when clicking the + button', () => {
  const { container, getByText } = render(<Counter />);
  Simulate.click(getByText('+'));
  expect(container.firstChild).toMatchSnapshot();
});

test('decrements the counter when clicking the - button', () => {
  const { container, getByText } = render(<Counter />);
  Simulate.click(getByText('-'));
  expect(container.firstChild).toMatchSnapshot();
});
