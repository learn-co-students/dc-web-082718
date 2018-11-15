import React, {Component} from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  increment = (value) => {
    this.props.dispatch({type: "INCREMENT", value})
  };

  decrement = (value) => {
    this.props.dispatch({type: "DECREMENT", value})
  };
  render() {
    console.log("Counter props:", this.props)
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {count: state.counter}
}

export default connect(mapStateToProps)(Counter)
