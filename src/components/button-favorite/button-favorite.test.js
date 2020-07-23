import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import NameSpace from "../../reducer/name-space.js";
import {Operation} from '../../reducer/data/data';
import ButtonFavorite from "./button-favorite.jsx";

const OFFER = {
  id: 1,
  city: `Amsterdam`,
  title: `Beautiful & luxurious apartment at great location`,
  isfavorite: true,
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`../../reducer/data/data`);
Operation.addToFavorite = () => (dispatch) => dispatch(jest.fn());

it(`Should ButtonFavorite render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      isSignIn: true
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <ButtonFavorite
              isFavorite={true}
              offer={OFFER}
              className={`property`}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
