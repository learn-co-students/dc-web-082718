import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import Searchbar from './Searchbar'
import PaintingDetails from './PaintingDetails'
import About from './About'
import {Route, Link} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: '',
        selectedPainting: null
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        paintingsList: json
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onSelectPainting = (event) => {
    let paintingId = event.target.dataset.paintingId
    let selectedPainting = this.state.paintingsList.find(painting => painting.id === paintingId)
    this.setState({
      selectedPainting: selectedPainting
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>
        <Route exact path='/' component={About}/>
        <Route path='/paintings/:id' render={(props)=> {
          let paintingId = props.match.params.id
          let painting = this.state.paintingsList.find(painting => painting.id === paintingId)
          return <PaintingDetails painting={painting}/>
        }} />
        <Route exact path='/paintings' render={()=>{
          return(<div>
            <Searchbar onChangeHandler={this.onSearchHandler} value={this.state.searchTerm}/>
            <PaintingsList
              filterTerm={this.state.searchTerm}
              paintings={this.state.paintingsList}
              onSelectPainting={this.onSelectPainting}
            /></div>
          )
        }}/>
      </div>
    );
  }
}

export default App;
