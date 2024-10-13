import { AddCategory } from "../../src/components/AddCategory";
import {render, screen, fireEvent} from '@testing-library/react';

describe('Tests on AddCategory component', () => {

    test('Should change the input text value', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});    //Estamos evaluando la variable onInputChange, por lo que debemos proporcionarle a su vez los parámetros que necesita recibir.
        expect(input.value).toBe('Saitama');
        // screen.debug();
    });

    test('Should call onNewCategory() and check 1. if the input has a valor 2. if the event is being executed', () => {
        const onNewCategory = jest.fn(); //Mock, simulación de una función.
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const inputValue = 'Nana';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('Should not call onNewCategory() if the input is empty', () => {
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
});