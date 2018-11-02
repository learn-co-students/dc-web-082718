import React, { Component } from "react";

class HogDetail extends Component {
  getHogImgs = hog => {
    let sluggedName = hog.name
      .split(" ")
      .join("_")
      .toLowerCase();
    let imgUrl = require(`../hog-imgs/${sluggedName}.jpg`);
    return imgUrl;
  };

  render() {
    const hog = this.props.hog;
    const weight =
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
    return (
      <div className="pigTile">
        <h1 className="headerText">{hog.name}</h1>
        <img src={this.getHogImgs(hog)} />
        <p>{hog[weight]} units of hog weight</p>
      </div>
    );
  }
}

export default HogDetail;
