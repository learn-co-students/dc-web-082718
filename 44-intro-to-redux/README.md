# Introduction to Redux

## Resources
* [Redux Lecture Slides](https://docs.google.com/presentation/d/1IIzo1y-nHkQEGtEhDiq7NevbTipq0jGj9XjOs4hLE9Q/edit#slide=id.g342b7ede26_0_19)

### Problems of React State
* State is ever-changing and is constantly being mutated in React.
* Large React apps require props to be passed needlessly throughout the component tree.
* React apps with tons of stateful components are constantly rerendering.

### The Solution: Redux
* What Is Redux?
  * The goal of Redux is to make state **global** and make all state changes **predictable**
  * Redux at its core is a state manager built for React.js
  * The main concept behind Redux is to store state in a central location and allow each component to access that state without having to send props down to child components or use callback functions to send data back up to the parent

* Why Redux?
  * As your React applications become increasingly more complex, State becomes increasingly harder to manage
  * An app with 20+ stateful components in its structure ignores the single source of truth principle and changes in state are difficult to track
  * Redux alleviates these issues by placing state in a single, central location that all of your components can interact with

### Single Source of Truth
* We use the Redux store to contain a singular and universal state within our application.
* Redux Store
  * The Redux store is a plain JS object that exposes a few Redux specific methods like `dispatch` and `getState`. Our applications state lives here
  * The store is created at the very beginning of an application with the `createStore` function

### Reading and Writing to the Store
* With Redux, the state of our application will actually never *change*. Instead, the `store` is alerted of changes and returns a new state based off of the previous state and incoming alterations.
* The state can be accessed by the method `getState`, a reader method
* The state can be manipulated by sending an "action" to a method called `dispatch`
  * An action is a plain object containing the instructions and information that describes the state changes we expect to see
  * Actions typically have two keys:
    * `type`: a string used to identify the type of state change
    * `payload`: any data needed to complete the state change

### Pure Functions: Reducers
* When we get an action telling us how the state should change, we use pure functions called reducers that do not mutate state but instead return an entirely new state to replace the old one
* Reducers
  * A reducer function's job is to read an action and return newly updated state
  * When a Redux store is created via `createStore`, the reducer is given as its first argument
  * A reducer function receives two arguments: the current state and an `action` object
  * The return value of the reducer function will become the new state
  * An easy way to remember the role of a reducer is that it takes two arguments and _reduces_ them to one thing, the new state

### Unidirectional Flow
* Manipulating the Redux store can be broken down to a series of unidirectional steps
  1. Component triggers an action
  2. Action sent to reducer
  3. Reducer returns the new state
  4. Change in store causes re-render in components that rely on the piece of state that changed

### Common Hurdles of Redux
* Global State:
  - Students often struggled with understanding that their applications state now exists in one, solitary location. Previously, state existed in multiple locations and students were comfortable constructing stateful components. At first, it may seem odd for them to relocate every piece of their state to one place.
* Reducers:
  - Students have difficulty understanding the role of reducers in their application and why we need them. The main role of a reducer is to interpret dispatched messages and tell the store to return a new version state.
