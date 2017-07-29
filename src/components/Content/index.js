import React from "react";

import _ from "lodash";
import axios from "axios";

import Avatar from "../Avatar";


import "./Content.scss";


export default class Content extends React.Component {

  constructor(){
    super();
    this.content = "";
    
  }

  componentDidMount(){
    this.getContent(this.props.content);
  }

  getContent(page){
    axios
      .get('https://raw.githubusercontent.com/rodrigues882013/react-site/master/messages.json')
      .then( res => {
        console.log(res.data[page]);
      }, err => console.error(err));
  }

  render(){
    return (
      <main id="main" className="main">
        <Avatar/>
        <article>
          {this.content}
        </article>

      </main>
		);
	}
}
