const { render } = require("@testing-library/react");
import { FirstApp } from "../src/FirstApp";


describe('Tests on FirstApp File', () => {
    test('Should match with snapshot, and show an h1 element', () => {
        const title = "I am learning React!";
        const {container, getByText} = render(<FirstApp title={title}/>);

        // expect(container).toMatchSnapshot();
        // expect(getByText(title)).toBeTruthy();
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
    })
})