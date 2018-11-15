import React, {Component} from 'react'
import Header from './Headers'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter/>
      </div>
    );
  }
}

export default App
