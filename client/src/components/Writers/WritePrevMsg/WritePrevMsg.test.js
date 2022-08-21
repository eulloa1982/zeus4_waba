import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WritePrevMsg from './WritePrevMsg';

describe('<WritePrevMsg />', () => {
  test('it should mount', () => {
    render(<WritePrevMsg />);
    
    const writePrevMsg = screen.getByTestId('WritePrevMsg');

    expect(writePrevMsg).toBeInTheDocument();
  });
});