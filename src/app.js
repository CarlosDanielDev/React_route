import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom'

import App from './components/App';
import Cursos from './components/Cursos';
import Sobre from './components/Sobre';



ReactDOM.render(
	<BrowserRouter history={hashHistory} >
		<Route path="/" component={App}  >
			<Route path="/cursos" component={Cursos} />
			<Route path="/sobre" component={Sobre} />
		</Route>
	</BrowserRouter>,
	document.getElementById("app")
	);