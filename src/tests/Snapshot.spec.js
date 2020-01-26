import React from "react";
import renderer from "react-test-renderer";

import RootApp from "./../index";

describe("Test Counter", () => {
  it("Test onClick increase the count", () => {
    const component = renderer.create(<RootApp />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
