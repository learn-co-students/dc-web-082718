import React from "react";
import { Route, Switch } from "react-router-dom";

import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";
import paintingsData from "../paintings.json";

class PaintingsContainer extends React.Component {
  //goal: add redux into our app, such the, we don't need this state

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

export default PaintingsContainer;
