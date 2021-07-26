import React from 'react';
import './style/components.css'
import { Link } from "react-router-dom";
class nav extends React.Component {
	render() {
		return (
			<nav className="nav">
				<Link to="/">
					<div className="logo">
						<span className="img">  </span>
						<span className="get"> Get</span>
						<span className="notes"> NOTES</span>
					</div>
				</Link>


				<ul className="lista">
					<li className="login"><Link to="/feed">Iniciar sesion</Link> </li>
					<li className="signup" > <Link to="/register">Registrarme</Link></li>
				</ul>
			</nav>

		)
	}
}
export default nav
// { if(!exist.user) {<ul className="lista">

// <li className="login"> Iniciar sesion</li>
// <li className="signup"> Registrarme</li>
// </ul>}}