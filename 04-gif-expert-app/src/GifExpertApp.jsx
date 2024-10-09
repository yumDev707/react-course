//Funcional component.
import {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Spy x Family']);  //Init.

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);    //Hacemos una copia del array e insertamos el nuevo valor.
    };

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {categories.map(category => (
                    <GifGrid key={category} category={category} />
                )
            )}
        </>
    )
}