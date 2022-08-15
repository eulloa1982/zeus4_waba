import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReadToPrevMsgs from './WriteToPrevMsgs';

describe('<ReadToPrevMsgs />', () => {
  test('it should mount', () => {
    render(<ReadToPrevMsgs />);
    
    const readToPrevMsgs = screen.getByTestId('ReadToPrevMsgs');

    expect(readToPrevMsgs).toBeInTheDocument();
  });
});