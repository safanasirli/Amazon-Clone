import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login__container">
      <div className="login__content">
        <img
          className="amazon__logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
        />
        <h1>Sign into Amazon</h1>
        <button className="login__button" onClick={signIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
