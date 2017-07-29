import React from "react";

import _ from "lodash";
import axios from "axios";

import Avatar from "../Avatar";


import "./Content.scss";


export default class Content extends React.Component {

  constructor(){
    super();
    
  }

  componentDidMount(){
    getContent();
  }

  getContent(){
    axios
      .get()
      .then( res => {

      }, err => console.error(err));
  }

  render(){
    return (
      <main id="main" className="main">
        <Avatar/>
        <article>
          {this.props.content}
        </article>

      </main>
		);
	}
}
