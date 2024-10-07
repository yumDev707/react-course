import PropTypes, { func } from 'prop-types';
import {useState} from 'react';

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value); //Hook. Desestructuración de lo que retorna la función, que inicializamos en 0.
    
    const handleAdd = (event, string) => { 
        // console.log(string, '+1');
        setCounter(counter + 1);
    }

    const handleLess = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            {/* <h2>{value}</h2> */}
            <h2 data-testid="init-val">{counter}</h2>

            <button onClick={(event) => handleAdd(event, 'Hey!')}>
                Click me!
            </button>

            <div class="button-container">
                <button onClick={(event) => handleAdd(event, 'Hey!')}>+1</button>
                <button onClick={handleLess}>-1</button>
                <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}