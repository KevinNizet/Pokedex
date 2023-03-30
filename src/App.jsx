import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PokemonCard from "./components/PokemonCard"
/* import NavBar from "./components/NavBar" */


function App() {

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

     /*  code du bouton avec utilisation du state */
     const [currentPokemonIndex, setCurrentPokemonIndex] = useState (0);
     
      const handlePreviousClick = () => {
        setCurrentPokemonIndex(currentPokemonIndex - 1);
      }

      const handleNextClick = () => {
        setCurrentPokemonIndex(currentPokemonIndex + 1);
      }    

  return (
  
   /*  ajout de la condition "affichage du bouton précédent seulement s'il y a un pokémon précédent" et "affichage du bouton suivant, seulement s'il y a un pokémon suivant */
    <figure>  
    <div className='PokemonCard'>
      <PokemonCard pokemon = {pokemonList[currentPokemonIndex]} />
    </div>
    <div className='buttons-div'>
        {currentPokemonIndex > 0 ? <button className="PreviousButton" onClick={handlePreviousClick}> Précédent </button> : undefined}

        {currentPokemonIndex < pokemonList.length -1 ? <button className="NextButton"onClick={handleNextClick}> Suivant </button> : undefined}
    </div>
    </figure>
  );
}

export default App

