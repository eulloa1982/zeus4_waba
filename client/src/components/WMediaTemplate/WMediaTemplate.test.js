import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WMediaTemplate from './WMediaTemplate';

describe('<WMediaTemplate />', () => {
  test('it should mount', () => {
    render(<WMediaTemplate />);
    
    const wMediaTemplate = screen.getByTestId('WMediaTemplate');

    expect(wMediaTemplate).toBeInTheDocument();
  });
});