import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import NameSpace from "../../../reducer/name-space.js";
import {FavoritesPage} from "./favorites-page.jsx";

const mockStore = configureStore([]);
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
  bookmark: false,
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

it(`Should Favorites component render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      citiesOffersList: CITIES_LIST,
      favoriteOffers: FAVORITE_OFFERS,
      isFavoriteOffersLoading: true
    },
    [NameSpace.USER]: {
      isSignIn: true
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <FavoritesPage
            loadFavoriteOffers={() => {}}
          />
        </BrowserRouter>
      </Provider>
  )
        .toJSON();

  expect(tree).toMatchSnapshot();
});
