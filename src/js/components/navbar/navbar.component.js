import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {

	constructor(){
		super();
	}


	render(){
		return (
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active"><Link to="">Home</Link></li>
              <li><Link to="dashboard">Dashboard</Link></li>
            </ul>
          </div>
        </div>
      </nav>
		)
	}
}
