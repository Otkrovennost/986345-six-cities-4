import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  avatar: `img/avatar-max.jpg`,
  name: `Max`,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: `2019-04-24`
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
