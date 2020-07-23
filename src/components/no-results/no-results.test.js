import React from "react";
import renderer from "react-test-renderer";
import NoResults from "./no-results.jsx";

const CURRENT_CITY = `Amsterdam`;

it(`Should NoResults render correctly`, () => {
  const tree = renderer
    .create(<NoResults
      currentCity={CURRENT_CITY}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
