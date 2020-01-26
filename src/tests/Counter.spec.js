import React from "react";
import renderer from "react-test-renderer";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "./../components/Counter";

configure({adapter: new Adapter()});

describe("Test Counter", () => {
  it("Test Counter Render on Snapshot", () => {
    const component = renderer.create(<Counter />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Test onClick increase the count", () => {
    const component = shallow(<Counter />);
    expect(component.find("#counterId").text()).toEqual(
      "Counter = 0Click to increment"
    );
    component
      .find("#incrementBtn")
      .props()
      .onClick();
    expect(component.find("#counterId").text()).toEqual(
      "Counter = 1Click to increment"
    );
  });
});
