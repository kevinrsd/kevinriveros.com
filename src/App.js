import React, { Component } from 'react';
import './App.css';
import NavBarApp from './Components/NavBarApp.js';
import TitleApp from './Components/TitleApp.js';
import Portafolio from './Components/Portafolio';
import PieApp from './Components/PieApp';
import ParticlesContainer from './ParticlesContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <ParticlesContainer className="particulas"/>
        <NavBarApp/>
        <header className="App-header">
            <TitleApp/>          
        </header>
        <PieApp/>
      </div>
    );
  }
}

export default App;
