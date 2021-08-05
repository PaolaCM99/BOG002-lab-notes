import React from 'react';
import '../components/style/Notes.css';

import 'firebase/auth';
import { useFirebaseApp} from 'reactfire';
import { useHistory } from 'react-router-dom';
import NotesList from '../components/Notes/notesList';
// import { useState } from 'react';


function Feed () {
	
	const history= useHistory()
	const firebase = useFirebaseApp();
	const handleCreatedNote = () => console.log("deberia crear una nota");
	

	firebase.auth().onAuthStateChanged((user) => {
		if (!user) {
			history.push('./')
		}

	})

	const handleLogout = () => {
        firebase.auth().signOut()
        .then(() => {
            history.push('./')
        })
    }


		return (
			<section className="container-notes">
				<div className="menu">
					<ul className="menu-opciones">
						<li> <h2> Nombre de usuario</h2> </li>
						<li> <button onClick={handleCreatedNote}> <i className="fas fa-plus"> </i> Añadir nota</button></li>
						<li> <button > Cancelar</button></li>
						<li> <button onClick={handleLogout}> Cerrar sesion</button> </li>
					</ul>
				</div>
				<NotesList/>
			</section>
		);
}
export default Feed