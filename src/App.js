import React, { useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import {db } from './firebase'

function App() {

  const [ cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
 db.collection('cartItems').onSnapshot((snapshot)=>{
   const tempItems =snapshot.docs.map((doc)=>({
     id: doc.id,
     product: doc.data()
   }))
   setCartItems(tempItems);
 })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
      <div className="app">
        <Header cartItems= {cartItems} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems = {cartItems}/>
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
