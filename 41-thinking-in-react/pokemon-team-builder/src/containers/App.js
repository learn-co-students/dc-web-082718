import React, { Component } from 'react';
import '../App.css';
import PokemonTeam from './PokemonTeam'
import PokemonDetails from '../components/PokemonDetails'
import PokemonList from './PokemonList'

const URL = `http://localhost:3000/pokemon`

class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedPokemon: null,
      team: [],
      allPokemon: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        allPokemon: data
      })
    })
  }

  onSelectPokemon = (id) => {
    fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        selectedPokemon: data
      })
    })
  }

  onAddToTeam = (name) => {
    let existingPokemon = this.state.team.find(pokemon => pokemon.name === name)
    let newRecruit = this.state.allPokemon.find(pokemon => pokemon.name === name)
    if(this.state.team.length < 6 && existingPokemon === undefined){
      this.setState({
        team: [...this.state.team, newRecruit]
      })
    }
  }

  onRemoveFromTeam = (name) => {
    let newArray = [...this.state.team]
    let index = newArray.findIndex(pokemon => pokemon.name === name)
    newArray.splice(index, 1)
    this.setState({
      team: newArray
    })
  }

  render() {
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <h3>My Team:</h3>
        <PokemonList
          pokemonToRender={this.state.team}
          onDragOfCard={this.onRemoveFromTeam}
          onClickOfPokemon={this.onSelectPokemon}
        />
        <PokemonDetails pokemon={this.state.selectedPokemon}/>
        <h3>All Pokemon:</h3>
        <PokemonList
          pokemonToRender={this.state.allPokemon}
          onDragOfCard={this.onAddToTeam}
          onClickOfPokemon={this.onSelectPokemon}
        />
      </div>
    );
  }
}

export default App;
