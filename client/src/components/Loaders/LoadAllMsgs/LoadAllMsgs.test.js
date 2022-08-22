import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadAllMsgs from './LoadAllMsgs';

describe('<LoadAllMsgs />', () => {
  test('it should mount', () => {
    render(<LoadAllMsgs />);
    
    const loadAllMsgs = screen.getByTestId('LoadAllMsgs');

    expect(loadAllMsgs).toBeInTheDocument();
  });
});