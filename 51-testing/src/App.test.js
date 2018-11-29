import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  let loadData = () => "test data";
  let wrapper = shallow(<App loadData={loadData} />);
  expect(wrapper).toMatchSnapshot();
});
