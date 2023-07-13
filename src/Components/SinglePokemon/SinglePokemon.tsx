import React, { useEffect, useState } from 'react';
import './SinglePokemon.css';
import { Link, useParams } from 'react-router-dom';
import { getSinglePokemon } from '../../apiCalls';
import { capitalizeName } from '../../utils';
import Details from '../Details/Details';

const SinglePokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({})
  
  useEffect(() => {
    getSinglePokemon(id).then(data => {
      console.log('in single', data)
      setPokemon(data)
    })
  }, [])

  return (
    <section className='main-pokemon-container'>
      <div className='single-pokemon-container'>
        <div className='img-container'>
          <section className='img-pokemon'>
            <img className='pokemon-img' alt={`image of pokemon ${pokemon.name}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
          </section>
        </div>
        <section className='data-container'>
          {pokemon.name && <p className='pokemon-name-single'>{capitalizeName(pokemon.name)}</p>}
          <div className='abilities-container'>
            <ul className='abilities-header'>Abilities:</ul>
            {pokemon.abilities?.map(ability => (<li key={ability.ability.name}>{ability.ability.name}</li>))}
          </div>
          <div className='types-container'>
            <ul className='types-header'>Types:</ul>
            {pokemon.types?.map(type => (<li key={type.type.name}>{type.type.name}</li>))}
          </div>
        </section>
      </div>
      <section className='single-details-container'>
        <Details randomPokemon={pokemon} />
        <Link to='/saved'>
          <button className='btn'>Return to My Saved Pokemon</button>
        </Link>
      </section>
    </section>
  )
}

export default SinglePokemon