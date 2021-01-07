import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import './SeasonDisplay.css';
import  Spinner  from "./Spinner";
 
class App extends React.Component
{
    constructor( props)
    {
        super(props);
        this.state  = { lat :null , errorMessage : ''};
        
    }

componentDidMount()
{
    window.navigator.geolocation.getCurrentPosition(
        position=>{this.setState({lat:position.coords.latitude});},
        err => {this.setState({errorMessage:err.message});}
    );
}

 

    rendercontent()
    {
       if(this.state.errorMessage && !this.state.lat)
        return <div>Error : { this.state.errorMessage}</div>;

        if(!this.state.errorMessage && this.state.lat)
        return <SeasonDisplay lat = { this.state.lat} /> ;
         
        return <Spinner />
    }


render()
{
    return(
        <div className = "Border red"> {this.rendercontent()}        </div>   ) ;
}
}
ReactDom.render(<App /> , document.querySelector('#root'));