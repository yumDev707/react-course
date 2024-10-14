import { useEffect, useState } from "react";
export const Message = () => {

  const  [coords, setCoords] = useState({x: 0, y: 0});

  useEffect(() => {

    const onMouseMove = ({x, y}) => {
      setCoords({x, y});
    }

    window.addEventListener('mousemove', onMouseMove); //El evento sigue lanzando listeners, lo cual es un gran problema.
  
    return () => {
      window.removeEventListener('mousemove', onMouseMove); //De ahí la necesidad de limpiar el evento.
    }
  }, [])
  

  return (
    <>
        <hr />
        <h3>Usuario ya existente.</h3>
        {JSON.stringify(coords)}
    </>
  )
}
