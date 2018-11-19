import React from "react";
import PaintingListItem from "./PaintingListItem";
import { connect } from 'react-redux';
import { mapPaintingsToProps } from '../redux/mapStateToProps'

const PaintingsList = props => {
  return props.loading ? <div>Loading...</div> : <div className="ui container">
      <div className="ui celled selection list">
        {props.paintings.map(painting => (
          <PaintingListItem
            key={painting.id}
            painting={painting}
          />
        ))}
      </div>
    </div>
}

export default connect(mapPaintingsToProps)(PaintingsList);
