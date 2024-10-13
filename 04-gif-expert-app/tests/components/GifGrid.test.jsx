const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock('../../src/hooks/useFetchGifs');  //Mook completo del path.

describe('Tests on GifGrid component', () => {
    const category = 'Nana';

    test('Should show init Loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Should show items when useFetchGifs() imgs are loaded', () => { //Mook de un custom hook.
        const gifs = [
            {
                id: 'ABC',
                title: 'Nana Osaki',
                url: 'https://localhost/nanaosaki.jpg'
            },
            {
                id: 'DEF',
                title: 'Nana Komatsu',
                url: 'https://localhost/nanakomatsu.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
})