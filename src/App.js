import React from "react";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/home";
import About from "./pages/about";

import SpatialNavigation from "react-js-spatial-navigation";

function App() {
  return (
    <Router basename="/">
      <SpatialNavigation />
      <Switch>
        <Route component={About} path="/about"></Route>

        <Route component={Home} path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
