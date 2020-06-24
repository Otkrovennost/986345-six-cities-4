import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

const reviews = [
  {
    avatar: `img/avatar-max.jpg`,
    name: `Max`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`
  }
];

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
