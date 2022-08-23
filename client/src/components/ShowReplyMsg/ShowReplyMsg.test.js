import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShowReplyMsg from './ShowReplyMsg';

describe('<ShowReplyMsg />', () => {
  test('it should mount', () => {
    render(<ShowReplyMsg />);
    
    const showReplyMsg = screen.getByTestId('ShowReplyMsg');

    expect(showReplyMsg).toBeInTheDocument();
  });
});