import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import CardsList from "./cards-list.jsx";

const mockStore = configureStore([]);
const offers = [
  {
    id: 15,
    city: `Hamburg`,
    title: `Wood and stone place`,
    coords: [53.52915303313223, 9.972878246093762],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 80,
    rating: 4,
    type: `Private room`,
    photo: `img/room.jpg`,
    isPremium: false,
    isFavorite: true,
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
        coords: [53.56595805920654, 9.9646385],
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
        coords: [53.534847270690096, 9.889888744140664],
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
        coords: [53.532264643891674, 9.972878246093762],
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
    id: 16,
    city: `Hamburg`,
    title: `Canal View Prinsengracht`,
    coords: [53.532264643891674, 9.972878246093762],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 132,
    rating: 4,
    type: `Apartment`,
    photo: `img/apartment-02.jpg`,
    isPremium: false,
    isFavorite: false,
    quantityBedrooms: 3,
    maxAdults: 5,
    options: [`Wi-Fi`, `Towels`, `Heating`, `Coffee machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    images: [`img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
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
        coords: [53.56595805920654, 9.9646385],
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
        coords: [53.52915303313223, 9.972878246093762],
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
        coords: [53.532264643891674, 9.972878246093762],
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
    id: 17,
    city: `Hamburg`,
    title: `Nice, cozy, warm big bed apartment`,
    coords: [53.534847270690096, 9.889888744140664],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    photo: `img/apartment-03.jpg`,
    isPremium: true,
    isFavorite: false,
    quantityBedrooms: 2,
    maxAdults: 5,
    options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`],
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      isSuper: false,
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
        coords: [53.54595805920654, 9.882878246093762],
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
        coords: [53.53915303313223, 9.972878246093762],
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
        coords: [53.536264643891674, 9.839669017578176],
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

it(`Should CardsList render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <CardsList
              offers={offers}
              onItemMouseOver={() => {}}
              onItemMouseOut={() => {}}
              onCardHover={() => {}}
              cardClass={`cities`}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
