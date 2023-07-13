import React, { useState } from 'react';
import './Dashboard.css';
import RandomPokemon from '../RandomPokemon/RandomPokemon';
import Details from '../Details/Details';


interface AllPokemonI {
  name: string,
  url: string
}

interface AbilitiesI {
  ability: AllPokemonI
  is_hidden: boolean,
  slot: number
}

interface TypesI {
  slot: number,
  type: AllPokemonI[]
}

interface MovesI {
  move: AllPokemonI
  version_group_details: any[]
}

interface CleanPokeDataI {
  abilities:  AbilitiesI[]
  id: number,
  name: string,
  types: TypesI[],
  moves: MovesI[],
  weight: number
}

interface SavedPokemonI {
  call: boolean,
  data: CleanPokeDataI,
  image: string,
  number: number,
  showDetails: boolean
}

interface DashboardProps {
  savePokemon: () => void,
  randomPokemon: SavedPokemonI,
  getNewRandomPokemon: () => void, 
  showPokemonDetails: () => void
}

const Dashboard: React.FC<DashboardProps> = ({ savePokemon, randomPokemon, getNewRandomPokemon, showPokemonDetails}) => {
  const [userName, setUserName] = useState('');

  const updateUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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