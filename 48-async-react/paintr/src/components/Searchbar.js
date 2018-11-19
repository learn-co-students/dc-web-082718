import React from "react";
import { connect } from 'react-redux'
import { changeSearchText } from '../redux/actions'
import {mapSearchTextToProps} from '../redux/mapStateToProps' 

const Searchbar = props => (
  <div className="ui container">
    <div className="ui very large fluid input">
      <input
        type="text"
        placeholder="Search"
        value={props.searchText}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
);

export default connect(mapSearchTextToProps, {onChange: changeSearchText})(Searchbar);
