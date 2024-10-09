import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import {GifItem} from './GifItem';

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

    //Hook para enviar efectos secundarios, es decir, procesos que queremos ejecutar cuando algo suceda.
    //En este caso queremos evitar que la petición http se lance continuamente.
    useEffect(() => {
      getImages();
    }, []);
    

  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
            {images.map((img) => (
              <GifItem key={img.id} {...img}/>
            ))}
        </div>
    </>
  )
}
