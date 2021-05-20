import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import { db, auth } from "./firebase";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log("User", user);

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="app">
          <Header signOut={signOut} user={user} cartItems={cartItems} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
