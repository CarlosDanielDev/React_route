import React from 'react'; 
import { BrowserRouter, Route, IndexRoute, Link } from 'react-router-dom';
 

import Home from '../paginas/Home';
import Estabelecimentos from '../paginas/Estabelecimentos';
import Cidade from '../paginas/Cidade';
import SingUp from '../paginas/SingUp';
import Login from '../paginas/Login';

import Admin from '../paginas/Admin';

export default class Rotas extends React.Component {
	render(){
		return (<div>
					{/* <IndexRoute component={Home} /> */}
					<Route exact path="/" component={Home} />
					<Route path="/estabelecimentos" component={Estabelecimentos} />
					<Route path="/cidade" component={Cidade} />
					<Route path="/singUp" component={SingUp} />
					<Route path="/login" component={Login} />

					<Route path="/admin" component={Admin} />

			  </div>);
	}
}


