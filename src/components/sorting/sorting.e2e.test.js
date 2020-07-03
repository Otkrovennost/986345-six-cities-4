import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Sorting} from "./sorting.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should open sort list after click correctly`, () => {
  const onSortListClick = jest.fn();

  const sortToggle = shallow(
      <Sorting
        sortListIsOpen={false}
        currentSortType={`Popular`}
        onSortListClick={onSortListClick}
        onSortTypeClick={() => {}}
      />
  );

  const sortLink = sortToggle.find(`.places__sorting-type`);

  sortLink.simulate(`click`);
  expect(onSortListClick).toHaveBeenCalledTimes(1);
});

it(`Should check sort variant after click`, () => {
  const onSortTypeClick = jest.fn();

  const sortToggle = shallow(
      <Sorting
        sortListIsOpen={true}
        currentSortType={`Price: high to low`}
        onSortListClick={() => {}}
        onSortTypeClick={onSortTypeClick}
      />
  );

  const sortVariant = sortToggle.find(`.places__option`).at(1);

  sortVariant.simulate(`click`);
  expect(onSortTypeClick).toHaveBeenCalledTimes(1);
});
