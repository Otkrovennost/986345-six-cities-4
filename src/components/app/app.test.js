import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  OFFERS_QUANTITY: 321
};

const offers = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    rating: 4,
    type: `Apartment`,
    photo: `img/apartment-01.jpg`,
    isPremium: true
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      quantity={Settings.OFFERS_QUANTITY}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
