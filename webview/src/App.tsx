import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Catalogue from './components/Catalogue';
import Welcome from './components/Welcome';
import { createBrowserHistory } from 'history';

import './App.css';

const customHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <h1 onClick={() => customHistory.push('/')}>A Tour of Go.</h1>
        </div>
        <div className="main">
          <Router history={customHistory}>
            <Route path="/" exact component={Catalogue} />
            <Route path="/welcome" component={Welcome} />
          </Router>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
