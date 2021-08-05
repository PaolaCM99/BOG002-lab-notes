import React from 'react';
import './style/components.css';
import { useState } from 'react'
import 'firebase/auth';
import { useFirebaseApp} from 'reactfire';
import { useHistory } from 'react-router-dom';
import {  Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Register(props) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState("");
	const [error, setError] = useState("")

	const firebase = useFirebaseApp()
	const history = useHistory();

	const handleSignup = async () => {
		await firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((credential) => {
				history.push("/feed");
				return credential.user.updateProfile({ displayName: user })
			})
			.catch((e) => setError(e.message))
	}

	return (

		<div className="form">
			{error && <Alert  variant="danger" >{error}</Alert>}
			<h1 className="titulo_registro"> Crear una cuenta</h1>
			
			<div className="form-group">
				<label htmlFor="user"> Nombre de usuario <br />
					<input type="text" name="user" onChange={(e) => setUser(e.target.value)}/> <br />
				    <span className="prompt"> Maximo 30 caracteres, puedes usar letras y numeros.</span>
				</label>
			</div>

			<div className="form-group"> <label> Correo electronico<br />
				<input type="email" name="email" onChange={(e) => setEmail(e.target.value)} /><br />
				<span className="prompt"> Correo no valido. </span></label>
			</div>

			<div className="form-group"><label> Contraseña<br />
				<input type="password" name="password" onChange={(e) => setPassword(e.target.value)} /> <br />
				<span className="prompt"> Contraseña no valida.</span></label>
			</div>
			

			<div className="form-group">
				<button type="submit" onClick={handleSignup}>Registrarme</button>
			</div>

		</div>

	);
}
export default Register