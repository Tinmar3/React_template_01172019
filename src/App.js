import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main.js";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}

export default App;
