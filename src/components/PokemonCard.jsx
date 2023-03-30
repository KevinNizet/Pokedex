
import PropTypes from "prop-types";

function PokemonCard({pokemon}) {

  return (
    <> 

    {/* condition ajoutant "???" si le pokémon n'a pas de src */}
    
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

  
