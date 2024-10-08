//Funcional component.
import {useState} from 'react';
import {AddCategory} from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Frieren']);  //Init.

    const onAddCategory = (newCategory) => {
        setCategories([ ...categories, newCategory]);    //Hacemos una copia del array e insertamos el nuevo valor.
    };

    return(
        <>
            {/* {Title} */}
            <h1>GifExpertApp</h1>

            {/* {Input} */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {/* {Gifs list} */}
            <ul>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ul>
            
            {/* {Gif item} */}
        </>
    )
}