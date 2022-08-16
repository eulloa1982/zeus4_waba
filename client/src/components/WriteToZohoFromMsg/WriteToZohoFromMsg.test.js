import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WriteToZoho from './WriteToZohoFromMsg';

describe('<WriteToZoho />', () => {
  test('it should mount', () => {
    render(<WriteToZoho />);
    
    const writeToZoho = screen.getByTestId('WriteToZoho');

    expect(writeToZoho).toBeInTheDocument();
  });
});