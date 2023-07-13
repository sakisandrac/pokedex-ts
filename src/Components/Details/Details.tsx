import React from 'react';
import './Details.css';
import { SavedPokemonI, CleanPokeDataI, AllPokemonI } from '../../Types/Types'

interface DetailsProps {
  randomPokemon: SavedPokemonI | CleanPokeDataI
}

const Details: React.FC<DetailsProps> = ({ randomPokemon }) => {
  
  const pokeData = (data: SavedPokemonI | CleanPokeDataI ): any => {
    if ("data" in data) {
      return data.data
    } else {
      return data
    }
  }

  return (
    <div className='details-container'>
      <h2 className='random-pokemon-header'>More Details</h2>
      <section className='data-container'>
        <p>Weight: {pokeData(randomPokemon).weight} kg</p>
        <ul className='abilities-header'>Moves:</ul>
        <div className='moves-container'>
          {pokeData(randomPokemon).moves?.map((move: {move: AllPokemonI}) => (<li key={move.move.name}>{move.move.name}</li>))}
        </div>
      </section>
    </div>
  )
}

export default Details