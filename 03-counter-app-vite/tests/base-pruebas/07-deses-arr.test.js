import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Tests on 07-deses-arr', () => {
    test('Must return string and numer', () => {

        const [letters, numbers] = retornaArreglo();
        // expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        expect(letters).toEqual(expect.any(String));
    })
})