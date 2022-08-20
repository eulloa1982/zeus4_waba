import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WTemplateBoard from './WTemplateBoard';

describe('<WTemplateBoard />', () => {
  test('it should mount', () => {
    render(<WTemplateBoard />);
    
    const wTemplateBoard = screen.getByTestId('WTemplateBoard');

    expect(wTemplateBoard).toBeInTheDocument();
  });
});