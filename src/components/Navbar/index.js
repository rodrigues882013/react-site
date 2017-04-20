import React from "react";
import Sidebar from "../Sidebar";

import "./Navbar.scss";


export default class Navbar extends React.Component {

	constructor(){
		super();
	}

	render(){
    return(
      <nav id="navbar" className="navbar">
        <span className="btnOpen" onClick={Sidebar.openSideBar}>&#9776; </span>
      </nav>
    )
	}
}
