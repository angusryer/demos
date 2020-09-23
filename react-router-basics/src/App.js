import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";

// Original main components
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
const Services = (props) => {
  // The props we're expecting here are coming from what we pass
  // into the <Service> component below, using the 'render' method
  // that react-router's <Route> component provides. We used the
  // spread (...) operator to remove one layer of props, making it
  // easier to understand and read. We could ALSO destructure what
  // we need directly, instead of writing "props". We would write
  // "{match}" if we were to do this here.
  return (
    <>
      <h1>Services</h1>
      {/* Here we're using props.match.path to demonstrate how the value of this
      key (that is maintained by react-router) is equal to where the user is
      currently navigated to. In our case, it will be "/services". */}
      <Link to={`${props.match.path}/dataanalytics`}>Data Analytics</Link>
      <Link to={`${props.match.path}/uxdesign`}>UX Design</Link>
      <Link to="/services/webconsulting">Web Consulting</Link> {/* Example of how we can hardcode the path, but use match where URLs could possibly be dynamic */}
      <Switch>
        <Route path={`${props.match.path}/dataanalytics`} render={() => <DataAnalytics />} /> {/* Using render method (Need this to pass ROUTE props!) */}
        <Route path={`${props.match.path}/uxdesign`} component={() => <UXDesign />} /> {/* Using component method */}
        <Route path={`${props.match.path}/webconsulting`}><WebConsulting /></Route> {/* Using nested <Children> */}
      </Switch>
    </>
  );
};

// Services page components
const WebConsulting = () => <h2>Web Consulting</h2>;
const UXDesign = () => <h2>UX Design</h2>;
const DataAnalytics = () => <h2>Data Analytics</h2>;

// Main App component
function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
      <Switch>
        <Route exact path="/"><Home /></Route>
        {/* Check out this slick syntax. If you are passing in an Object with key/value
        pairs as a prop to a component, we can use the spread operator (...), which will
        insert each of the keys inside that object as _separate_ props. We can then receive
        those magical route props in our child component using 'props' as usual. */}
        <Route path="/services" render={routeProps => <Services {...routeProps} />} /> {/* Demo using the 'render' method (this is the method that react-router passes ROUTE props through) */}
        <Route path="/about" component={() => <About />} /> {/* Demo using the 'component' method (react-router doesn't pass ROUTE props this way) */}
        <Route path="/contact">
          <Contact /> {/* Demo using the children method (react-router doesn't pass ROUTE props this way) */}
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
