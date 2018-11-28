import React from "react";

const Pig = ({ pig }) => {
  return (
    <h1>
      <span role="img" aria-label="pig">
        🐷
      </span>{" "}
      {pig.name}{" "}
      <span role="img" aria-label="pig">
        🐷
      </span>
    </h1>
  );
};

export default Pig;
