import React from 'react';
import './App.css';

// Using the function keyword to declare this component. The value of 'this' will be constrained to refer to
// the specific instance of the <Nav /> component at the time its called in the <App /> component below.
function Nav() {
  return (
    <nav>
      <a href="./">Home</a>
      {' | '}
      <a href="./">About</a>
      {' | '}
      <a href="./">Contact</a>
    </nav>
  )
}

function Header(props) {
  return (
    <header>
      <h2>{props.title}</h2>
      <Nav />
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <h1>Hero</h1>
    </section>
  )
}

// I've used arrow function syntax to create the next two components just to provide an example.
// Note that the 'this' keyword, if used within an arrow function, will get its context from
// the calling parent function/scope, NOT the arrow function its called in. In this case, "window",
// because these arrow functions are not contained within any other function in this file.
const Post = () => {
  return (
    <article className="post">
      <h3>Post Title</h3>
      <p>
      Sit cillum est cupidatat sit. Veniam deserunt do eu irure. Anim aute magna aute aliquip deserunt pariatur esse dolor velit pariatur non ut est. Exercitation occaecat est adipisicing qui nisi cillum. Eiusmod fugiat consectetur et in excepteur amet nostrud eiusmod eiusmod.Velit pariatur velit non Lorem tempor aute excepteur deserunt.
      </p>
      <p>
      Ut duis voluptate in labore anim ad cupidatat enim duis amet sunt Lorem labore. Minim Lorem ea nulla ad sit labore adipisicing anim qui consectetur aute laboris. Sunt tempor reprehenderit veniam id pariatur.
      </p>
      <p>
        Ad enim est deserunt id. Cillum est nostrud id ad excepteur est aliquip cupidatat ex aute.Est nulla officia adipisicing id enim deserunt aute. Laborum nulla quis est labore nulla. Cupidatat sunt anim fugiat Lorem in minim laborum proident proident sint laborum quis consectetur irure.
      </p>
      <p>
        Ad enim est deserunt id. Cillum est nostrud id ad excepteur est aliquip cupidatat ex aute.Est nulla officia adipisicing id enim deserunt aute. Laborum nulla quis est labore nulla. Cupidatat sunt anim fugiat Lorem in minim laborum proident proident sint laborum quis consectetur irure.
      </p>
      <p>
        Ad enim est deserunt id. Cillum est nostrud id ad excepteur est aliquip cupidatat ex aute.Est nulla officia adipisicing id enim deserunt aute. Laborum nulla quis est labore nulla. Cupidatat sunt anim fugiat Lorem in minim laborum proident proident sint laborum quis consectetur irure.
      </p>
    </article>
  )
}

const Categories = () => {
  return (
    <aside className="categories">
      <h4>Categories</h4>
      <ul className="categories__list">
        <li><a href="./">Category 1</a></li>
        <li><a href="./">Category 2</a></li>
        <li><a href="./">Category 3</a></li>
        <li><a href="./">Category 4</a></li>
        <li><a href="./">Category 5</a></li>
        <li><a href="./">Category 6</a></li>
      </ul>
    </aside>
  )
}

function Footer() {
  return (
    <footer>
      <div><a href="./">Site Map</a></div>
      <div>Copyright 20xx</div>
    </footer>
  )
}


// For fun, I've included a prop called "title" that I've passed the value of "React App" to in the Header component.
// Look above at the <Header /> component's code to see where 
function App() {
  return (
    <div className="App">
      <Header title="React App"/> 
      <Hero />
      <main>
        <Post />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}

export default App;
