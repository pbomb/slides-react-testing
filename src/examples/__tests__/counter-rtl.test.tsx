import { render, fireEvent } from 'react-testing-library';
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
  const { container, getByText, getByTestId } = render(<Counter />);
  fireEvent.click(getByText('+'));

  expect(getByTestId('count').textContent).toBe('1');
  expect(container.firstChild).toMatchSnapshot();
});

test('decrements the counter when clicking the - button', () => {
  const { container, getByText, getByTestId } = render(<Counter />);
  fireEvent.click(getByText('-'));

  expect(getByTestId('count').textContent).toBe('-1');
  expect(container.firstChild).toMatchSnapshot();
});
