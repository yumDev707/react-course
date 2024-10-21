import React from 'react';
import {useFetch, useCounter} from '../hooks';
import {LoadingMessage} from '../03-examples/LoadingMessage'
import { PokemonCard } from '../03-examples/PokemonCard';

export const Layout = () => {
  const {counter, increment, decrement} = useCounter(1);
  const{data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />
      {isLoading
      ? <LoadingMessage/>
      : <PokemonCard
          id={counter} //{data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny
          ]}/>}

      <button className='btn btn-primary mt-2' onClick={() => counter > 1 ? decrement() : null}>Anterior</button>
      <button className='btn btn-primary mt-2' onClick={() => increment()}>Siguiente</button>
    </>
  )
}
