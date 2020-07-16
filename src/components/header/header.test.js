import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import Header from "./header.jsx";

const mockStore = configureStore([]);

it(`Should Header render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      email: `abc@mail.ru`
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Header />
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
