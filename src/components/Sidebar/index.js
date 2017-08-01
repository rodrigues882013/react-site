/**
 * Created by felipe on 16/04/17.
 */

//React imports
import React from "react";
import { Link } from "react-router-dom";

//External dependencies
import "lodash";

//Style import is necessary to sass-loader
import "./Sidebar.scss";

//Elements to hide on expansion of sidebar.
const elementIds = ["main", "navbar", "footer"];

export default class Sidebar extends React.Component {

  constructor(){
    super();
  }

  closeSideBar(){
    document.getElementById("sidebar").style.width = "0";
    _.each(elementIds, element => document.getElementById(element).style.marginLeft= "0");
  }

  static openSideBar(){
    document.getElementById("sidebar").style.width = "250px";
    _.each(elementIds, element => document.getElementById(element).style.marginLeft= "250px");

  }

  render(){
    return (
      <div id="sidebar" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeSideBar}>&times;</a>
        <Link className="item" to="/" onClick={this.closeSideBar}>Home</Link>
        <Link className="item" to="about" onClick={this.closeSideBar}>About</Link>
      </div>
    );
  }
}
