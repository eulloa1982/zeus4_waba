import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WriteWTemplates from './WriteWTemplates';

describe('<WriteWTemplates />', () => {
  test('it should mount', () => {
    render(<WriteWTemplates />);
    
    const writeWTemplates = screen.getByTestId('WriteWTemplates');

    expect(writeWTemplates).toBeInTheDocument();
  });
});