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
  type: AllPokemonI
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


export type { AllPokemonI, SavedPokemonI, CleanPokeDataI  }