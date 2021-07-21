import React from 'react';
// import Vector from './vector'
import './components.css'

class nav extends React.Component{
	render(){
		return(
			<nav className= "nav">
				<div className="logo">
					<span className="img">  </span>
					<span className="get"> Get</span>
					<span className="notes"> NOTES</span>
				</div>
				<ul className="lista">
					<li className="login"> Iniciar sesion</li>
					<li className="signup"> Registrarme</li>
				</ul>
			</nav>
			
		)
	}
}
export default nav