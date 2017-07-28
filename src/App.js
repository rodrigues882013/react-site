import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, IndexRoute, hashHistory } from "react-router-dom";

//Application Imports
import Index from "./views/Index";
import About from "./views/About";


//Styles
import "./App.scss";


const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>,
  app);
