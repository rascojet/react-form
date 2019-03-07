import React, { Component } from 'react';
import './App.css';

import UserAccount  from './components/UserAccount';

export class App extends Component {

  render() {
    return (
      <div className="jumbotron border-0">
        <div className="container">
          <h1 className="h2">Multi Step Form in React</h1>
          <UserAccount />
        </div>
      </div>      
    );
  }
}

export default App;
