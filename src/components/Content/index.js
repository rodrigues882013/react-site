import React from "react";

import "./Content.scss";


export default class Content extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <main id="main" className="main">
        {this.props.content}
      </main>
		);
	}
}
