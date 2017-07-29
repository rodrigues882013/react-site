import React from "react";

import "./Avatar.scss";
import img from './Images/eu.jpg';


export default class Avatar extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
        <img className="avatar_image" src={img} />
    );
  }
}