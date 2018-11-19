// import paintingsData from "../paintings.json";
import { combineReducers } from 'redux'

const searchTextReducer = (oldState="", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.searchText
    default:
      return oldState
  }
}

const loadingReducer = (oldState=false, action) => {
  switch (action.type) {
    case "LOADING_PAINTING":
      return true
    case "FETCHED_PAINTINGS":
      return false
    default:
      return oldState
  }
}

const paintingsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "VOTE_FOR_PAINTING":
      return oldState.map(painting => {
        if(painting.id === action.paintingId){
          return {
            ...painting,
            votes: painting.votes + 1
          }
        }
        return painting
      })
    case "UPDATE_PAINTING_INFO":
      return oldState.map(painting => {
        if(painting.id === action.painting.id){
          return action.painting
        }
        return painting
      })
    case "FETCHED_PAINTINGS":
      return action.paintings
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer,
  loading: loadingReducer
})

export default rootReducer


// const rootReducer = (oldState=initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_SEARCH_TEXT":
//       return {
//         ...oldState,
//         searchText: action.searchText
//       }
//     default:
//       return oldState
//   }
// }
