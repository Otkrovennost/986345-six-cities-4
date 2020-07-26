import React from "react";
import renderer from "react-test-renderer";
import ReviewsForm from "./reviews-form.jsx";

it(`Should ReviewsForm render correctly`, () => {
  const tree = renderer
    .create(<ReviewsForm />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
