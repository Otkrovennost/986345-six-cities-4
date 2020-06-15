import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const Settings = {
  name: `One`
};

it(`Should Card render correctly`, () => {
  const tree = renderer
    .create(<Card
      name={Settings.name}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
