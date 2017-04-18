import React from "react";

import "./Layout.scss";


//Internal components
import Header from "../Header";
import Footer from "../Footer";
import Content from "../Content";
import Navbar from "../Navbar";
import Banner from "../Banner";

export default class Layout extends React.Component {
  constructor(){
    super();
  }



  render(){
    return (
      <div>
        <Navbar />
        <Header />
        <Banner url={this.props.url}/>
        <div className="row">
          <Content content={this.props.content}/>
        </div>
	      <Footer />
	    </div>
	  );
  }
}
