import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import NameSpace from "../../../reducer/name-space.js";
import {Operation} from '../../../reducer/data/data';
import OfferPage from "./offer-page.jsx";

const OFFERS = [
  {
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
  }
];

const REVIEWS = [
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`,
    id: 1,
    rating: 5,
    user: {
      id: 1,
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      isPro: false
    }
  }
];

const NEARBY_OFFERS = [
  {
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
      isSuper: true,
      name: `Angelina`,
      id: 1
    }
  },

  {
    id: 2,
    city: `Amsterdam`,
    title: `Wood and stone place`,
    coords: [52.369553943508, 4.85309666406198],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 80,
    rating: 4,
    type: `Private room`,
    photo: `img/room.jpg`,
    isPremium: false,
    bookmark: true,
    quantityBedrooms: 2,
    maxAdults: 3,
    options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`],
    images: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      isSuper: true,
      name: `Angelina`,
      id: 1
    }
  },
  {
    id: 3,
    city: `Amsterdam`,
    title: `Canal View Prinsengracht`,
    coords: [52.3909553943508, 4.929309666406198],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 132,
    rating: 4,
    type: `Apartment`,
    photo: `img/apartment-02.jpg`,
    isPremium: false,
    bookmark: false,
    quantityBedrooms: 3,
    maxAdults: 5,
    options: [`Wi-Fi`, `Towels`, `Heating`, `Coffee machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    images: [`img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      isSuper: true,
      name: `Angelina`,
      id: 1
    }
  }
];

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`../../../reducer/data/data`);
Operation.loadNearbyOffers = () => (dispatch) => dispatch(jest.fn());
Operation.loadReviews = () => (dispatch) => dispatch(jest.fn());


it(`Should Offer render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers: OFFERS,
      nearbyOffers: NEARBY_OFFERS,
      reviews: REVIEWS,
      isNearbyOffersLoading: true,
      isReviewsLoading: true
    },
    [NameSpace.USER]: {
      email: `ab@mail.ru`,
      isSignIn: true
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OfferPage
              offerId={`0`}
              offer={OFFERS[0]}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
