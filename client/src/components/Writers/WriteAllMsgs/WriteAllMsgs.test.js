import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WriteAllMsgs from './WriteAllMsgs';

describe('<WriteAllMsgs />', () => {
  test('it should mount', () => {
    render(<WriteAllMsgs />);
    
    const writeAllMsgs = screen.getByTestId('WriteAllMsgs');

    expect(writeAllMsgs).toBeInTheDocument();
  });
});