import React, { useState } from 'react';
import { useFirestore } from 'reactfire';
import '../style/Notes.css';
import '../../pages/style/pages.css'
import "firebase/firestore"

// import Notes from './notes';



export default function NotesList() {

	const db = useFirestore()
	const [values, setValue] = useState(inicialValues)
	const inicialValues = {
		title: "",
		descripcion: ""
	}
	
	const handleOnChange = (e) => {
		const { name, value } = e.target
		setValue({ ...values, [name]: value })

	}
	//Añadir notas a firestore
	const addNotes = async (notes) => {
		try {
			db.collection("Notes").add(notes)
		}
		catch (error) {
			console.log(error)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		addNotes(values);
		setValue(inicialValues)

	};

	return (
		<div className="note-list">
			{/* { notes.map((note)=>
					<Notes
					Title={note.Title}
					Descripcion={note.Descripcion}
					/>

				)} */}

			<form className="form-notes note" onSubmit={handleSubmit}>
				<input name="title" value={values.title} onChange={handleOnChange} className="titulo-nota" placeholder="Titulo..." />
				<textarea name="descripcion" value={values.descripcion} onChange={handleOnChange} className="Description-note" ></textarea>
				<input className="submit" value="ok" type="submit" />
			</form>

		</div>
	)
}

	// db.collection("Notes").add({
	// 	Title: "Ada",
	// 	Descripcion: "Lovelace",
	// 	//Date: 1815
	// })
	// .then((docRef) => {
	// 	console.log("Document written with ID: ", docRef.id);
	// })
	// if (currentId=== ""){
			// 	await db.collection("Notes").doc().set(notes);
			// }
			// else{
			// 	await db.collection("Notes").doc(currentId).update(notes);
			// setCurrentId("")
			// }