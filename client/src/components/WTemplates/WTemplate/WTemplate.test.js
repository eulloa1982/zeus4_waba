import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WTemplate from './WTemplate';

describe('<WTemplate />', () => {
  test('it should mount', () => {
    render(<WTemplate />);
    
    const wTemplate = screen.getByTestId('WTemplate');

    expect(wTemplate).toBeInTheDocument();
  });
});