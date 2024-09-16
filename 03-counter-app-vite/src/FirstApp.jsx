// import {Fragment} from 'react';
import PropTypes from 'prop-types';

const getGretting = () => {
    return 'Hey! I am a function!'
}

const newMsg = {
    title: 'Prueba de variable en HTML.', 
    main: 'Jenn'
}

export const FirstApp = ({title, subtitle, name}) => {
    return (
        //Fragmento implícito, siempre necesario. De esta forma no necesitamos importarlo.
        <>
            <div>My first app using React. :)</div>
            <p>Yay!</p>
            <p>{JSON.stringify(newMsg)}</p>
            <p>{getGretting()}</p>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirstApp.defaultProps = {
    subtitle: 'No subtitle... and this is a string!',
    name: 'Jeeeenn'
}