import React, { Component } from "react";
import pig from "./pig.png";
import "./App.css";

import PigContainer from "./PigContainer";

class App extends Component {
  state = {
    pigs: []
  };
  componentDidMount() {
    // console.log(process.env);
    const URL = `https://hogblog-backend.herokuapp.com/hogs`;
    fetch(URL)
      .then(res => res.json())
      .then(pigs =>
        this.setState({
          pigs
        })
      );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pig} className="App-logo" alt="logo" />
          <h1>Welcome to hog.blog</h1>
          <PigContainer pigs={this.state.pigs} />
        </header>
      </div>
    );
  }
}

export default App;
