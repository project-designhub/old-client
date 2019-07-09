import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Onboard from "./components/Onboard";
import CreateProject from "./components/CreateProject";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>Welcome to Project: DesignHub :P</h1>
        <p>
          Designhub is a codename cause it's already taken... so don't sue us!
        </p>
      </header>
      <Switch>
        <Route exact path="/" />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/onboard" component={Onboard} />
        <Route path="/createproject" component={CreateProject} />
      </Switch>
    </div>
  );
}

export default App;
