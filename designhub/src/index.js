import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from './auth/authWrapper';
import config from './auth/authConfig';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <AppWithRouter />
    </Auth0Provider>
  </Router>,
  document.getElementById('root')
);
