import React from 'react'
import './sideBar.css'
import SideBarItem from './SideBarItem'
import SideBarItemHome from './sideBarItemHome'
import SideBarPred from './sideBarPred'

// o sidebar é o menu lateral da página, onde fica os links para as outras páginas
// ele é composto por uma lista de SideBarItem
// cada SideBarItem é um link para uma página
// o SideBarItemHome é um link para a página inicial

function SideBar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav">
                <SideBarItemHome/>
                {/* <SideBarItem nome="Tubercolose" icon={<i className="bi bi-lungs-fill"></i>} path="TB"/>
                <SideBarItem nome="TB/HIV" icon={<i className="bi bi-virus2"></i>} path="HIV"/>
                <SideBarItem nome="Mapas" icon={<i className="bi bi-globe-americas"></i>} path="Maps"/> */}
                <SideBarPred/>
            </ul>
        </aside>
    );
};

export default SideBar;