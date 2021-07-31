
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app'
import firebaseConfig from './firebase/config';
import { FirebaseAppProvider } from 'reactfire';


const container = document.getElementById("root");

ReactDOM.render((
	<FirebaseAppProvider firebaseConfig={firebaseConfig}>
		<Suspense fallback={'Cargando...'}>
			<App />
		</Suspense>
	</FirebaseAppProvider>), container);

