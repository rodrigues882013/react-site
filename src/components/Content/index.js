import React from "react";

import "./Content.scss";


export default class Content extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
     <div>
       {this.props.content}
     </div>
		);
	}
}
