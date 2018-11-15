import React, {Component} from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg';

class Header extends Component {
  render() {
    console.log("Header props:", this.props)
    return (
      <header className="App-header" style={{color: this.props.color}}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{`The current count is less than ${this.props.count + 5 - (this.props.count % 5)}`}</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {count: state.counter}
}
export default connect(mapStateToProps)(Header)




















//goal is to connect Header to the store
//goal is to re-render the Header component when store changes
//trick Header, that a change in the store -> change in this Header's props

//Higher Order Components -> a function, then given a SomeComponent, returns a NewComponent, thatusually has extra features,

//write a function withBlue
//
// const withBlue = (SomeComponent) => {
//   let BlueComponent = (props) => {
//     return <SomeComponent {...props} color="blue" />
//   }
//   return BlueComponent
// }
//
// const BlueHeader = withBlue(Header)

// const withCount = (SomeComponent) => {
//   let EnhancedComponent = (props) => {
//     return <SomeComponent {...props} count={store.getState().count} />
//   }
//   return EnhancedComponent
// }
//
// const HeaderWithCount = withCount(Header)


// const mapStateToProps = (state) => {
//   return {count: state.counter}
// }
//
// const withCount = connect(mapStateToProps)
//
// const ConnectedHeader = withCount(Header)
