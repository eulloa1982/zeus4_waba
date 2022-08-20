import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WriteFromPrevMsgs from './WriteFromPrevMsgs';

describe('<WriteFromPrevMsgs />', () => {
  test('it should mount', () => {
    render(<WriteFromPrevMsgs />);
    
    const writeFromPrevMsgs = screen.getByTestId('WriteFromPrevMsgs');

    expect(writeFromPrevMsgs).toBeInTheDocument();
  });
});