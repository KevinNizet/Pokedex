
import PropTypes from "prop-types";

function PokemonCard({pokemon}) {

  console.log('hello', pokemon)

  return (
    <> 
    <figure>
      {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name}/>}
    </figure>

    <p> Hello, je suis {pokemon.name} ! </p>
    </>
  )
  }

export default PokemonCard;

  PokemonCard.propTypes = {

    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }
