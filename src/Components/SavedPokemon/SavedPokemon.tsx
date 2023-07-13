import React from 'react';
import './SavedPokemon.css';
import { Link } from 'react-router-dom';

const SavedPokemon = ({savedPokemon}) => {
console.log('saved', savedPokemon)

  return (
    <div className='main-saved-container'>
       <h1 className='all-pokemon-header'>My Saved Pokemon!</h1>
       <div className='saved-container'>
      {savedPokemon.map(pokemon => {
        return (
            <article key={pokemon.data.name + "b"} className='saved-pokemon'>
              <div key={pokemon.data.name} className='saved-pokemon-header'>
                <p className='pokemon-num'>{`No. ${pokemon.number}`}</p>
              </div>
              <Link to={`/allPokemon/${pokemon.number}`}>
                <img key={pokemon.data.name + "a"} src={pokemon.image} />
              </Link>
            </article>
        )})}
        </div>
    </div>
  )
}

export default SavedPokemon