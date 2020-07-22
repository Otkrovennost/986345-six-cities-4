import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import NameSpace from "../../../reducer/name-space.js";
import {Operation} from '../../../reducer/data/data';
import FavoritesPage from "./favorites-page.jsx";

const CITIES_LIST = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`];
const FAVORITE_OFFERS = [{
  id: 1,
  city: `Amsterdam`,
  title: `Beautiful & luxurious apartment at great location`,
  coords: [52.3909553943508, 4.85309666406198],
  description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  price: 120,
  rating: 4.8,
  type: `Apartment`,
  photo: `img/apartment-01.jpg`,
  isPremium: true,
  isFavorite: false,
  quantityBedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    id: 1,
    isSuper: true,
    name: `Angelina`
  }
}];

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`../../../reducer/data/data`);
Operation.loadFavoriteOffers = () => (dispatch) => dispatch(jest.fn());

it(`Should Favorites component render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      citiesOffersList: CITIES_LIST,
      favoriteOffers: FAVORITE_OFFERS
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      email: `ab@mail.ru`,
      isSignIn: true
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <FavoritesPage />
        </BrowserRouter>
      </Provider>
  )
        .toJSON();

  expect(tree).toMatchSnapshot();
});
