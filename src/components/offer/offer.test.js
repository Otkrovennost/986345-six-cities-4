import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";

const offer = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  price: 120,
  rating: 4.8,
  type: `Apartment`,
  photo: `img/apartment-01.jpg`,
  isPremium: true,
  quantityBedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isSuper: true,
    name: `Angelina`
  },
  reviews: [
    {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      date: `2019-04-24`
    }
  ],
  nearOffers: [
    {
      id: 1,
      title: `Wood and stone place`,
      coords: [52.369553943508, 4.85309666406198],
      price: 80,
      rating: 4,
      type: `Private room`,
      photo: `img/room.jpg`,
      isPremium: false,
      bookmark: true
    }
  ]
};

it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(<Offer
      offer={offer}
    />, {
      createNodeMock: () => document.createElement(`div`)
    }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
