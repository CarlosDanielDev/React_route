import React from 'react'; 
import { BrowserRouter, Route, Link, IndexLink } from 'react-router-dom';
 

export default class TopBar extends React.Component {
	render(){
		return (<nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
      
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/estabelecimentos">Estabelecimentos</Link>
          
            <div className="navbar-item has-dropdown is-hoverable">
            
              <Link  to="/" className="navbar-link" >Cidades</Link>
              <div className="navbar-dropdown">
              
                <Link className="navbar-item" to="/cidade/redencao" >Redenção</Link>

                <Link className="navbar-item" to="/cidade/palmas" >Palmas</Link>
                <Link className="navbar-item" to="/cidade/goiania" >Goiania</Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/queroNaminhacidade" >Quero na minha cidade!</Link>
              </div>
            </div>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                
                <Link className="button is-primary"  to="/singUp" > <strong>Sign up</strong></Link>
                <Link className="button is-light"  to="/login" >Log in</Link>
               
              </div>
            </div>
          </div>
        </div>
      </nav>);
	}
}


