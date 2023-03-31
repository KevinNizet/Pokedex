import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"


function App() {

  /* useEffet pour l'alerte automatique à l'ouverture de l'app */
  useEffect(
    () => {
      alert("Bienvenue sur ton Pokédex dresseur ! :)")
    }, 
    []
  ); 
  
/* tableau des pokémons */
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

     /*  alerte du message seulement quand Pikachu apparaît */
      const currentPokemon = pokemonList[currentPokemonIndex];

        if (currentPokemon.name === "pikachu") {
          setTimeout(() => {
            alert("Pika pika pikachuuuuuu !")
          }, 100);
        }
        

  return (
  
   /* Ajout d'un fragment, appel du composant PokemonCard et du composant NavBar */
    <> 
    <figure>  
    <div className='PokemonCard'>
      <PokemonCard pokemon = {pokemonList[currentPokemonIndex]} />
    </div>
    <div className='buttons-div'>
        
        <NavBar previous={handlePreviousClick} next={handleNextClick} index={currentPokemonIndex} pokemonList={pokemonList}/>
       
    </div>
    </figure>
    </>
  );
}

export default App

