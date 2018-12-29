import React from 'react'; 

 

export default class Nav extends React.Component {
	render(){
		return (<div>
				<nav>
					<div>
						<a href="#" >Home</a>
						<a href="#" >Cursos</a>
						<a href="#" >Sobre</a>
					</div>
				</nav>

				<section>
					<div>
						<h1>Mostrando componente atraves do roteador</h1>
					</div>
				</section>

		</div>);
	}
}


