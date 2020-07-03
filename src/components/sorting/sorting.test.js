import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Sorting from "./sorting.jsx";

const mockStore = configureStore([]);

it(`Should render Sorting correctly`, () => {
  const store = mockStore({
    currentSortType: `Popular`,
    sortListIsOpen: false
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

