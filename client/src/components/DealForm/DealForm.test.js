import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DealForm from './DealForm';

describe('<DealForm />', () => {
  test('it should mount', () => {
    render(<DealForm />);
    
    const dealForm = screen.getByTestId('DealForm');

    expect(dealForm).toBeInTheDocument();
  });
});