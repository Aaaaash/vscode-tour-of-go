import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>A Tour of Go.</h1>
      </div>
      <div className="main">
        <p>Hello, 世界</p>
        <p>Welcome to a tour of the Go programming language.</p>
        <p>The tour is divided into a list of modules that you can access by clicking on A Tour of Go  on the top left of the page.</p>
        <p>You can also view the table of contents at any time by clicking on the menu on the top right of the page.</p>
        <p>Throughout the tour you will find a series of slides and exercises for you to complete.</p>
        <p>You can navigate through them using</p>
      </div>
      <div className="footer">
        <PrimaryButton text="Get Started" />
      </div>
    </div>
  );
}

export default App;
