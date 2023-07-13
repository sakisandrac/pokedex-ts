const getRandomNum = () => {
  return Math.floor(Math.random() * 100)
};

const capitalizeName = (name: string) => {
  return `${name.split('')[0].toUpperCase()}${name.substring(1)}`
}

const cleanUpData = (data: any) => {
  return {
    abilities: data.abilities,
    id: data.id,
    name: data.name,
    types: data.types,
    moves: data.moves,
    weight: data.weight
  }
}

export { getRandomNum, capitalizeName, cleanUpData }