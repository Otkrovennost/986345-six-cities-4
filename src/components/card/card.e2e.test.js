import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

const Settings = {
  name: `One`
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const card = shallow(
      <Card
        name={Settings.name}
        onTitleClick={onTitleClick}
      />
  );

  const title = card.find(`h2.place-card__name`);

  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
