import React from 'react';
import '../style/Notes.css';
// import notesList from './notesList';

export default function Notes({Title, Descripcion}) {
	return (
		<div className="note">
		
			<span className="titulo-nota" type="text" placeholder="Titulo"> <h5> {Title}</h5></span>
			<span className="descripcion-nota" placeholder="Escribe tu nota..." > {Descripcion} </span>
			<span className="fecha-nota"> fecha </span>
		</div>
	)
}