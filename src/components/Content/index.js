import React from "react";

import "./Content.scss";


export default class Content extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="col-12 col-m-12">
        {this.props.content}
      </div>
		);
	}
}
