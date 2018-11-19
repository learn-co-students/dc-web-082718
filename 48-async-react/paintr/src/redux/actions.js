
function voteForPainting(paintingId){
  return {type: 'VOTE_FOR_PAINTING', paintingId }
}

function changeSearchText(searchText){
  return {type: "CHANGE_SEARCH_TEXT", searchText }
}

function updatePaintingInfo(painting){
  return {type: "UPDATE_PAINTING_INFO", painting }
}

function fetchedPaintings(paintings){
  return {type: "FETCHED_PAINTINGS", paintings}
}

function loadingPaintings(){
  return {type: "LOADING_PAINTING"}
}

//Action Creations are only allowed to return {}
//we want to create an action, that doesn't return {},
//instead, makes a fetch call, and then when it's done, dispatch another action "FETCHED_PAINTINGS"
const URL = 'http://localhost:3000/paintings/'
function fetchingPaintings(){
  return (dispatch) => {
    dispatch(loadingPaintings())
    fetch(URL)
    .then(res => res.json())
    .then(paintings => {
      dispatch(fetchedPaintings(paintings)) //but we don't have access to the dispatch func
    })
  }
}
//Goal is to create an action, that when complete, dispatches another action async

function increaseVotes(paintingId) {
  return (dispatch, getState) => {
    const votes = getState().paintings.find(p => p.id === paintingId).votes + 1
    fetch(`${URL}/${paintingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          votes:votes
      })
    }).then(res => res.json())
    .then(painting => {
      dispatch(voteForPainting(painting.id))
    })
  }
}

// function updatePaintingServerSide(paintingId) {
//   return (dispatch) => {
//     fetch(`${URL}/${paintingId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({
//       })
//     }).then(res => res.json())
//     .then(painting => {
//       dispatch(voteForPainting(painting.id))
//     })
//   }
// }

export { voteForPainting, changeSearchText, updatePaintingInfo, fetchedPaintings,
  fetchingPaintings, increaseVotes }
