<<<<<<< HEAD
import {render, screen} from '@testing-library/react';
=======
import React from 'react'
import { render, screen } from '@testing-library/react';
>>>>>>> a3
import App from './App';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
<<<<<<< HEAD
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
=======
  render(<App />);
  const linkElement = screen.getByText(/Home Screen/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> a3
});
