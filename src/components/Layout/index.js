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

  componentWillMount(){
    console.log("Montando")
  }

  componentDidMount(){
    console.log("Montado")
  }



  render(){
    return (
      <div>
        <Navbar />
        <Header />
        <Banner url={this.props.url}/>
	      <Content content={this.props.content}/>
	      <Footer />
	    </div>
	  );
  }
}
