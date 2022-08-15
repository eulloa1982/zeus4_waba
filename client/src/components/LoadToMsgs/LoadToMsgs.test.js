import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadToMsgs from './LoadToMsgs';

describe('<LoadToMsgs />', () => {
  test('it should mount', () => {
    render(<LoadToMsgs />);
    
    const loadToMsgs = screen.getByTestId('LoadToMsgs');

    expect(loadToMsgs).toBeInTheDocument();
  });
});