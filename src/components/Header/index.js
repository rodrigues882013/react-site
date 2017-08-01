import React from "react";
import Navbar from "../Navbar";


import "./Header.scss";


export default class Header extends React.Component {
  constructor(){
    super();
  }

  


  render(){
    return (
      <header>
        <Navbar page={ this.props.page} />
      </header>
	  );
  }
}
