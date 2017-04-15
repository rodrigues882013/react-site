import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, IndexRoute, hashHistory } from "react-router-dom";

//Application Imports
import Layout from "./components/Layout";

//Styles
import "./App.sass"


const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Layout} />
	  </div>
	</Router>,
app);
