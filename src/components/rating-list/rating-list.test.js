import React from "react";
import renderer from "react-test-renderer";
import RatingList from "./rating-list.jsx";

it(`Should RatingList render correctly`, () => {
  const tree = renderer
    .create(<RatingList
      rating={`5`}
      onChangeRating={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
