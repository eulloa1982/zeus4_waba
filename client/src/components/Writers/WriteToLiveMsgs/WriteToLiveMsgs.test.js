import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WriteToLiveMsgs from './WriteToLiveMsgs';

describe('<WriteToLiveMsgs />', () => {
  test('it should mount', () => {
    render(<WriteToLiveMsgs />);
    
    const writeToLiveMsgs = screen.getByTestId('WriteToLiveMsgs');

    expect(writeToLiveMsgs).toBeInTheDocument();
  });
});