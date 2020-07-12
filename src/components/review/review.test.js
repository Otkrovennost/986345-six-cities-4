import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: `2019-04-24`,
  id: 1,
  rating: 5,
  user: {
    id: 1,
    name: `Max`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  }
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
