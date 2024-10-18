import React from 'react';
import {useFetch} from '../hooks';

export const MultipleCustomHooks = () => {
  const{data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/ditto');

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />
      {isLoading && <p>Cargando...</p>}
      <h2>{data?.name}</h2>
    </>
  )
}
