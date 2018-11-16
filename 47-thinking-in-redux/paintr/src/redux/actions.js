
function voteForPainting(paintingId){
  return {type: 'VOTE_FOR_PAINTING', paintingId }
}

function changeSearchText(searchText){
  return {type: "CHANGE_SEARCH_TEXT", searchText }
}

function updatePaintingInfo(payload){
  return {type: "UPDATE_PAINTING_INFO", payload }
}


export { voteForPainting, changeSearchText, updatePaintingInfo }
