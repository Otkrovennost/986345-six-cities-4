import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";

const offers = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    coords: [52.3909553943508, 4.85309666406198],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 120,
    rating: 4.8,
    type: `Apartment`,
    photo: `img/apartment-01.jpg`,
    isPremium: true,
    bookmark: false
  },

  {
    id: 2,
    title: `Wood and stone place`,
    coords: [52.369553943508, 4.85309666406198],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 80,
    rating: 4,
    type: `Private room`,
    photo: `img/room.jpg`,
    isPremium: false,
    bookmark: true
  }
];

it(`Should CardsList render correctly`, () => {
  const tree = renderer
    .create(<CardsList
      offers={offers}
      onTitleClick={() => {}}
      cardClass={`cities`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
