import React from 'react';
import '../components/style/components.css';
import Footer from '../components/footer'

class Home extends React.Component{
	render(){
		return(
			<React.Fragment>
				<h1 className = "container_title">
					 <span>Planifica,</span> <br/>
					 <span>escribe y ejecuta.</span></h1>
				<Footer/>	
			</React.Fragment>
		)
	}
}
export default Home