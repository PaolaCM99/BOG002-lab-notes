import React from 'react'
import './style/pages.css';
import Error404 from './img/Error404.svg'
function NoFound(){
 return(
	 
	 <h1 className="NoFound">
		 404: Not found
		 <img alt="Error 404"src={Error404}/>
	 </h1>
 )
}
export default NoFound