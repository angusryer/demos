// Start with what you know
// Test VERY often
// Debug as you test

// Get to a working version of the piece of the puzzle you are working on
// Refactor your code and separate concerns
// TALK TO YOURSELF

let allPosts = [
  {
    // global posts array. This will contain a bunch of 'posts' as separate objects. This is the CURRENT set of comments we have. This can be set to [] or a set of defaults.
    name: "Jeremy Hillary Boob, PHD",
    comment: "Satirist, Botanist, Part-time firefighter and paperback writer.",
  },
];

// This should read as much like a natural language as possible!
// Grab our form, then immediately add the event listener.
// "Describe" the course of action inside of the event listener, but don't encumber it with details.
const form = document.querySelector(".main__content-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  storePost(event.target);
  displayAllPosts(allPosts);
});

const clearExistingPostsFromDOM = () => {
  // I find that setting .innerText = "" obfuscates the intent of the logic, which is just to clear the contents of the comment area. Encapsulating it in a function and naming it this way makes the code easier to understand at a glance.
  document.querySelector(".main__comments").innerText = "";
};

const storePost = (post) => {
  // The following is a SHORT-CIRCUIT: it only pushes the comment to the array if there is content for the name and comment
  post["name-input"].value &&
    post["comment-input"] &&
    allPosts.unshift({
      // Generating a single object and pushing it to the global 'allPosts' array
      name: post["name-input"].value,
      comment: post["comment-input"].value,
    });
};

const displayAllPosts = (posts) => {
  clearExistingPostsFromDOM(); // I'll let you decide: should this function be in 'displayAllPosts', or the submit event definition above?
  posts.forEach((post) => {
    // FOR LOOP that iterates over all the objects in our global 'allPosts' array!
    pushPostToDOM(post);
  });
};

const pushPostToDOM = (singlePost) => {
  const commentsSectionEl = document.querySelector(".main__comments"); // We'll append to this main section element

  const postGroupEl = document.createElement("div"); // This element will contain the name and comment
  const nameEl = document.createElement("span"); // The element that will contain the name text from the submitted form
  const postEl = document.createElement("span"); // The element that will contain the post text from the submitted form

  // Go ahead and add some classes so that our SCSS styling is applied automagically
  postGroupEl.classList.add("main__comments-comment");
  nameEl.classList.add("main__comments-comment-name");
  postEl.classList.add("main__comments-comment-post");

  // Now we're actually applying the name and post text to the elements we just created
  nameEl.innerText = singlePost.name;
  postEl.innerText = singlePost.comment;

  // Here we're appending the name and post to the div element we created above. We are "assembling" the HTML structure
  postGroupEl.append(nameEl, postEl);

  // Now we're adding the entire element container to the main__comments section in the DOM
  commentsSectionEl.appendChild(postGroupEl);
};

// This populates the DOM for the first time
displayAllPosts(allPosts);
