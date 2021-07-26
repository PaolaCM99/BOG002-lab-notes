import React from 'react';
import './style/components.css';
class form extends React.Component {
	handleSubmit(e) {
		e.preventDefault()
		console.log("boton para enviar");

	}
	render() {
		return (

			<form className="form">
				<h1 className="titulo_registro"> Crear una cuenta</h1>
				<div className="form-group">
					<label> Nombre de usuario <br/><input type="text" id="name" name="user_name" /> <br/>
					<span className="prompt"> Maximo 30 caracteres, puedes usar letras y numeros.</span></label> 
				</div>

				<div className="form-group"> <label> Correo electronico<br/><input type="email" id="email" /><br/>
					<span className="prompt"> Correo no valido.</span></label>
				</div>

				<div className="form-group"><label> Contraseña<br/><input type="password" id="password"/> <br/>
					<span className="prompt"> Contraseña no valida.</span></label> 
				</div>

				<div className="form-group"><label> Confirmar contraseña<br/><input type="password" id="password"/> <br/> <span className="prompt">No coincide con la anterior contraseña.</span></label> 
					
				</div>
				<div className="form-group"><button type="submit" onClick={this.handleSubmit}>Registrarme</button></div>
				
			</form>

		);
	}
}
export default form