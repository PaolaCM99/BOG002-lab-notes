import React from 'react';
import './components.css'
import Fondo from './img/Framew.png'

class vector extends React.Component{
	render(){
		return(
			<img className="vector" src={Fondo} alt="fondo"/>
		)
	}
}
export default vector