import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {getOffersByCity} from "../../utils/utils";
import {getSortedOffers} from "../../reducer";
import Main from "./main.jsx";

const mockStore = configureStore([]);
const CITIES_LIST = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`];
const CURRENT_OFFERS = [
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
        bookmark: false
      },
      {
        id: 2,
        title: `Canal View Prinsengracht`,
        coords: [52.3909553943508, 4.85309666406198],
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
    id: 4,
    city: `Amsterdam`,
    title: `Nice, cozy, warm big bed apartment`,
    coords: [52.3809553943508, 4.939309666406198],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    photo: `img/apartment-03.jpg`,
    isPremium: true,
    bookmark: false,
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
        coords: [52.369553943508, 4.85309666406198],
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
        coords: [52.3909553943508, 4.85309666406198],
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
    id: 5,
    city: `Paris`,
    title: `Beautiful & luxurious apartment at great location`,
    coords: [48.85881733949785, 2.3470419999999894],
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
        coords: [48.88271122426135, 2.3650664445800573],
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
        coords: [48.84721324391586, 2.3669723377625833],
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
        coords: [48.84902592717809, 2.3671439991395298],
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

it(`Should Main render correctly`, () => {
  const store = mockStore({
    offers: CURRENT_OFFERS,
    currentCard: CURRENT_OFFERS[0],
    currentCity: `Amsterdam`,
    citiesOffersList: CITIES_LIST,
    currentSortType: `Popular`,
    currentOffers: getSortedOffers(getOffersByCity(`Amsterdam`, CURRENT_OFFERS), `Top rated first`),
    sortListIsOpen: false
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            onTitleClick={() => {}}
            onCardHover={() => {}}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
