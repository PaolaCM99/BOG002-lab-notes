// import { useState, useEffect} from 'react'
// import firebaseI from './config'
// import Form from '../components/form'
// import React from 'react'


// const Auth = () =>{
// 	const [user, setUser]   = useState("");
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword]     = useState("");
// 	const [emailError, setEmailError] = useState("");
// 	const [passwordError, setPasswordError] = useState("")
// 	const [hasAccount, setHasAccount]      = useState(false);

// 	const handleLogin =()=>{
// 		firebaseI
// 		.auth()
// 		.signInWithEmailAndPassword(email, password)
// 		.catch(error =>{ console.log(error)})
// 	}



// 	useEffect(() => {
// 		authListener();
// 	  },[]);
// 	const handleLogOut =()=>{
// 		firebaseI
// 		.auth()
// 		.signOut()
// 		.catch(error =>{
// 			setEmailError(error)
// 			setPasswordError(error)})
// 	}

// 	const handleState =()=>{
// 		firebaseI
// 		.auth()
// 		.onAuthStateChanged((user) =>{
// 			if(user) setUser(user)
// 			else setUser("")
// 		})
// 	}
	
// 	return(
// 		<div>
// 			<Form 
// 		user ={user} setUser={ setUser} 
// 		email={email} setEmail={setEmail}
// 		password={password} setPassword={setPassword}
// 		handleSignup ={handleSignup}
// 		handleLogin ={handleLogin}
// 		hasAccount={hasAccount} setHasAccount={setHasAccount}
// 		emailError={emailError}
// 		passwordError={passwordError}
// 		/>
// 		</div>
		
// 	)
// }
// export default Auth