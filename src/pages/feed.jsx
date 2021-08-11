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
	const [showNote, setShowNote] = useState(false)
	const [nameUser, setNameUser] = useState("")
	const [uid, setUid] = useState("")


	const handleCreatedNote = () => {
		setShowNote(true)
		console.log("crear nueva nota")
	}
	const handleCancelNote = () => {
		setShowNote(false)
		console.log("cerrar nueva nota")
	}
	const handleLogout = () => {
		firebase.auth().signOut()
			.then(() => {
				history.push('./')
			})
	}
	firebase.auth().onAuthStateChanged((user) => {
		if (!user) {
			history.push('/')
		} else {
			setNameUser(user.displayName)
			setUid(user.uid)
		}
	})

	return (
		<section className="container-notes">
			<div className="menu">
				<ul className="menu-opciones">
					<li> <h2> {nameUser}</h2> </li>
					<li> <button onClick={handleCreatedNote}> <i className="fas fa-plus"> </i> Añadir nota</button></li>
					<li> <button onClick={handleCancelNote}> Cancelar</button></li>
					<li> <button onClick={handleLogout}> Cerrar sesion</button> </li>
				</ul>
			</div>
			<NotesList
				show={showNote}
				uid={uid} />
		</section>
	);
}
export default Feed