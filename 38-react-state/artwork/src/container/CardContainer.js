import React, {Component} from 'react'
import Card from '../component/Card'
import Searchbar from '../component/Searchbar'
import paintings from '../data/paintings'
import CardDetails from '../component/CardDetails'

// const paintings = [
//   {id:1, title: "painting1", author:"author1"},
//   {id:2, title: "painting2", author:"author2"},
//   {id:3, title: "painting3", author:"author3"},
// ]

class CardContainer extends Component{

  constructor(){
    super()
    console.log('this', this)
    this.state = {
      searchTerm: "",
      selectedPainting: null
    }
  }

  onSearch = (event) => {
    // console.log(gibberish)
    this.setState({
      searchTerm: event.target.value
    })
  }

  onSelectPainting = (event) => {
    let selectedPaintingId = event.target.dataset.paintingId
    let selectPainting = paintings.find(painting => painting.id === selectedPaintingId)
    this.setState({
      selectedPainting: selectPainting
    })
  }

  // console.log(paintings)
  render(){
    return (
      <div>
        <CardDetails painting={this.state.selectedPainting}/>
        <Searchbar someName={this.onSearch}/>
        {paintings.filter(painting => painting.title.match(this.state.searchTerm)).map(painting =>
          <Card
            key={painting.id}
            painting={painting}
            onClickOfPainting={this.onSelectPainting}
          />)}
      </div>
    )
  }
}

export default CardContainer


//button.addEventListener('click', function(){ hello('Ann')})

//function hello(name){
//console.log('hii', name)
//}
