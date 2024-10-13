import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from '@testing-library/react';

describe('Tests on useFetchGifs hook', () => {

    test('Should return init state', () => {
        const {result} = renderHook(() => useFetchGifs('Nana'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Should return an imgs array and isLoading in false', async() => {
        const {result} = renderHook(() => useFetchGifs('Nana'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const {images, isLoading} = result.current; 
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});