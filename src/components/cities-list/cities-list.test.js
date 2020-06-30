import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {CitiesList} from "./cities-list";

const mockStore = configureStore([]);
const CITIES_LIST = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`];

it(`Should render Cities List correctly`, () => {
  const store = mockStore({
    currentCity: `Amsterdam`
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesList
            onCityClick={() => {}}
            currentCity={`Amsterdam`}
            citiesOffersList={CITIES_LIST}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
