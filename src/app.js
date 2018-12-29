 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from './paginas/App';

 

// ReactDOM.render(<BrowserRouter history={hashHistory} >
// 					<Route path="/" component={App}  >
// 						<Route path="/cursos" component={Cursos} />
// 						<Route path="/sobre" component={Sobre} />
// 					</Route>
// 				</BrowserRouter>,
// 				document.getElementById("app"));



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
 document.getElementById("app")
);