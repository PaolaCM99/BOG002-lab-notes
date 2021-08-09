import React from 'react';
import { useFirebaseApp } from 'reactfire';
import { useHistory } from 'react-router-dom';
import NotesList from '../components/notesList';
import '../components/style/Notes.css';
import 'firebase/auth';
import { useState } from 'react';

function Feed() {
	const history = useHistory()
	const firebase = useFirebaseApp();
	const [nameUser, setNameUser] = useState("")
	const handleCreatedNote = () => console.log("deberia mostrar el form de la nota", //{style={ display:block}}
	);

	const handleLogout = () => {
		firebase.auth().signOut()
			.then(() => {
				history.push('./')
			})
	}
	firebase.auth().onAuthStateChanged((user) => {
			if (!user) {
				history.push('./')
			}
			setNameUser(user.displayName)
		})
		 
	return (
			<section className="container-notes">
				<div className="menu">
					<ul className="menu-opciones">
						<li> <h2> {nameUser}</h2> </li>
						<li> <button onClick={handleCreatedNote}> <i className="fas fa-plus"> </i> Añadir nota</button></li>
						<li> <button  > Cancelar</button></li>
						<li> <button onClick={handleLogout}> Cerrar sesion</button> </li>
					</ul>
				</div>
				<NotesList />
			</section>
	);
}
export default Feed