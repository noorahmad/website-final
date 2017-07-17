import React, { Component } from 'react';
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Navbar from './components/navbar'
import Competent from './components/competent'
import Footer from './components/footer'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Competent />
        <Footer />
      </div>
    );
  }
}

export default App;
