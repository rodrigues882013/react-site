import React from "react";

import "./Layout.scss";


//Internal components
import Header from "../Header";
import Footer from "../Footer";
import Content from "../Content";
import Navbar from "../Navbar";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {title: "React Tutorial"};
  }

  changeTitle(title){
    this.setState({title});
  }

  render(){
    return (
      <div>
        <Navbar />
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
	      <Content />
	      <Footer />
	    </div>
	  );
  }
}
