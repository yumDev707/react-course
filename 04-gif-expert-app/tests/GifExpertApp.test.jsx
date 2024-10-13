import { GifExpertApp } from "../src/GifExpertApp";
import { render, screen } from '@testing-library/react';

describe('Tests on GifExpertApp', () => {
    test('Should first', () => {
        //TODO: testing.
        render(<GifExpertApp/>);
        screen.debug();
    });
})