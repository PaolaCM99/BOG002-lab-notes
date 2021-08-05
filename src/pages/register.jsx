import React from 'react';
import './style/pages.css';
import Form from '../components/formRegister'
import Footer from '../components/footer'


class Register extends React.Component {
	
	render() {
		return (
			<React.Fragment>
				<Form />
				<Footer />
			</React.Fragment>
		);
	}
}
export default Register