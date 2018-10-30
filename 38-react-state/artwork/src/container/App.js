import React, { Component } from 'react';
import '../App.css';
import CardContainer from './CardContainer'
import Nav from '../component/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav
        title="Paintr"
        tagline="List of Paintings"
        icon="paint brush"
        color="blue"
        />
        <CardContainer />
      </div>
    );
  }
}

export default App;
