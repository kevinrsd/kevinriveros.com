import React, { Component } from 'react';
import './App.css';
import NavBarApp from './Components/NavBarApp.js';
import TitleApp from './Components/TitleApp.js';
import Portafolio from './Components/Portafolio';
import PieApp from './Components/PieApp';
import ParticlesContainer from './ParticlesContainer'
import Iframe from 'react-iframe'

class App extends Component {
  constructor( props ){
    super( props )
    this.state={
      showMessage: true
    }
    this.hidePopUp = this.hidePopUp.bind( this );
  }
  hidePopUp(){
    console.log( "HIDE POPUP" )
    this.setState={
      showMessage: false
    }
  }
  render() {
    const {showMessage } = this.state;
    return (
      <div className="App" id="index">

        <div className="tooltip-bottom" >
          <p>👋 Hola, gracias por estar aquí. </p>
          <p> 🔧 Esta página fue creada hace varios años atras cuando empezaba en el desarrollo web. 🔧</p>
          <p>Actualmente me encuentro desarrollando una muchisimo mejor. Espero verte pronto por aqui</p>
        </div>
        <ParticlesContainer className="particulas"/>
        <NavBarApp/>
        <header className="App-header">
            <TitleApp/> 
        </header>
        
        <div  className="section1" id="about">
            <h3 className="titlesection">About me</h3>
            <img className="imageprofile" src="https://media-exp1.licdn.com/dms/image/C4E03AQGvU4uwQTlDGg/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=m8kseYHSlrKKJrXOq3FbMqN0GEZCJ0bY8DYmwHUYvis" alt="profile"></img>
            <p className="aboutmetext">I'm a highly focused software developer with two years of experience developing web and mobile applications for different size of enterprises. Expert in frontend development. Mainly developing complex web applications with React js.</p>
            <p className="aboutmetext">Has been working as a frontend lead in a e-commerce web project. Has developed multiple hybrid and native mobile applications for startups and medium size enterprises. </p>
            <br/>
            <br/>

        </div>
        <div className="section2" id="portafolio">
            <h3 className="titlesection">Experience</h3>
            <br/>
            <p className="aboutmetext">Frontend: React js, Vue js, jQuery, ES6.</p>
            <p className="aboutmetext">UI framework: Material, Bootstrap, Foundation, Nebular, Materialize</p>
            <p className="aboutmetext">Preprocessors: SASS, LESS, Stylus</p>
            <p className="aboutmetext">Mobile: Ionic, React Native, Android Native, IOS Native.</p>
            <p className="aboutmetext">Platforms: GitHub, GitLab, Atlassian Bitbucket, Google Analytics, Firebase, AWS</p>
            <p className="aboutmetext">Backend: Node js, .Net Core</p>
            <p className="aboutmetext">Databases: MongoDB, SQL Server, MySQL, PostgreSQL</p>
            <br/>
            <br/>

        </div>
        <div  className="section3" id="youtubeChannel">
            <div style={{
              display:'flex',flexDirection:'column'
            }}>
            <h3 className="titlesection">Learn to code</h3>
            <br/>
              <div className="containerVideo">
                <Iframe url="https://www.youtube.com/embed/KDzhKI8DFlU"
                id="myId"
                className="video"
                display="initial"
                position="relative"/>
                <Iframe url="https://www.youtube.com/embed/KDzhKI8DFlU"
                id="myId"
                className="video"
                display="initial"
                position="relative"/>
              </div>
              <br/>
              <br/>

            </div>


            
        </div>
        <div className="section4" id="blog">
            <h3 className="titlesection">Blog</h3>
            <br/>
            <div className="containerVideo">
              <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="https://cdn-images-1.medium.com/max/1600/1*a3WOURXMkuUxx1plwm34ug.jpeg" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">How to create my first web Application in 2 minutes</h5>
                  <a href="https://medium.com/@riverosk885/how-to-create-my-first-web-application-in-2-minutes-a6509b48238a?source=friends_link&sk=fd03bf018706ac45e150597534db408b" class="btn btn-success" style={{width:'100%',backgroundColor:'#03d277',borderColor:'#03d277'}}>Read</a>
                </div>
              </div>

              <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="https://cdn-images-1.medium.com/max/1600/1*a3WOURXMkuUxx1plwm34ug.jpeg" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">How to create my first web Application in 2 minutes</h5>
                  <a href="https://medium.com/@riverosk885/how-to-create-my-first-web-application-in-2-minutes-a6509b48238a?source=friends_link&sk=fd03bf018706ac45e150597534db408b" class="btn btn-success" style={{width:'100%',backgroundColor:'#03d277',borderColor:'#03d277'}}>Read</a>
                </div>
              </div>
            </div>

        </div>


        <PieApp/>
        <br/> <br/> <br/> <br/>
      </div>
    );
  }
}

export default App;
