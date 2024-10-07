const { render } = require("@testing-library/react");
import { FirstApp } from "../src/FirstApp";


describe('Tests on FirstApp File', () => {
    test('Should match with snapshot', () => {
        const title = "I am learning React!";
        const {container, getByText} = render(<FirstApp title={title}/>);

        expect(container).toMatchSnapshot();
        // expect(getByText(title)).toBeTruthy();
    });

    test('Should show an h1 element', () => {
        const title = "Learning!";
        const {container, getAllByText, getByTestId} = render(<FirstApp title={title}/>);

        expect(getAllByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('Should show subtitle given by props', () => {
        const title = "Learning hard!";
        const subtitle = "I am a subtitle!";
        const {getByText} = render(<FirstApp title={title} subtitle={subtitle}/>);

        expect(getByText(subtitle)).toBeTruthy();
    })
})