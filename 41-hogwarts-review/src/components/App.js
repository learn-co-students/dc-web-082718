import React, { Component } from "react";
import hogs from "../porkers_data";
import "../App.css";

import Nav from "./Nav";
import HogList from "./HogContainer";
import HogFilter from "./HogFilter";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      greasedOnly: false,
      sortType: "Name"
    };
  }

  toggleGreased = () => {
    this.setState({
      greasedOnly: !this.state.greasedOnly
    });
  };

  setSortType = e => {
    this.setState({
      sortType: e.currentTarget.value
    });
  };

  filterGreased = hogs => {
    return this.state.greasedOnly
      ? hogs.filter(hog => {
          return hog.greased;
        })
      : hogs;
  };

  sortHogs = hogs => {
    let acceptableHogs = this.filterGreased(hogs);
    if (this.state.sortType === "Name") {
      return acceptableHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.state.sortType === "Weight") {
      return acceptableHogs.sort(
        (a, b) =>
          b[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ] -
          a[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ]
      );
    } else {
      return acceptableHogs;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <HogFilter
          toggleGreased={this.toggleGreased}
          setSortType={this.setSortType}
        />
        <HogList hogs={this.sortHogs(hogs)} />
      </div>
    );
  }
}
