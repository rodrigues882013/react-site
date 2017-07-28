import React from "react";
import Avatar from "../Avatar";

import "./Content.scss";


export default class Content extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <main id="main" className="main">
        <Avatar/>
        <article>
          Hello, welcome to my personal page.
        </article>

      </main>
		);
	}
}
