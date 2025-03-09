//Funcional component.
import {useState} from 'react';
import {AddCategory, GifGrid, Navbar} from './components/index';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Spy x Family']);  //Init.

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);    //Hacemos una copia del array e insertamos el nuevo valor.
    };

    return(
        <>
            <Navbar />

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