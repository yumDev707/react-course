describe('Tests on <DemoComponent />', () => {
    test('Esta prueba no debe fallar.', () => {
        //1. Inicialización.
        const message = 'Hello World!';
    
        //2. Estímulo.
        const message2 = message.trim();
    
        //3. Condición y observación del comportamiento.
        expect(message).toBe(message2);
    });
});