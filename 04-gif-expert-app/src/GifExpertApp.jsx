//Funcional component.
import {useState} from 'react';
import {AddCategory, GifGrid} from './components/index';    //No sería necesario incluir index, porque por defecto ya busca esa ruta.

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