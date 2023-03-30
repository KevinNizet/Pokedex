function NavBar({previous, next, index, pokemonList}) {
    return <nav>
        {index > 0 ? <button className="PreviousButton" onClick={previous}> Précédent </button> : null}
        {index < pokemonList.length -1 ? <button className="NextButton" onClick={next}> Suivant </button> : null}
    </nav>
}

export default NavBar