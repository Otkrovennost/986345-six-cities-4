import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import Card from "./card.jsx";

const mockStore = configureStore([]);
const offer = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  price: 120,
  type: `Apartment`,
  rating: 4,
  photo: `img/apartment-01.jpg`,
  isPremium: false,
  bookmark: true
};

it(`Should Card render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });
  const tree = renderer
  .create(
      <Provider store={store}>
        <BrowserRouter>
          <Card
            offer={offer}
            onItemMouseOver={() => {}}
            onItemMouseOut={() => {}}
            cardClass={`cities`}
          />
        </BrowserRouter>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
