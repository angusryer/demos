getStarships = () => {
  // Place GET Request here
  axios.get("https://swapi.dev/api/starships/").then( response => {
    // console.log(response); // Use console log to understand how your response is structured, but delete these lines in your final production code
    response.data.results.forEach( ship => { // Using forEach is preferred in this case because we don't need to keep the modified array
      postShip(ship);
    } )
  } )
};

postShip = (starship) => {
  const starwarsContainer = document.querySelector(".starwars-container");
  const ship = document.createElement("p");
  ship.innerHTML = starship.name;
  starwarsContainer.appendChild(ship);
};

getStarships();

// We can use the exact same variable name in our forEach array method as we do in our postShip method below that, although that can be confusing. We can use the same name because they are declared within different scops and so they are not exposed to each other.
