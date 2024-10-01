import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser must return an object', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);
    })


    test('getUsuarioActivo must return an object', () => { 
       const name = 'Fernando';
       const user = getUsuarioActivo(name);

       expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
       });
    });
})