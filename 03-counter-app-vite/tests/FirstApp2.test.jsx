const { render, screen } = require("@testing-library/react");
import { FirstApp } from "../src/FirstApp";


describe('Tests on FirstApp File', () => {
    const title = "Hey! I am Jenn."
    const subtitle = "I am a subtitle!";

    test('Should do match with snapshot', () => {
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });

    test('Should show a message', () => {
        render(<FirstApp title={title}/>);
        // screen.debug();
        expect(screen.getAllByText(title)).toBeTruthy();
    })

    test('Should show an h1 title', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    })

    test('Should show the subtitle given by props', () => {
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect(screen.getAllByText(subtitle).length).toBe(1);
    })
})