const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemonCard() {
  const pokemon = pokemonList[0];

  return (
    <figure>
    
      {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} />}

    </figure>
  )
  }

export default PokemonCard;

