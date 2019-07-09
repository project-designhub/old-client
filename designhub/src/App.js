import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Onboard from "./components/Onboard";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/onboard" component={Onboard} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
