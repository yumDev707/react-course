import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Tests on 02-template-string', () => {
    test('getSaludo must return string', () => {
        const name = 'Fernando';
        const message = getSaludo('Fernando');
        expect(message).toBe(`Hola ${name}`);
    });
});