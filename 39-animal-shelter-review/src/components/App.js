import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
    // `<App />` should fetch a list of pets using `fetch()`
    console.log("executing cb: 'onFindPetsClick'")

    let url = `/api/pets`;

    if (this.state.filters.type !== "all") {
      url+=`?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })
  }


  onChangeType = (event) => {
    // This callback needs to update `<App />`'s `state.filters.type`
    console.log("executing cb: 'onChangeType'")

    let filtersCopy = JSON.parse(JSON.stringify(this.state.filters))

    filtersCopy.type = event.target.value

    this.setState({
      filters: filtersCopy
    }
)
  }

  onAdoptPet = (id) => {
    // This callback prop gets called with the pet's `id`
    console.log("executing cb: 'onAdoptPet'")

    let petsCopy = JSON.parse(JSON.stringify(this.state.pets))

    // let a = petsCopy.find(pet => {
    //   return pet.id === id
    // })
    //
    // a.isAdopted = true

    petsCopy.forEach(pet => {
      if (pet.id === id){
        pet.isAdopted = true
      }
    })

    this.setState({
      pets: petsCopy
    })


  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
