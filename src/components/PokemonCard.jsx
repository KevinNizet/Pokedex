
function PokemonCard({pokemon}) {

  return (
    <> 
    <figure>
      {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name}/>}
    </figure>

    <p> Hello I'm {pokemon.name} </p>
    </>
  )
  }

export default PokemonCard;

