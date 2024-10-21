import { useEffect, useState } from "react";
import { Message } from './Message';

export const SimpleForm = () => {

    const[formState, setFormState] = useState({
        username: 'Jennifer',
        email: 'jennifer@gmail.com'
    });

    const {username, email} = formState;

    //Necesitamos una función que nos permita realizar el cambio de los inputs.
    const onInputChange = ({target}) => {
       const {name, value} = target;
       setFormState({
            ...formState,   //Desestructuramos para mantener los valores del formulario.
            [name]: value   //Propiedades computadas de objetos, seleccioinamos la prop y su nuevo valor.
       });
    }

    useEffect(() => {
        console.log('useEffect called!');
    }, []);

    useEffect(() => {
        console.log('formState called!');
    }, [formState]);

    useEffect(() => {
        console.log('Email called!');
    }, [formState.email]);

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input type="text" className="form-control" placeholder="username" name="username" 
        value={username}
        onChange={onInputChange}/>
        <input type="email" className="form-control mt-2" placeholder="jenn@gmail.com" name="email" 
        value={email}
        onChange={onInputChange}/>

        {
            (username === 'Jennifer2') && <Message />
        }
    </>
  )
}
