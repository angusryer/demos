getFirePokemon = () => {
  // Place GET Request here
  axios.get("https://pokeapi.co/api/v2/type/10/").then( response => {
    // console.log(response); // Use console log to understand how your response is structured, but delete these lines in your final production code
    response.data.pokemon.forEach( pokemonCharacter => { // Using forEach is preferred in this case because we don't need to keep the modified array
      postPokemon(pokemonCharacter);
    })
  } )
};

postPokemon = character => {
  const pokemonContainer = document.querySelector(".pokemon-container");
  const pokemon = document.createElement("p");
  pokemon.innerHTML = character.pokemon.name; // "character" contains a single "pokemonCharacter" (line 6)
  pokemonContainer.appendChild(pokemon);
};

getFirePokemon();
