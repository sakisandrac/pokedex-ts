import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import SavedPokemon from './Components/SavedPokemon/SavedPokemon';
import { useState } from 'react';
import { getSinglePokemon } from './apiCalls';
import { getRandomNum, cleanUpData } from './utils';
import { useEffect } from 'react';
import AllPokemon from './Components/AllPokemon/AllPokemon';
import SinglePokemon from './Components/SinglePokemon/SinglePokemon';

interface RandPokemonI {
  number: string,
  data: PokeDataI,
  image: string,
  call: boolean,
  showDetails: boolean
}

interface PokeDataI {
  abilities: any[],
  id: number,
  name: string,
  types: any[],
  moves: any[],
  weight: number
}

function App() {

  const [savedPokemon, setSavedPokemon] = useState([]);

  const [randomPokemon, setRandomPokemon] = useState({
    number: "",
    data: {name: "loading"},
    image: "",
    call: true,
    showDetails: false
  });

  useEffect(() => {
    const num = getRandomNum();

    getSinglePokemon(num)
    .then(data => {
      console.log(data)
      setRandomPokemon(prev => {
        return {
          ...prev,
          number: data.number,
          data: data,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`
        }
      })
    })
    .catch(err => console.log("error", err))
  }, [randomPokemon.call]);


  const savePokemon = () => {
    setSavedPokemon(prev => {
      if(!prev.some(pokemon => pokemon.number === randomPokemon.number)) {
      return [...prev, randomPokemon]
      } else {
        return prev
      }
    })
  }

  const getNewRandomPokemon = () => {
    setRandomPokemon(prev => {
      return {
        ...prev,
        call: !prev.call
      }
    });
  }

  const showPokemonDetails = () => {
    setRandomPokemon(prev => {
      return {
        ...prev,
        showDetails: !prev.showDetails
      }
    });
  }

  return (
    <>
      <div className="App">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={
        <Dashboard 
        savePokemon={savePokemon}
        savedPokemon={savedPokemon}
        randomPokemon={randomPokemon}
        getNewRandomPokemon={getNewRandomPokemon}
        showPokemonDetails={showPokemonDetails}
        />}/>
        <Route path="/saved" element={<SavedPokemon savedPokemon={savedPokemon}/>}/>
        <Route path="/allPokemon" element={<AllPokemon />}/>
        <Route path="/allPokemon/:id" element={<SinglePokemon />}/>
      </Routes>
    </>
  );
}

export default App;
