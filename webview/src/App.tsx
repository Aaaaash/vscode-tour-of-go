import React from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createHashHistory } from 'history';

import Catalogue from './components/Catalogue';
import Welcome from './components/Welcome';
import Basic from './components/Basic';

import './App.css';

const history = createHashHistory();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <h1 onClick={() => history.push('/')}>A Tour of Go.</h1>
        </div>
        <div className="main">
          <Router history={history}>
            <Route path="/" exact component={Catalogue} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/basic" component={Basic} />
          </Router>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
