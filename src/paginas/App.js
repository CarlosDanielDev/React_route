

import React from 'react'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Admin from './Admin';
import Rotas from '../routes/Rotas';
import TopBar from '../components/TopBar';


export default class App extends React.Component {
	constructor(props){
		super(props)

	}

 

	render(){
		return (<div className="container">
					<TopBar />
					<Rotas />
				
			  </div>);
	}
}


