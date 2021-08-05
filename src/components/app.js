import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/home.jsx'
import Register from '../pages/register.jsx'
import Feed from '../pages/feed'
import Layout from './layout.js';
import NoFound from '../pages/NoFound.jsx';
import 'firebase/auth';


function App() {


	return (
		<Router>
			<Layout>
				<Switch >
					<Route exact path='/' component={Home} />
					<Route path="/register" component={Register} />
					<Route path="/feed" component={Feed} />
					<Route component={NoFound} />
				</Switch>
			</Layout>
		</Router>
	);
}
export default App