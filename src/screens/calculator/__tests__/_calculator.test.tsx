import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import CalculatorScreen from '../calculator';

describe('CalculatorScreen', () => {
  it('shows required validation errors when inputs are empty', async () => {
    const {getByTestId} = render(<CalculatorScreen />);

    const addButton = getByTestId('add-numbers-button');

    // Press the add button without entering anything
    act(() => {
      fireEvent.press(addButton);
    });

    await waitFor(() => {
      // Both fields are required

      expect(getByTestId('input-error-inputOne')).toHaveTextContent(
        'Please enter a valid number!',
      );

      expect(getByTestId('input-error-inputTwo')).toHaveTextContent(
        'Please enter a valid number!',
      );
    });
  });

  it('shows invalid-number error for non-numeric input', async () => {
    const {getByTestId, queryByTestId} = render(<CalculatorScreen />);

    const inputOne = getByTestId('text-input-inputOne');
    const inputTwo = getByTestId('text-input-inputTwo');
    const addButton = getByTestId('add-numbers-button');

    act(() => {
      fireEvent.changeText(inputOne, 'abc');
      fireEvent.changeText(inputTwo, '5');
      fireEvent.press(addButton);
    });

    await waitFor(() => {
      // First input shows invalid-number error
      expect(getByTestId('input-error-inputOne')).toHaveTextContent(
        'Please enter a valid number!',
      );

      // Second input has no error
      expect(queryByTestId('input-error-inputTwo')).toBeNull();
    });
  });

  it('calculates and displays the sum when inputs are valid', async () => {
    const {getByTestId, queryByTestId} = render(<CalculatorScreen />);

    const inputOne = getByTestId('text-input-inputOne');
    const inputTwo = getByTestId('text-input-inputTwo');
    const addButton = getByTestId('add-numbers-button');

    // Enter valid numbers
    act(() => {
      fireEvent.changeText(inputOne, '3');
      fireEvent.changeText(inputTwo, '7');
      fireEvent.press(addButton);
    });

    await waitFor(() => {
      // Valid results
      expect(getByTestId('total-value')).toHaveTextContent('10');

      // No more validation errors
      expect(queryByTestId('input-error-inputOne')).toBeNull();
      expect(queryByTestId('input-error-inputTwo')).toBeNull();
    });
  });
});
