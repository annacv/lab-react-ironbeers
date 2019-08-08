import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'milligram';
import './App.css';

import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={ListBeers} />
        <Route exact path='/beers/:id' component={SingleBeer} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;