const mapPaintingsToProps = state => {
  return{
    paintings: state.paintings.filter(
      p =>
        p.title.toLowerCase().includes(state.searchText.toLowerCase()) ||
        p.artist.name
          .toLowerCase()
          .includes(state.searchText.toLowerCase())
    ),
    loading: state.loading
  }
}

const mapPaintingToProps = (state, ownProps) => {
  return {
    painting: state.paintings.find(
      painting => painting.id === ownProps.match.params.paintingId
    )
  }
}

const mapSearchTextToProps = (state) => {
  return{
    searchText: state.searchText
  }
}

export { mapPaintingToProps, mapSearchTextToProps, mapPaintingsToProps }
