getDoggies = () => {
  // Place GET Request here
  axios.get("https://dog.ceo/api/breeds/image/random/20").then( response => {
    // console.log(response); // Use console log to understand how your response is structured, but delete these lines in your final production code
    response.data.message.map( doggyImage => { // Using map here for demo purposes, but this will return a new modified array. We don't need this modified array, so there's no need to use map. Use forEach instead.
      postDogImage(doggyImage);
    })
  } )
};

postDogImage = (imageUrl) => {
  const container = document.querySelector(".dogs-container");
  const dog = document.createElement("img");
  dog.setAttribute("src", imageUrl); // pass the image **string** into the setAttribute method
  dog.className = "dog-img";
  container.appendChild(dog);
};

getDoggies();
