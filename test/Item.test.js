import React from "react";
import renderer from "react-test-renderer";

import PhotoItem from "../src/components/Item/PhotoItem";

it("PhotoItem renders correctly", () => {
  const tree = renderer
    .create(<PhotoItem src="images/pictures/w01.jpg" caption="TEST" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});