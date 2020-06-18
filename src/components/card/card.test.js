import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const offer = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  price: 120,
  type: `Apartment`,
  rating: 4,
  photo: `img/apartment-01.jpg`,
  isPremium: false
};

it(`Should Card render correctly`, () => {
  const tree = renderer
    .create(<Card
      offer={offer}
      onTitleClick={() => {}}
      onMouseOver={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
