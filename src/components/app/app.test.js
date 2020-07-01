import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";

const mockStore = configureStore([]);

const CITIES_LIST = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`];
const offers = [
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
      name: `Angelina`
    },
    reviews: [
      {
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`
      }
    ],
    nearOffers: [
      {
        id: 1,
        title: `Wood and stone place`,
        coords: [52.369553943508, 4.85309666406198],
        price: 80,
        rating: 4,
        type: `Private room`,
        photo: `img/room.jpg`,
        isPremium: false,
        bookmark: true
      },
      {
        id: 2,
        title: `Canal View Prinsengracht`,
        coords: [52.3909553943508, 4.929309666406198],
        price: 132,
        rating: 4,
        type: `Apartment`,
        photo: `img/apartment-02.jpg`,
        isPremium: false,
        bookmark: false
      },
      {
        id: 3,
        title: `Nice, cozy, warm big bed apartment`,
        coords: [52.3809553943508, 4.939309666406198],
        price: 180,
        rating: 5,
        type: `Apartment`,
        photo: `img/apartment-03.jpg`,
        isPremium: false,
        bookmark: false
      }
    ]
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
      name: `Angelina`
    },
    reviews: [
      {
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: `2019-04-24`
      }
    ],
    nearOffers: [
      {
        id: 1,
        title: `Wood and stone place`,
        coords: [52.3909553943508, 4.85309666406198],
        price: 80,
        rating: 4,
        type: `Private room`,
        photo: `img/room.jpg`,
        isPremium: false,
        bookmark: false
      },
      {
        id: 2,
        title: `Canal View Prinsengracht`,
        coords: [52.3909553943508, 4.929309666406198],
        price: 132,
        rating: 4,
        type: `Apartment`,
        photo: `img/apartment-02.jpg`,
        isPremium: false,
        bookmark: false
      },
      {
        id: 3,
        title: `Nice, cozy, warm big bed apartment`,
        coords: [52.3809553943508, 4.939309666406198],
        price: 180,
        rating: 5,
        type: `Apartment`,
        photo: `img/apartment-03.jpg`,
        isPremium: false,
        bookmark: false
      }
    ]
  }
];

it(`Render App`, () => {
  const store = mockStore({
    currentCity: `Amsterdam`,
    offers,
    citiesOffersList: CITIES_LIST
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App/>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
