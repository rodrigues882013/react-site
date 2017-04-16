/**
 * Created by felipe on 16/04/17.
 */


import React from "react";

//Application Imports
import Layout from "./../components/Layout";

export default class About extends React.Component {

  constructor(){
    super();
    this.state = {
      title: "About",
      url: "#",
      content: "Content"
    };
  }


  render(){
    return (
      <div>
        <Layout title={this.state.title}
                url={this.state.url}
                content={this.state.content}/>
      </div>
    );
  }
}
