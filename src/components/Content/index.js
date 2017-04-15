import React from "react";

import "./Content.scss";


export default class Content extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
     <div class="container">
       <div class="row">
         <div class="col-md-12">
            Hellor world
         </div>
       </div>
     </div>
		);
	}
}
