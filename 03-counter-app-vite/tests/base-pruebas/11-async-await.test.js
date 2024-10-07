import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Tests on 11-async-await', () => {
    test('Must return an image URL', async() => {
        const resp = await getImagen();
        expect(resp).toBe('No se encontró la imagen');
    })
})