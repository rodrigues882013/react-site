import React from "react";

export default class Header extends React.Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.changeTitle(e.target.value);
	}

	render(){
		return (
			<div>
				<header> {this.props.title} </header>
				<div>
					<input type="text" value={this.props.title} onChange={this.handleChange}/>
				</div>
			</div>
		)
	}
}
