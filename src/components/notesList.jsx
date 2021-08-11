import React, { useState, useEffect } from 'react';
import { useFirestore } from 'reactfire';
import './style/Notes.css';
import '../pages/style/pages.css'
import "firebase/firestore"

export default function NotesList(props) {

	const { show, uid } = props;

	let date = new Date().toLocaleDateString("en-GB", {
		hour: "2-digit",
		minute: "2-digit"
	})

	const inicialValues = {
		title: "",
		descripcion: "",
		date: date,
		uid: uid
	}


	const db = useFirestore()
	const [values, setValue] = useState(inicialValues);
	const [notes, setNotes] = useState([]);
	const [noteId, setNoteId] = useState('');

	const handleOnChange = (e) => {
		const { name, value } = e.target
		setValue({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		addNotes(values);
		setValue(inicialValues)
	};

	//Añadir y editar notas a firestore
	const addNotes = async (notes) => {
		try {
			if (noteId === "") {
				db.collection("Notes").add(notes)
			} else {
				db.collection('Notes').doc(noteId).update(notes);
				setNoteId("")
			}
		}
		catch (error) { console.error(error) }
	}
	const noteById = async (id) => {
		const doc = await db.collection('Notes').doc(id).get();
		setValue({ ...doc.data() })//  valores del formulario para editar

	}


	//UseEffect para editar
	useEffect(() => {
		if (noteId === '') {
			setValue(inicialValues)
		} else {
			noteById(noteId)
		}

	}, [noteId])

	//Borra notas
	const deletedNotes = async (id) => await db.collection("Notes").doc(id).delete()

	//Mostrar notas
	const getNotes = () => {
		console.log(uid)
		db.collection("Notes")
			// .where("uid", "==", uid)
			.orderBy("date", "desc")
			.onSnapshot(querySnapshot => {
				const arrayNotes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
				setNotes(arrayNotes)
			})
	}

	useEffect(() => { getNotes() }, [uid]);

	return (
		<div className="note-list">
			{show && (
				<form className="form-notes note" onSubmit={handleSubmit}>

					<div>
						<input name="title" value={values.title} onChange={handleOnChange} className="titulo-nota title-form-note" placeholder="Titulo..." autoComplete="off" />
						<textarea name="descripcion" value={values.descripcion} onChange={handleOnChange}
							placeholder="Escribe una nota..." className="description-note" ></textarea>
						<p name="date" value={values.date} onChange={handleOnChange} className="fecha-nota"> </p>
						<p name="uid" value={values.iud} onChange={handleOnChange} className="iud"> </p>
					</div>

					<button className="submit" value="guardar" type="submit"> {noteId === '' ? ' guardar' : 'Actualizar'}</button>
				</form>)}



			{notes.map((note) =>

				<div className="note" key={note.id}>

					<span className="titulo-nota" type="text" placeholder="Titulo">
						<h5> {note.title}</h5>
						<button className="borrar" onClick={() => deletedNotes(note.id)}>
							<i className="fas fa-times" ></i>
						</button>
					</span>

					<span className="descripcion-nota" placeholder="Escribe tu nota..." > {note.descripcion} </span>
					<div className="footer-note">
						<span className="fecha-nota"> {note.date} </span>
						<i className="fas fa-pencil-alt" onClick={() => setNoteId(note.id)}></i>
					</div>
				</div>
			)}
		</div>
	)
}

