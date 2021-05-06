import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
/*const InputWithButton = () => {
  const { inputValue, setInputValue } = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);
  return (
    <>
      <input value={inputValue} onChange={handleInputChange} name="Name" id="name" placeholder="Enter your name" />
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe('Input With Button', () => {
  it('Renders the component', () => {
    render(<InputWithButton />);
    screen.getByText('Submit');
  });
  it('Properly handles value change', () => {
    render(<InputWithButton />);
    const input = screen.getByPlaceholderText('Enter your name');
    const button = screen.getByText('Submit');
    expect(button).toBeDisabled();
    fireEvent.change(input, { target: { value: 'Marek' } });
    expect(input).toHaveValue('Marek');
    expect(button).not.toBeDisabled();
  });
});*/
describe('FormField', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
