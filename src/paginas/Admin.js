

import React from 'react'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button, SideNav, SideNavItem } from 'react-materialize';

export default class Admin extends React.Component {
	render(){
		return (<div className="container">
                  <SideNav
						trigger={
						<div className={this.props.style}>
							<i className="material-icons">menu</i>
						</div>}
						options={{ closeOnClick: true }}
						>
  
 

            <SideNavItem userView className=""
            user={{
              image: 'imgs/Bg_Illustration.jpg',
              name: 'John Doe',
            }}
          />
		  
          <SideNavItem divider />
         <SideNavItem    icon='map'>Mapa</SideNavItem>
         <SideNavItem divider />
         <SideNavItem    icon='store'>Estabelecimentos</SideNavItem>
        <SideNavItem divider />
        <SideNavItem    icon='receipt'>Historico</SideNavItem>
        <SideNavItem divider />
        <SideNavItem icon='settings'>Configurações</SideNavItem>
        <SideNavItem divider />
        <SideNavItem   icon='directions_bike'>Quero ser motoboy</SideNavItem>
        <SideNavItem divider />
        <SideNavItem   icon='help_outline'>Ajuda</SideNavItem>
        <SideNavItem divider />
        <SideNavItem   icon='close'>Sair</SideNavItem>
        <SideNavItem divider />
        {/* <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem> */}
        </SideNav>



                      adminnitração
				
			  </div>);
	}
}


