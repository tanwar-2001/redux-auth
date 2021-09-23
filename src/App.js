import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { auth, provider } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogout,
  selectUserEmail,
  selectUserName,
} from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  console.log(userName)
  console.log(userEmail)
  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };

  const handleSignOut = () => {
    auth.signOut
      .then(() => {
        dispatch(setUserLogout());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {userName ? (
          <button onClick={handleSignOut}>SignOut</button>
        ) : (
          <button onClick={handleSignIn}>SignIn</button>
        )}
      </header>
    </div>
  );
}

export default App;
