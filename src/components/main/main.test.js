import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Settings = {
  OFFERS_QUANTITY: 321,
  TITLES: [`One`, `Two`, `Three`, `Four`, `Five`]
};

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      quantity={Settings.OFFERS_QUANTITY}
      titles={Settings.TITLES}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
