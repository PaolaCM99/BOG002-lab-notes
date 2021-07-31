import React from 'react';
import './style/components.css';
import { useState } from 'react'
import 'firebase/auth';
import { useFirebaseApp} from 'reactfire';
import { useHistory } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default  function Login(props) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const firebase = useFirebaseApp()
	const history = useHistory();

	const handleLogin = async () => {
		await firebase.auth().signInWithEmailAndPassword(email, password)
			.then((credential) => {
				history.push("/feed");
				
			})
			.catch((e) => console.log(e.code))
	}

	return (
		

		<div className="form-login">
			
			<div className="form-group-login"> <label> Correo electronico<br />
				<input className="input-login"type="email" name="email" onChange={(e) => setEmail(e.target.value)} /><br />
				<span className="prompt"> Correo no valido. </span></label>
			</div>

			<div className="form-group-login"><label> Contraseña<br />
				<input className="input-login" type="password" name="password" onChange={(e) => setPassword(e.target.value)} /> <br />
				<span className="prompt"> Contraseña no valida.</span></label>
			</div>
			<Button className="btn-primary" variant="primary" onClick={handleLogin}>
								Iniciar sesion
			</Button>

		</div>

	);
}
