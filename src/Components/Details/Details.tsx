import React from 'react';
import './Details.css';

const Details = ({randomPokemon}) => {
  
  const pokeData = (data) => {
    if (data.data) {
      return data.data
    } else {
      return data
    }
  }

  return (
    <div className='details-container'>
      <h2 className='random-pokemon-header'>More Details</h2>
      <section className='data-container'>
        <p>Base Experience: {pokeData(randomPokemon).base_experience}</p>
        <p>Weight: {pokeData(randomPokemon).weight} kg</p>
        <ul className='abilities-header'>Moves:</ul>
        <div className='moves-container'>
          {pokeData(randomPokemon).moves?.map(move => (<li key={move.move.name}>{move.move.name}</li>))}
        </div>
      </section>
    </div>
  )
}

export default Details