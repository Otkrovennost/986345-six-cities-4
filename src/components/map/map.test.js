import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const currentOffers = [
  {
    coords: [52.3909553943508, 4.85309666406198]
  }, {
    coords: [52.369553943508, 4.85309666406198]
  }, {
    coords: [52.3909553943508, 4.929309666406198]
  }, {
    coords: [52.3809553943508, 4.939309666406198]
  }
];

it(`Should Map render correctly`, () => {
  const tree = renderer
    .create(
        <Map
          currentOffers={currentOffers}
        />, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
