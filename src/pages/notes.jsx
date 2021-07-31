import React from 'react';
import '../components/style/components.css';
import Nav from '../components/nav'

class feed extends React.Component {
	render() {
		return (
			<section className="container-notes">
				<Nav />
				<div className="menu">
					<ul className="menu-opciones">
						<li> <h2> Nombre de usuario</h2></li>
						<li> <button> <i class="fas fa-plus"> Agregar nota</i> </button></li>
						<li> <button> Cerrar sesion</button> </li>
					</ul>
				</div>
			</section>
		);
	}
}
export default feed