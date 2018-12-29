

import React from 'react'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Admin from './Admin';
import Rotas from '../routes/Rotas';



export default class App extends React.Component {
	constructor(props){
		super(props)

	}

 

	render(){
		return (<div className="container">
				
					<Rotas />
				
			  </div>);
	}
}


