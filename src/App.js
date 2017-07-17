import React, { Component } from 'react';
import Home from './components/home';
import About from './components/about'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
