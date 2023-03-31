   /*  ajout de la condition "affichage du bouton précédent seulement s'il y a un pokémon précédent" et "affichage du bouton suivant, seulement s'il y a un pokémon suivant */
  
   function NavBar({previous, next, index, setIndex, pokemonList}) {
    const handleButton = (element) => {
        {setIndex(pokemonList.indexOf(element))}
    }

    return <nav>
              {index > 0 && <button className="PreviousButton" onClick={previous}> Précédent </button>}
              {index < pokemonList.length - 1 && <button className="NextButton" onClick={next}> Suivant </button>}
              
              <div className="PokemonButtonDiv">
                 {pokemonList.map((element, index) => (
                     <button key={index} className="PokemonButton" onClick={() => handleButton(element)}>
                    {element.name}
                     </button>
                     ))}
             </div>
        
        
          </nav>
}

export default NavBar