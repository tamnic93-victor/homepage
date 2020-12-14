import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/BC LABS Co., Ltd./i);
  expect(linkElement).toBeInTheDocument();
});
