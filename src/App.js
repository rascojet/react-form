import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app-page">
          <Navigation />
          <Route exact path="/" component={Home} />             
          <Route path="/portfolio" component={Portfolio} />             
          <Route path="/contact" component={Contact} />             
          <Route path="/about" component={About} />             
        </div>
      </Router>
    );
  }
}

export default App;
