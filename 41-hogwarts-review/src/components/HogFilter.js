import React from "react";

const HogFilter = ({ toggleGreased, setSortType }) => {
  return (
    <div className="ui form">
      <form className="inline field">
        <select className="ui dropdown" type="select" onChange={setSortType}>
          <option>--Choose Sort Type--</option>
          <option>Name</option>
          <option>Weight</option>
        </select>
        <div className="ui checkbox toggle" onChange={toggleGreased}>
          <input type="checkbox" />
          <label>Greased only?</label>
        </div>
      </form>
    </div>
  );
};

export default HogFilter;
