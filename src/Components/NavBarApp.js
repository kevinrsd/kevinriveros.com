import React from 'react';
import './NavBarApp.css';


export default class NavBarApp extends React.Component {

    constructor(){

        super()
        
    }
    state={
      toggle:true
    }
    setToggle =() =>{
      const tog = !this.state.toggle;
      this.setState({ toggle:tog });
    }
    render(){
        return (

<nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">

  <a class="navbar-brand" href="/">[KEVIN RIVEROS.]</a>

<button className="navbar-toggler " data-toggle="collapse" data-target="#collapse-target" >
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse " id="collapse-target">

  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      <a className="nav-link" href="/#index" >Home</a>

    </li>
    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      <a className="nav-link" href="#about"  >About</a>
    </li>
    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"> 
      <a   className="nav-link" href="#portafolio">Experience</a>
    </li>
    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      <a className="nav-link" href="#youtubeChannel" >Learn to Code</a>
    </li>
    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      <a className="nav-link" href="#blog" >Blog</a>
    </li>
    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      <a className="nav-link" href="#contacto" >Contact</a>
    </li>
  </ul>
</div>
</nav>

        )
    }
}