import React from "react";
import renderer from "react-test-renderer";

import TextField from "../src/components/TextField/TextField";

it("TextField renders correctly", () => {
  const tree = renderer
    .create(<TextField icon="TestIcon" placeholder="Find love" onChange={console.log} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
