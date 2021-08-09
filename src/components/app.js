import React from 'react'
// import { useFirebaseApp } from 'reactfire';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/home.jsx'
import Register from '../pages/register.jsx'
import Feed from '../pages/feed'
import Layout from './layout.js';
import NoFound from '../pages/NoFound.jsx';
import 'firebase/auth';

// , withRouter

function App(props) {
	// const history = useHistory()
	// const firebase = useFirebaseApp();
	// const [user, setUser] = useState(null)

	// useEffect(()=>{
	// 	if(firebase.auth().currentUser){
	// 		console.log("existe usuario", firebase.auth().currentUser)
	// 		setUser(firebase.auth().currentUser)
	// 	}
	// 	else{
	// 		console.log("si existe")
	// 		props.history.push('./')
	// 	}
	// }, [props.history])
	// firebase.auth().onAuthStateChanged((user) => {
	// 	if (!user) {
	// 		history.push('./')
	// 	}
	// })

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