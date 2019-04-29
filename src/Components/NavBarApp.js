import React from 'react';
import './NavBarApp.css';


export default class NavBarApp extends React.Component {

    constructor(){

        super()
    }
    render(){
        return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">

<button className="navbar-toggler" data-toggle="collapse" data-target="#collapse-target" >
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="collapse-target">

  <ul className="navbar-nav ">
    <li className="nav-item">
      <a className="navApp"  href="#home" >Home</a>

    </li>
    <li className="nav-item">
      <a className="navApp" href="#about"  >About</a>
    </li>
    <li className="nav-item"> 
      <a className="navApp" href="#portafolio">Portafolio</a>
    </li>
    <li className="nav-item">
      <a className="navApp" href="#youtubeChannel" >Learn to Code</a>
    </li>
    <li className="nav-item">
      <a className="navApp" href="#contacto" >Contact</a>
    </li>
  </ul>
</div>
</nav>

        )
    }
}