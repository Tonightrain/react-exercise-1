import React, { Component } from 'react';
import './App.scss';
import About from './compoments/About';
import Educations from './compoments/Educations';
import Header from './compoments/Header';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <About />
        <Educations />
      </main>
    );
  }
}

export default App;
