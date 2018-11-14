## Refactor Challenge - What did we have to change?
- pull state into App.js
- move where we define our callbacks that manipulate states
- fix all our props
- fix our references to old function calls


- State initialization moved to App
- State managing callback functions moved to App
- Count in Counter changed to `this.props.count`
- Computation moved to Header
- Computation switched to use a prop
- Change functions switched to props in Counter
- So many things in the code had to change to accommodate this tiny design change!

# Intro to Redux

- Introducing Redux and the store
- Designing our redux state
- Pulling state from the store
- Dispatching actions to our store
- Updating state based on actions
- Problems with this version of our redux app


## (Psst! Redux Terminology Cheatsheet)
[Redux Terminology](https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6)


## Getting Starting with Redux

Installing redux: `npm install --save redux`


### What do we need to build?
- Store
- State that lives inside the store
- Read from the store
- Tell store when to change state (Dispatch -> Action)
- Tell the store how to update state (Action/oldState -> Reducer -> newState)


Creating our redux store:

```js
import { createStore } from 'redux'
const reducer = (oldState, action) => {
  if(oldState === undefined) {
    return {}
  }
  return oldState;
}

const store = createStore(reducer);
```

```js
const reducer = (oldState = { count: 0 }, action) => {
  console.log('action', action)
  return oldState;
}
```

## Designing our state

- Starting to think in Redux
- 'Shape' of our state: keys in our store and the _types_ of the values
- e.g. "`count` will be a number. `friends` will be an array of Friend objects. `loading` will be a boolean.

> Note: This is just like step 3 of Thinking in React. We _just_ need to figure out the shape of the state, not where it lives.

- What should the initial state be?
- Redux init action - `"@@redux/INITxyz"`
- Warning on returning `undefined` from our store

### Reading from the store

We want to read the count from the store
We can get the current state with `getState`

```js
// instead of this.props.count
store.getState().count
```

**We no longer depend on props!**

## Dispatching Actions to our store

- What are the things that can happen in our app?
- These will become the _actions_ that our store responds to

Action: A plain old javascript object (POJO) with the key `type`, a string. Optionally, more data.

```js
{ type: 'CLICKED_PLUS' }
```

```js
increment = () => {
  store.dispatch({type: 'CLICKED_PLUS'})
}


decrement = () => {
  store.dispatch({type: 'CLICKED_MINUS'})
}
```

Q: Where should these functions live?
A: Wherever you like! They don't depend on `setState`, so they can be defined in the component where they are used.

## Updating State

Let's see the actions flow through our reducer:

*Rule: we must not mutate the old state!*

Our reducer should return a _new_ object with the updated state

```js
const reducer = (oldState = { count: 0 }, action) => {
  console.log('action', action)
  if(action.type === 'CLICKED_PLUS') {
    return { count: oldState.count + 1 }
  }
  return oldState;
}
```

If we expect to return different states based on different actions, we can use a switch statement:

```js
const reducer = (oldState = { count: 0 }, action) => {
  console.log('action', action)
  switch(action.type) {
    case 'CLICKED_PLUS':
      return { count: oldState.count + 1 }
    case 'CLICKED_MINUS':
      return { count: oldState.count - 1 }
    default:
      return oldState;
  }
}
```

### Why isn't our view updating?

The redux store is changing! (We can see if we log it)

Hacky solution:

```js
componentDidMount() {
  store.subscribe(() => this.forceUpdate())
}
```

## Challenge

Add buttons, actions, and cases to your reducer so that we can increment and decrement by `+3` and `-5`

## What if I want to move the description back to the Counter?
- The problem we are trying to solve

## Problems we still have
- Everything in one file
- organize our code
- NOT DO THIS:     store.subscribe(() => this.forceUpdate())
- hot to communicate with an API
