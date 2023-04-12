
import PropTypes from "prop-types";


function PokemonCard({pokemon}) {

  return (
    <> 

    {/* condition ajoutant "???" si le pokémon n'a pas de src */}
    
    <figure className="card">
      {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img"/>}
    </figure>

    <p className="goPokemon"> 
    Go {pokemon.name} ! </p>
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

  
