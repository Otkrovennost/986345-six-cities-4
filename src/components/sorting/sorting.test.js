import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Sorting from "./sorting.jsx";
import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

it(`Should render Sorting correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentSortType: `Popular`,
      sortListIsOpen: false
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Sorting
            onSortListClick={() => {}}
            onSortTypeClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

