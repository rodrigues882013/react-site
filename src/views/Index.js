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
      title: "Index",
      url: "http://images.huffingtonpost.com/2015-01-20-IdeasMakeorBreakYourBusiness.jpg",
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
