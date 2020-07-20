import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import FavoritesEmpty from "./favorites-empty.jsx";

const mockStore = configureStore([]);

it(`Should FavoritesEmpty render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      email: `abc@mail.ru`
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritesEmpty />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
