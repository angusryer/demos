import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

// Go get an API key from https://developers.giphy.com/dashboard
// Find and fix all the bugs you can find to make this application work!

const API_KEY = "?api_key="; // place your own API key after the = sign
const url = `https://api.giphy.com/v1/gifs/trending`;

class App extends React.Component {
  state = {
    images: [],
  };

  componentDidMount() {
    axios.get(url + API_KEY).then(({ data }) => {
      // add your API key
      this.setState({
        images: data.data // add .data to access the actual array
      });
    })
  }

  render() {
    if (!this.state.images.length) { // This should return true when the length is falsy (0)
      return (
        <div className="app__loading">
          <h2>Loading...</h2>
        </div>
      );
    }
      return (
        <div className="app">
          <h1>Trending Gifs</h1>
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={() => <Trending images={this.state.images} />}
              />
              <Route
                path="/images/:id" // need to ensure that this path matches the one specified in the corresponding <Link> tag below
                render={(routeProps) => {
                  const id = routeProps.match.params.id; // need to add .params between .match and .id
                  const image = this.state.images.find(
                    (image) => image.id === id
                  );
                  return <Image image={image} />;
                }}
              />
            </Switch>
          </Router>
        </div>
      );
    }
  }


function Trending({ images }) {
  const imageList = images.map((image) => {
    return (
      <div key={image.id} className="trending"> {/* add the key prop using the image id from the database */}
        <Link to={`/images/${image.id}`}>
          <img
            className="trending__image"
            src={image.images.preview_gif.url} // need to access the 'url' string within 'preview_gif' object
            alt={image.title}
          />
        </Link>
      </div>
    );
  });
  return <div className="trending__list">{imageList}</div>;
}

function Image({ image }) {
  return (
    <div className="image__container">
      <h2>{image.title}</h2>
      <img
        className="image__img"
        src={image.images.original.url} // need to add .images between image and .original
        alt={image.title}
      />
      <div className="image__link-container">
        <Link to="/">
          <h3 className="image__home">Home</h3>
        </Link>
      </div>
    </div>
  );
}

export default App;
