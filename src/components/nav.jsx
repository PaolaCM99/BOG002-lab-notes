import './style/components.css';
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Login from './formLogin';
import { useFirebaseApp} from 'reactfire';

function Nav() {

	const firebase = useFirebaseApp()
	const [show, setShow] = useState(false);
	const [user, setUser] = useState(false)
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
//condicionando componentes del nav
	firebase.auth().onAuthStateChanged((user) => {
		user? setUser(true):setUser(false)
	  });

	return (
		<nav className="nav">
			<Link to="/">
				<div className="logo">
					<span className="img">  </span>
					<span className="get"> Get</span>
					<span className="notes"> NOTES</span>
				</div>
			</Link>
			{ !user &&
			<ul className="lista">
				 <li className="login" onClick={handleShow}> Iniciar sesion</li>
						<Modal  show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>Iniciar sesion</Modal.Title>
							</Modal.Header>
							<Modal.Body className="modal-body"> <Login handleClose={handleClose} /> </Modal.Body>
							<Modal.Footer>

							</Modal.Footer>
						</Modal>
				<li className="signup" > <Link to="/register">Registrarme</Link></li>
			</ul>}
		</nav>
	)
}

export default Nav