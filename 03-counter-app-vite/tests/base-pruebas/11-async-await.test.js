import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Tests on 11-async-await', () => {
    test('Must return an image URL', async() => {
        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
    })
})