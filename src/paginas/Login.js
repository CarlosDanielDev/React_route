import React from 'react'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
 

export default class Login extends React.Component {
	render(){
		return (<div className="container">
                   <div className="box boxLogin">
			 
						<form action="/admin">
							<input className="input is-rounded" type="text" placeholder="Rounded input" />
							<input className="input is-rounded" type="text" placeholder="Rounded input" />
						<input className="button is-primary" type="submit" value="Submit" />
						</form>


				 		 
					</div>

			  </div>);
	}
}


