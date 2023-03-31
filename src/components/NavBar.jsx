   /*  ajout de la condition "affichage du bouton précédent seulement s'il y a un pokémon précédent" et "affichage du bouton suivant, seulement s'il y a un pokémon suivant */
  
   function NavBar({previous, next, index, pokemonList}) {
    return <nav>
        {index > 0 ? <button className="PreviousButton" onClick={previous}> Précédent </button> : null}
        {index < pokemonList.length -1 ? <button className="NextButton" onClick={next}> Suivant </button> : null}
    </nav>
}

export default NavBar