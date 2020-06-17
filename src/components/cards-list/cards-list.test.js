import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";

const offers = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    type: `Apartment`,
    rating: 5,
    photo: `img/apartment-01.jpg`,
    isPremium: false
  },

  {
    id: 2,
    title: `Wood and stone place`,
    price: 80,
    type: `Private room`,
    rating: 4,
    photo: `img/room.jpg`,
    isPremium: false
  }
];

it(`Should CardsList render correctly`, () => {
  const tree = renderer
    .create(<CardsList
      offers={offers}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
