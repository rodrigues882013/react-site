/**
 * Created by felipe on 16/04/17.
 */

import React from "react";

//Application Imports
import Layout from "./../components/Layout";

export default class Index extends React.Component {

  constructor(){
    super();
    this.state = {
      content: "home"
    };
  }


  render(){
    return (
      <div>
        <Layout content={this.state.content}/>
      </div>
    );
  }
}
