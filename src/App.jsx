import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"


function App() {

  
/* tableau des pokémons */
  const pokemonList = [
    {
        name: "Bulbizarre",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "Salaméche",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "Carapuce",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "Pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "Mew",
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

        /* useEffet pour l'alerte automatique à l'ouverture de l'app */
       /*  useEffect(
          () => {
            alert("Bienvenue sur ton Pokédex dresseur ! Choisi ton starter 😊");
         }, 
          []
          ); 
 */
     /*  alerte du message seulement quand Pikachu apparaît */
      const currentPokemon = pokemonList[currentPokemonIndex];

        if (currentPokemon.name === "Pikachu") {
          setTimeout(() => {
            alert("Pika pika pikachuuuuuu ⚡️ !");
          }, 700);
        }

      /* changement de la couleur de fond de la carte en fonction du pokémon affiché */
      function getBackgroundColor(pokemonName) {
        switch(pokemonName) {
          case "Bulbizarre":
            return "#78c850";
          case "Salaméche":
            return "#e99458";
          case "Carapuce":
            return "#7198f3";
          case "Pikachu":
            return "#fcda55";
          case "Mew":
            return "#d0a4ee";
          default:
            return "white";
        }
      }
        

  return (
  
   /* Ajout d'un fragment, appel du composant PokemonCard et du composant NavBar */
    <> 
    
  
  
    <div id='root' style={{backgroundColor: getBackgroundColor(currentPokemon.name)}}>
      <figure className='CardDiv'> 
   
        <div className='PokemonCard'>
          <PokemonCard pokemon = {pokemonList[currentPokemonIndex]} />
      
        </div>
    
        <div className='buttons-div'>
        
        <NavBar previous={handlePreviousClick} next={handleNextClick} index={currentPokemonIndex} setIndex={setCurrentPokemonIndex} pokemonList={pokemonList}/>
       
        </div>
    
      </figure>
    </div>
    </>
  );
}

export default App

