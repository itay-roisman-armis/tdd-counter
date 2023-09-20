import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders without crashing', () => {
  const { getByText } = render(<Counter />);
  const countText = getByText(/Count/i);
  expect(countText).toBeInTheDocument();
});

test('initializes with a count of 0', () => {
  const { getByText } = render(<Counter />);
  const countText = getByText(/Count: 0/i);
  expect(countText).toBeInTheDocument();
});

test('increments the count when the button is clicked', () => {
  const { getByText, getByRole } = render(<Counter />);
  const incrementButton = getByRole('button', { name: /Increment/i });
  const countText = getByText(/Count: 0/i);

  fireEvent.click(incrementButton);

  expect(countText).toHaveTextContent('Count: 1');
});
