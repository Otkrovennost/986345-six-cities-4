import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Settings = {
  OFFERS_QUANTITY: 321,
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
  },

  {
    id: 2,
    title: `Wood and stone place`,
    price: 80,
    rating: 4,
    type: `Private room`,
    photo: `img/room.jpg`,
    isPremium: false
  }
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      quantity={Settings.OFFERS_QUANTITY}
      offers={offers}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
