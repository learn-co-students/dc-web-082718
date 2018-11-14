import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

// const reducer = (oldState, action) => {
//   console.log("oldState:" , oldState, "action:", action)
//   if(oldState === undefined){
//     return {counter: 0}
//   }
//   return oldState
// }
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const reducer = (oldState={count:0}, action) => {
  console.log("oldState:" , oldState, "action:", action)
  switch(action.type){
    case INCREMENT:
      return {count: oldState.count + action.value}
    case DECREMENT:
      return {count: oldState.count - action.value}
    default:
      return oldState
  }
}

//return ++oldState.count

//reducer tells us how state changes over time
const store = createStore(reducer)

console.log(store.getState())

class App extends Component {
  //hacky, bad practice
  componentDidMount(){
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  increment = (value) => {
    store.dispatch({type: INCREMENT, value: value})
  };

  decrement = (value) => {
    store.dispatch({type: DECREMENT, value: value})
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </header>
    );
  }
}

class Counter extends Component {




  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>

        <h3>{`The current count is less than ${store.getState().count + 5 - (store.getState().count % 5)}`}</h3>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
