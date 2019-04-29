import React from 'react';
import './Card.css'
export default class CardApp extends React.Component{

    
    render(){
        return (
            
            <div className="Card-App">
                
                <img className="Card-Image" src="https://cdn1.altiria.com/wp-content/uploads/2017/03/node-logo.jpg"/>
                <h3 className="Card-Text">Node.js</h3>
            </div>
           
        )
    }
}

