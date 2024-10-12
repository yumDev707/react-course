import { AddCategory } from "../../src/components/AddCategory";
import {render, screen, fireEvent} from '@testing-library/react';

describe('Tests on AddCategory component', () => {

    test('Should change the input text value', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});    //Estamos evaluando la variable onInputChange, por lo que debemos proporcionarle a su vez los parámetros que necesita recibir.
        expect(input.value).toBe('Saitama');
        screen.debug();
    });
});