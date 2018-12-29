import React from 'react'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

export default class Estabelecimentos extends React.Component {
	render(){
		return (<div>
			<TopBar />
		
		<div className="container">
		Estabelecimentos
		</div>
	  </div>);
	}
}


