import React from 'react';
import './style/pages.css';
import Form from '../components/form'
import Footer from '../components/footer'

class Register extends React.Component{
	render(){
		return(
			<React.Fragment>
				<div className="container-register">
					<Form/>	
				</div>
				<Footer/>	
			</React.Fragment>
		);
	}
}
export default Register