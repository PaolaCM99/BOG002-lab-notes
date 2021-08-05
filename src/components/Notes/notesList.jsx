import React from 'react';
import '../style/Notes.css';
import '../../pages/style/pages.css'
import "firebase/firestore"
import {  useFirestore } from 'reactfire';
// import Notes from './notes';
import { useState } from 'react';


export default function NotesList() {
	const db = useFirestore()
	const [values, setValue]= useState({
		title:"",
		descripcion:""
	})
	const handleOnChange= (e)=>{
		const { name, value } = e.target
		setValue({...values, [name]: value})
		
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		db.collection("Notes").add({
			name: "PRUEBA",
			descripcion: "Prueba"
		})
		.then((docRef) => {
			console.log("Document written with ID: ", docRef.id);
		})
		
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
				<input name="title" value={values.title} onChange={handleOnChange}className="titulo-nota" placeholder="Titulo..."/>
				<textarea name="descripcion" value={values.descripcion} onChange={handleOnChange} className="Description-note" ></textarea>
				<input className="submit" value="ok" type="submit"/> 
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