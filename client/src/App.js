import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/nav";
import Wrapper from "./components/Wrapper";


import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";
import Jumbotron from "./components/jumbotron";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Jumbotron />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
