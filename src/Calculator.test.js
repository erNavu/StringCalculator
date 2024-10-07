import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from "./Calculator"

test('renders Calculator UI', () => {
    render(<Calculator />)
    let inputBox = screen.getByRole("textbox")
    expect(inputBox).toBeInTheDocument()
})

test('calculates the sum correctly', () => {
    render(<Calculator />);

    const input = screen.getByPlaceholderText(/enter numbers here/i);
    const button = screen.getByText(/calculate/i);

    fireEvent.change(input, { target: { value: '1,2,3' } });
    fireEvent.click(button);

    expect(screen.getByText(/result: 6/i)).toBeInTheDocument();
});

test('shows error message for negative numbers', () => {
    render(<Calculator />);

    const input = screen.getByPlaceholderText(/enter numbers/i);
    const button = screen.getByText(/calculate/i);

    fireEvent.change(input, { target: { value: '1,-2,3' } });
    fireEvent.click(button);

    expect(screen.getByText(/Negative numbers not allowed/i)).toBeInTheDocument();
});


