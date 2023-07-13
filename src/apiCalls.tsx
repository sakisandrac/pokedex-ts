const getSinglePokemon = (num) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
    .then(res => {
      if (!res.ok) {
        console.log(res.statusText)
        throw new Error(res.statusText);
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      return data
    })
}

const getAllPokemon = () =>{
  return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
  .then(res => {
    if (!res.ok) {
      console.log(res.statusText)
      throw new Error(res.statusText);
    }
    return res.json()
  })
  .then(data => {
    console.log(data)
    return data
  })
}

export { getSinglePokemon, getAllPokemon }