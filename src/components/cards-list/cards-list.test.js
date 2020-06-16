import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";

const Settings = {
  TITLES: [`One`, `Two`, `Three`, `Four`, `Five`]
};

it(`Should CardsList render correctly`, () => {
  const tree = renderer
    .create(<CardsList
      titles={Settings.TITLES}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
