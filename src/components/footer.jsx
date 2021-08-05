import React from 'react';
import './style/components.css'
import Fondo from './img/Framew.png'

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="derechos"> ©2021 Lab NOTES, Inc.Terms & Privacy</div>
				<img className="vector" src={Fondo} alt="fondo" />
			</footer>

		)
	}
}
export default Footer