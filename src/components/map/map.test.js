import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const mockStore = configureStore([]);
const CURRENT_OFFERS = [
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
  const store = mockStore({
    offers: CURRENT_OFFERS,
    currentCard: CURRENT_OFFERS[0]
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Map offers={CURRENT_OFFERS}/>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
