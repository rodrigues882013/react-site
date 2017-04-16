import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";


export default class Navbar extends React.Component {

	constructor(){
		super();
	}


	render(){
		return (
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">

          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active"><Link to="">Home</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
		)
	}
}
