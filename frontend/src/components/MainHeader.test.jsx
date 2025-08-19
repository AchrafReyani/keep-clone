import React from 'react';
import { render, screen } from '@testing-library/react';
import MainHeader from './MainHeader';

test('renders MainHeader component', () => {
    render(<MainHeader />);
    const headerElement = screen.getByText(/main header/i);
    expect(headerElement).toBeInTheDocument();
});