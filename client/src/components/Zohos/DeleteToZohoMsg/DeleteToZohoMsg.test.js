import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DeleteToZohoFromMsg from './DeleteToZohoFromMsg';

describe('<DeleteToZohoFromMsg />', () => {
  test('it should mount', () => {
    render(<DeleteToZohoFromMsg />);
    
    const deleteToZohoFromMsg = screen.getByTestId('DeleteToZohoFromMsg');

    expect(deleteToZohoFromMsg).toBeInTheDocument();
  });
});