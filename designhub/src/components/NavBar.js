import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../auth0";
import "../Navigation.css";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const loginHandler = () => {
    loginWithRedirect({});
  };
  const logoutHandler = () => {
    logout();
  };
  return (
    <div>
      {!isAuthenticated && <button onClick={loginHandler}>Log in</button>}
      {isAuthenticated && <button onClick={logoutHandler}>Log out</button>}
      <Link to="/profile">Profile</Link>
      <Link to="/createproject">Create New Project</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default NavBar;
