import React from "react";
import { shallow } from "enzyme";
import { AddTodo } from "./AddTodo";

describe("add todo component", () => {
  it("matches its snapshot", () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper).toMatchSnapshot();
  });
});
