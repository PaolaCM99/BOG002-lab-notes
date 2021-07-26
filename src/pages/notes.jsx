import React from 'react';
import '../components/style/components.css';
// import Nav from '../components/nav'

class feed extends React.Component{
	render(){
		return(
			<section className="container-notes">
				<div className="menu">
				<ul className="menu-opciones">
					<div>
						<li> Nombre de usuario</li>
					</div>
					<li> Agregar nota</li>
					<li> Cerrar sesion</li>
				</ul>
				</div>
			</section>
		);
	}
}
export default feed