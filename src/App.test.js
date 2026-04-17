// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MEVBot title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MEVBot/i);
    expect(titleElement).toBeInTheDocument();
});
