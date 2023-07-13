import React, { useState } from 'react';
import './Dashboard.css';
import RandomPokemon from '../RandomPokemon/RandomPokemon';
import Details from '../Details/Details';

const Dashboard = ({savedPokemon, savePokemon, randomPokemon, getNewRandomPokemon, showPokemonDetails}) => {
  const [userName, setUserName] = useState('');

  const updateUsernameInput = (e) => {
    const {value} = e.target;
    setUserName(value);
  };

  return (
    <div className='dashboard-container'>
        <div className='username-container'>
          <label className='username-label' htmlFor='username'>Enter Your Name</label>
          <input className='username-input' type='text' name='username' value={userName} onChange={(e)=> {updateUsernameInput(e)}}></input>
        </div>
        <h1 className='welcome-msg'>{`Welcome, ${userName? userName : 'Pokemon Trainer'}`}!</h1>
      <main className='main-container'>
        <RandomPokemon 
        savedPokemon={savedPokemon} 
        randomPokemon={randomPokemon} 
        getNewRandomPokemon={getNewRandomPokemon}
        showPokemonDetails={showPokemonDetails}
        savePokemon={savePokemon}
        />
        {randomPokemon.showDetails && <Details randomPokemon={randomPokemon}/>}
      </main>
    </div>
  )
}

export default Dashboard