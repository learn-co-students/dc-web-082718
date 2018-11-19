import React from "react";
import { Route, Switch } from "react-router-dom";
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";
import { fetchingPaintings } from '../redux/actions'
import {connect} from 'react-redux'


class PaintingsContainer extends React.Component {
  componentDidMount(){
    this.props.fetchingPaintings()
  }

  // fetch(URL)
  // .then(res => res.json())
  // .then(paintings => {
  //   this.props.fetchedPaintings(paintings)
  // })

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/paintings/:paintingId/edit"
            component={PaintingForm} />
          <Route
            path="/paintings/:paintingId"
            component={PaintingDetail}
          />
          <Route
            path="/"
            render={() => (
              <div className="ui narrow container segment">
                <Searchbar/>
                <PaintingsList/>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchingPaintings: () => {dispatch(fetchingPaintings())}
  }
}

export default connect(null, mapDispatchToProps)(PaintingsContainer);
