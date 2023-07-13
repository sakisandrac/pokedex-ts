import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import SavedPokemon from './Components/SavedPokemon/SavedPokemon';
import { useState } from 'react';
import { getSinglePokemon } from './apiCalls';
import { getRandomNum } from './utils';
import { useEffect } from 'react';
import AllPokemon from './Components/AllPokemon/AllPokemon';
import SinglePokemon from './Components/SinglePokemon/SinglePokemon';

function App() {

  const [savedPokemon, setSavedPokemon] = useState<any[]>([]);

  const [randomPokemon, setRandomPokemon] = useState({
    number: 0,
    data: { 
      name: "loading", 
      abilities: [{ability: {name: "", url: ""}, is_hidden: false, slot: 1}], 
      id: "",
      weight: 0,
      moves: [{move: {name: "", url: ""}, version_group_details: []}],
      types: [{slot: 1, type: {name: "", url: "" }}]
    },
    image: "",
    call: true,
    showDetails: false
  });

  useEffect(() => {
    const num = getRandomNum();

    getSinglePokemon(num)
    .then(data => {
      setRandomPokemon(prev => {
        return {
          ...prev,
          number: data.id,
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
    console.log('saved', savedPokemon)
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
        savedPokemon={savedPokemon}
        savePokemon={savePokemon}
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
