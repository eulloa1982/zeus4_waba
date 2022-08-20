import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadFromMsgs from './LoadFromMsgs';

describe('<LoadFromMsgs />', () => {
  test('it should mount', () => {
    render(<LoadFromMsgs />);
    
    const loadFromMsgs = screen.getByTestId('LoadFromMsgs');

    expect(loadFromMsgs).toBeInTheDocument();
  });
});