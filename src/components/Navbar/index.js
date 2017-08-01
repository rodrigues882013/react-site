import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";


import "./Navbar.scss";


export default class Navbar extends React.Component {

	constructor(){
    super();
    this.state = {
      selected: ''
    };
  }

  componentDidMount(){
    console.log(this.props.page)
    this.setActive(this.props.page);
  }
  
  setActive(selected){
    this.setState({selected: selected});
  }

  isActive(value){
    return ((value===this.state.selected) ? 'active' : '');
  }

	render(){
    return(
      <nav id="navbar" className="navbar">
        <ul className="topnav">
          <li><Link to="/" className={this.isActive('home')} onClick={this.setActive.bind(this, 'home')}>Home</Link></li>
          <li><Link to="about" className={this.isActive('about')} onClick={this.setActive.bind(this, 'about')}>About</Link></li>
        </ul>
      </nav>
    );
	}
}
