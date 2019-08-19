import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';

import Welcome from './components/Welcome';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>A Tour of Go.</h1>
      </div>
      <div className="main">
        <Welcome />
      </div>
      <div className="footer">
        <PrimaryButton text="Get Started" />
      </div>
    </div>
  );
}

export default App;
