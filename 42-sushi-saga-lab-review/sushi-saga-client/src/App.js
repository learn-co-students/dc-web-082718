import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super();

    this.state={
      wallet:85,
      sushis:[],
      indexOfFirstOfFour:0,
      eatenSushiIDs: []

    }
  }

  componentDidMount(){
    fetch(API)
    .then(r=> r.json())
    .then(sushiData => {
      this.setState({
        sushis: sushiData
      })
    })
  }

  nextFour = () => {
    console.log("next four")
    this.setState({
      indexOfFirstOfFour: this.state.indexOfFirstOfFour + 4
    })
  }

  eatSushi = (sushiObj) => {
    console.log("eatSushi()")
    // make plate empty in SushiContainer

    // add emplty plate to the table
      // add sushi ID to this.state.eatenSushiIDs
      if (this.state.wallet - sushiObj.price >= 0) {
        let eatenSushiIDsCopy = [...this.state.eatenSushiIDs]

        eatenSushiIDsCopy.push(sushiObj.id)

        this.setState({
          eatenSushiIDs: eatenSushiIDsCopy,
          wallet: this.state.wallet - sushiObj.price
        })

      } else {
        alert("Sorry, cannot open a tab!")
      }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatenSushiIDs={this.state.eatenSushiIDs} eatSushi={this.eatSushi} nextFour={this.nextFour} sushiToRender={this.state.sushis.slice(this.state.indexOfFirstOfFour, this.state.indexOfFirstOfFour+4)}/>
        <Table eatenSushiIDs={this.state.eatenSushiIDs} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
