import React from 'react';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './components/Dashboard';
import Onboard from './components/Onboard';
import { useAuth0 } from './auth/authWrapper';
import CreateProject from './components/CreateProject';
import UserProfile from './components/UserProfile';
import Loading from './components/Loading';

function App() {
  const { loading } = useAuth0();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <Switch>
            <Route exact path="/" />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/onboard" component={Onboard} />
            <Route path="/createproject" component={CreateProject} />
            <Route path="/profile" component={UserProfile} />
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
