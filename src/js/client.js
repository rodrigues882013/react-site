import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, IndexRoute, hashHistory } from "react-router-dom";

//Application Imports
import Layout from "./components/layout/layout.component";
import Dashboard from "./components/dashboard/dashboard.component";

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
	  <div>
	    <Route exact path="/" component={Layout} />
		  <Route path="/dashboard" component={Dashboard} />
	  </div>
	</Router>,
app);
