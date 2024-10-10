import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {   //Desestructuramos del event, que viene por defecto sin necesidad de pasarlo por parámetro.
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //Evitar refresco de página.
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;   //Comprobación de que se ha escrito algo en el input.
        onNewCategory(newInputValue);
        setInputValue('');  //Vaciamos el input.
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
