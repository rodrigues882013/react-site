import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";


export default class Navbar extends React.Component {

	constructor(){
		super();
	}


	render(){
		return (
      <nav className="navbar">
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
      </nav>
		)
	}
}
