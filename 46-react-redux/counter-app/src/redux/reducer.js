const reducer = (oldState={counter:0}, action) => {
  switch(action.type){
    case "INCREMENT":
      return {counter: oldState.counter + action.value}
    case "DECREMENT":
      return {counter: oldState.counter - action.value}
    default:
      return oldState
  }
}

export default reducer
