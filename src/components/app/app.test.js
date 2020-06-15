import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  OFFERS_QUANTITY: 321,
  TITLES: [`One`, `Two`, `Three`, `Four`, `Five`]
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      quantity={Settings.OFFERS_QUANTITY}
      titles={Settings.TITLES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
