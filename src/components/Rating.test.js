import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
  render(<Rating />);

  test('Should render thank you message by selecting an option', () => {
    fireEvent.click(screen.getByLabelText('3'));
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Thank you!')).toHaveTextContent('Thank you!');
  });
});
