import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RatingList from "./rating-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should item from RatingList be pressed and checked correct value`, () => {
  const onChange = jest.fn();

  const ratingList = shallow(
      <RatingList
        onChange={onChange}
        rating={`5`}
      />
  );

  const ratingInput = ratingList.find(`.form__rating-input`).at(0);

  ratingInput.simulate(`change`);

  expect(onChange).toHaveBeenCalledTimes(1);
});
