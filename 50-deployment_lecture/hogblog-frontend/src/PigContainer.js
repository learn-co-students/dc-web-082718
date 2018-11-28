import React from "react";
import Pig from "./Pig";

const PigContainer = ({ pigs }) => {
  return (
    <div>
      {pigs.map(pig => (
        <Pig pig={pig} key={pig.id} />
      ))}
    </div>
  );
};

export default PigContainer;
