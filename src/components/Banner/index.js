/**
 * Created by felipe on 16/04/17.
 */

import React from "react";

import "./Banner.scss";

export default class Banner extends React.Component {

  constructor(){
    super();
  }

  getUrlBaner(){
    return this.props.url;
  }

  render(){
    return (
      <div className="banner">
        <img className="image" src={`${this.props.url}`}/>
      </div>
    );
  }
}
