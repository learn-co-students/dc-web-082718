import React from "react";
import HogDetail from "./HogDetail";

const HogList = ({ hogs }) => {
  return (
    <div className="ui grid container">
      {hogs.map(hog => <HogDetail hog={hog} key={hog.name} />)}
    </div>
  );
};

export default HogList;
