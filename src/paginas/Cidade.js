import React from 'react'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

export default class Cidade extends React.Component {
	render(){
		return (	<div>
			<TopBar />
		
		<div className="container">
		Cidades
		</div>
	  </div>);
	}
}


