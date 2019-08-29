import React from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createHashHistory } from 'history';

import Catalogue from './components/Catalogue';
import Welcome from './components/Welcome';
import Basic from './components/Basic';

import './App.css';

const hashHistory = createHashHistory();

window.addEventListener('message', (ev) => {
  const eventData = JSON.parse(ev.data);
  switch (eventData.event) {
    case 'LOCATION_CHANGE':
      console.log(eventData);
      hashHistory.push(eventData.location);
      break;
    default:
      break;
  }
});

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <img src="go.png" alt=""/>
          <h1 onClick={() => hashHistory.push('/')}>A Tour of Go.</h1>
        </div>
        <div className="main">
          <Router history={hashHistory}>
            <Route path="/" exact component={Catalogue} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/basic" component={Basic} />
          </Router>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
