import React from "react";

//Internal components
import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import Content from "../content/content.component";
import Navbar from "../navbar/navbar.component";

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
	  )
  }
}
