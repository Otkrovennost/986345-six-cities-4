import React from "react";
import renderer from "react-test-renderer";
import ErrorBlock from "./error-block.jsx";

it(`Should NoResults render correctly`, () => {
  const tree = renderer
    .create(<ErrorBlock />).toJSON();

  expect(tree).toMatchSnapshot();
});
