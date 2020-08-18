import React from 'react';

// Pages
import Home from './pages/home';
import About from './pages/about';

// Modules
import SpatialNavigation from 'react-js-spatial-navigation';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

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
