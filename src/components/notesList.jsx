import React, { useState, useEffect } from 'react';
import { useFirestore } from 'reactfire';
import './style/Notes.css';
import '../pages/style/pages.css'
import "firebase/firestore"
// import Notes from './notes';

export default function NotesList() {

	const inicialValues = {
		title: "",
		descripcion: ""
	}
	const db = useFirestore()
	const [values, setValue] = useState(inicialValues);
	const [notes, setNotes] = useState([]);

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
	//Mostrar notas
	const getNotes = async () => {
		await db.collection("Notes").onSnapshot(querySnapshot => {
			console.log(querySnapshot) 
			const arrayData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
			// console.log(arrayData) 
			setNotes(arrayData)
		})
	}


	useEffect(() => getNotes(), [])

	const deletedNotes = async (id) => db.collection("Notes").doc(id).delete()

	return (
		<div className="note-list">
			<form className="form-notes note" onSubmit={handleSubmit}>
				<div>
					<input name="title" value={values.title} onChange={handleOnChange} className="titulo-nota title-form-note" placeholder="Titulo..." autoComplete="off" />
					<textarea name="descripcion" value={values.descripcion} onChange={handleOnChange} placeholder="Escribe una nota..." className="description-note" ></textarea>
				</div>
				<div>
					<button className="submit" value="guardar" type="submit">Guardar</button>
				</div>
			</form>

			{notes.map((note) =>
				<div className="note" key={note.id}>
					<span className="titulo-nota" type="text" placeholder="Titulo">
						<h5> {note.title}</h5>
						<button className="borrar" onClick={() => deletedNotes(note.id)}><i className="fas fa-times" ></i></button>
					</span>
					<span className="descripcion-nota" placeholder="Escribe tu nota..." > {note.descripcion} </span>
					<div>
						<span className="fecha-nota"> fecha </span>
					</div>
				</div>
			)}
		</div>
	)
}


/*
				<i class="fas fa-chevron-circle-down"></i>
				<i class="fas fa-trash-alt"></i>  <i class="fas fa-pencil-alt"></i> */
// https://github.com/Astridp85/BOG002-dev-note/blob/funcionalidades/src/components/Home.js
