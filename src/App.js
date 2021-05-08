import React from "react";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
          <Switch>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
