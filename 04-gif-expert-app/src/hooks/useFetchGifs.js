import {useState, useEffect} from 'react';
import { getGifs } from "../helpers/getGifs";

//Custom hook. Es importante que los hooks empiecen por 'use' porque es la manera
//en la que React detecta que lo son.
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //Hook para enviar efectos secundarios, es decir, procesos que queremos ejecutar cuando algo suceda.
    //En este caso queremos evitar que la petición http se lance continuamente.
    useEffect(() => {
      getImages();
    }, []);
    
    return {
        images,
        isLoading
    }
}
