import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Router, Route, Switch } from 'react-router';

import Catalogue from './components/Catalogue';
import Welcome from './components/Welcome';
import { createBrowserHistory } from 'history';

import './App.css';

const customHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>A Tour of Go.</h1>
      </div>
      <div className="main">
        <Router history={customHistory}>
          <Route path="/" exact component={Catalogue} />
          <Route path="/welcome" component={Welcome} />
        </Router>
      </div>
      <div className="footer">
        <PrimaryButton text="Get Started" />
      </div>
    </div>
  );
}

export default App;
