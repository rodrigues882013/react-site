import React from "react";

import "./Layout.scss";


//Internal components
import Header from "../Header";
import Footer from "../Footer";
import Content from "../Content";
import Banner from "../Banner";
import Sidebar from "../Sidebar";


export default class Layout extends React.Component {
  constructor(){
    super();
  }



  render(){
    return (
      <div>
        <Sidebar />
        <Header />
        <Content content={this.props.content}/>
	      <Footer />
	    </div>
	  );
  }
}
