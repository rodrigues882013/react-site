/**
 * Created by felipe on 16/04/17.
 */

import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";


export default class Sidebar extends React.Component {

  constructor(){
    super();
  }

  closeSideBar(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("content").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

  render(){
    return (
      <div id="sidebar" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeSideBar}>&times;</a>
        <Link to="/" onClick={this.closeSideBar}>Home</Link>
        <Link to="about" onClick={this.closeSideBar}>About</Link>
      </div>
    )
  }
}
