import React from 'react';
import './style/components.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Login from './formLogin';

function Nav() {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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
				<li className="login" onClick={handleShow}> Iniciar sesion</li>
				
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Iniciar sesion</Modal.Title>
						</Modal.Header>
						<Modal.Body className="modal-body"> <Login /> </Modal.Body>
						<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				
				<li className="signup" > <Link to="/register">Registrarme</Link></li>
			</ul>
		</nav>

	)
}

export default Nav





// { if(!exist.user) {<ul className="lista">

// <li className="login"> Iniciar sesion</li>
// <li className="signup"> Registrarme</li>
// </ul>}}