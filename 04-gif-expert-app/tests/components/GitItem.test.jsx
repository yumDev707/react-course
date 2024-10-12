const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe('Testing GifItem component', () => {
    const title = 'Dragon Ball';
    const url = 'http://test.es/';

    test('Eval snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Should show the image with the given url and alt', () => {
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        const {src, alt} =screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Should show the title', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})