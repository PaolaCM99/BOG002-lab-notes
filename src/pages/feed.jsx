import React from 'react';
import { useFirebaseApp } from 'reactfire';
import { useHistory } from 'react-router-dom';
import NotesList from '../components/notesList';
import '../components/style/Notes.css';
import 'firebase/auth';

function Feed() {
	const history = useHistory()
	const firebase = useFirebaseApp();
	// const [user, setUser] = useState(null)
	const handleCreatedNote = () => console.log("deberia crear una nota");
	// const handleHidden=()=> {style={ display:none}}

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
		})

	return (
			<section className="container-notes">
				<div className="menu">
					<ul className="menu-opciones">
						<li> <h2> Nombre de usuario</h2> </li>
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