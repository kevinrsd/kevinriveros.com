import React, {Component}from 'react';
import './PieApp.css';

class PieApp extends Component{

    render(){
        return (
            
            <div className="PieApp" id="contacto">

                <p>___________________________________</p>
                <div >
                <a className="iconos" href="https://www.github.com/kevinrsd"><i className="fab fa-github"></i></a>
                <a className="iconos" href="https://www.facebook.com/kevinriverosg"><i className="fab fa-facebook"></i></a>
                <a className="iconos" href="https://www.instagram.com/kevincodigo"><i className="fab fa-instagram"></i></a>
                <a className="iconos" href="mailto:kevinriverosg@gmail.com"><i className="fas fa-envelope"></i></a>

                </div>
                <h4 className="copy">&copy;Copyright Kevin Riveros. All rights reserved. {new Date().getFullYear()}</h4>

            </div>
           
        )
    }
}
export default PieApp;