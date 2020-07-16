import React from "react";
import renderer from "react-test-renderer";
import Avatar from "./avatar.jsx";

const email = `abc@mail.ru`;

it(`Should Avatar render correctly`, () => {
  const tree = renderer
    .create(<Avatar
      email={email}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
