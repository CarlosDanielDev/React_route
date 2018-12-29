import React from 'react'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

export default class Login extends React.Component {
	render(){
		return (
			<div>
			<TopBar />
		
		<div className="container">
                   <div className="box boxLogin">
			 
						<form action="/admin">
							<input className="input is-rounded" type="text" placeholder="Rounded input" />
							<input className="input is-rounded" type="text" placeholder="Rounded input" />
						<input className="button is-primary" type="submit" value="Submit" />
						</form>


				 		 
					</div>
					</div>
			  </div>);
	}
}


