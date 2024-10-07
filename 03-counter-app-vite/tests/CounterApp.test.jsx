import { CounterApp } from "../src/CounterApp";
const { render, screen, fireEvent } = require("@testing-library/react");

describe('Tests on CounterApp File', () => {
    const value = 100;

    test('Should match with the snapshot', () => {
        const {container} = render(<CounterApp value={100}/>);
        expect(container).toMatchSnapshot();
    });

    test('Should show the initial value (100)', () => {
        render(<CounterApp value={value}/>);
        expect(screen.getByText(100)).toBeTruthy();
    });

    test('Should increase by +1 button', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(value + 1)).toBeTruthy();
    });

    test('Should decrease by -1 button', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(value - 1)).toBeTruthy();
    });

    test('Should reset the init value by Reset button', () => {
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        screen.debug();
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

        expect(screen.getByText(value)).toBeTruthy();
    });
});