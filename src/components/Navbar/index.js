import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";


export default class Navbar extends React.Component {

	constructor(){
		super();
	}

	openSideBar(){
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

	render(){
		// return (
     //  <nav className="navbar">
     //    <div id="navbar" className="collapse navbar-collapse">
     //      <ul className="nav navbar-nav">
     //        <li className="active"><Link to="">Home</Link></li>
     //        <li><Link to="about">About</Link></li>
     //      </ul>
     //    </div>
     //  </nav>
		// )
    return(
      <nav className="navbar">
        <span className="btnOpen" onClick={this.openSideBar}>&#9776; </span>
      </nav>
    )
	}
}
