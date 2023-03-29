
import PropTypes from "prop-types";

function PokemonCard({pokemon}) {

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
  
/* ajout des propTypes */

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })
}

  
