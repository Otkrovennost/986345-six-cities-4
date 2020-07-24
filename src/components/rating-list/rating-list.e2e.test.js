import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RatingList from "./rating-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should item from RatingList be pressed and checked correct value`, () => {
  const onChangeRating = jest.fn();

  const ratingList = shallow(
      <RatingList
        onChangeRating={onChangeRating}
        rating={`5`}
      />
  );

  const ratingInput = ratingList.find(`.form__rating-input`).at(0);
  const event = {
    target: {
      value: `This is just for test`
    }
  };

  ratingInput.simulate(`change`, event);

  expect(onChangeRating).toHaveBeenCalledTimes(1);
  expect(onChangeRating).toHaveBeenCalledWith(`This is just for test`);
});
