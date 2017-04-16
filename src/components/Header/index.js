import React from "react";

import "./Header.scss";


export default class Header extends React.Component {
  constructor(){
    super();
  }


  render(){
    return (
      <div>
      <header> {this.props.title} </header>
      </div>

	  );
  }
}
