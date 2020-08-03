import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, ActionCreator, Operation} from "./data.js";

const api = createAPI(() => {});

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
      name: `Angelina`
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
      name: `Angelina`
    }
  }
];

const citiesOffersList = [...new Set(offers.map((offer) => offer.city))];

it(`Reducer should change city by a given value`, () => {
  expect(reducer({
    offers,
    nearbyOffers: offers,
    activeOffer: null,
    reviews: [],
    currentCity: `Amsterdam`,
    citiesOffersList,
    sortListIsOpen: false,
    currentSortType: `Popular`,
    isNearbyOffersLoading: true,
    isReviewsLoading: true,
    favoriteOffers: []
  }, {
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: `Paris`,
  })).toEqual({
    offers,
    nearbyOffers: offers,
    activeOffer: null,
    reviews: [],
    currentCity: `Paris`,
    citiesOffersList,
    sortListIsOpen: false,
    currentSortType: `Popular`,
    isNearbyOffersLoading: true,
    isReviewsLoading: true,
    favoriteOffers: []
  });
});

it(`Reducer should change sorting by a given value`, () => {
  expect(reducer({
    offers,
    nearbyOffers: offers,
    activeOffer: null,
    reviews: [],
    currentCity: `Amsterdam`,
    citiesOffersList,
    sortListIsOpen: false,
    currentSortType: `Popular`,
    isNearbyOffersLoading: true,
    isReviewsLoading: true,
    favoriteOffers: []
  }, {
    type: ActionType.CHANGE_SORT,
    payload: `Top rated first`,
  })).toEqual({
    offers,
    nearbyOffers: offers,
    activeOffer: null,
    reviews: [],
    currentCity: `Amsterdam`,
    citiesOffersList,
    sortListIsOpen: false,
    currentSortType: `Top rated first`,
    isNearbyOffersLoading: true,
    isReviewsLoading: true,
    favoriteOffers: []
  });
});
it(`Reducer should change activeOffer by a given value`, () => {
  expect(reducer({
    offers,
    nearbyOffers: offers,
    activeOffer: null,
    reviews: [],
    currentCity: `Amsterdam`,
    citiesOffersList,
    sortListIsOpen: false,
    currentSortType: `Popular`,
    isNearbyOffersLoading: true,
    isReviewsLoading: true,
    favoriteOffers: []
  }, {
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offers[0],
  })).toEqual({
    offers,
    nearbyOffers: offers,
    activeOffer: offers[0],
    reviews: [],
    currentCity: `Amsterdam`,
    citiesOffersList,
    sortListIsOpen: false,
    currentSortType: `Popular`,
    isNearbyOffersLoading: true,
    isReviewsLoading: true,
    favoriteOffers: []
  });
});

describe(`Action creators for change return correct action`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CURRENT_CITY,
      payload: `Paris`,
    });
  });
  it(`Action creator for change sorting return correct action`, () => {
    expect(ActionCreator.changeSortType(`Top rated first`)).toEqual({
      type: ActionType.CHANGE_SORT,
      payload: `Top rated first`,
    });
  });
  it(`Action creator for change activeOffer return correct action`, () => {
    expect(ActionCreator. changeOffer(offers[0])).toEqual({
      type: ActionType.CHANGE_ACTIVE_OFFER,
      payload: offers[0],
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
  it(`Should make a correct API call to /hotels/id/nearby`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffers = Operation.loadNearbyOffers(1);

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, [{fake: true}]);

    return nearbyOffers(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
  it(`Should make a correct API call to /comments/id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadedReview = Operation.loadReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: true}]);

    return loadedReview(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });
  it(`Should make a correct API post to /favorite/id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addFavorite = Operation.addToFavorite(offers[0]);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, [{fake: true}]);

    return addFavorite(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_TO_FAVORITE,
          payload: [{fake: true}],
        });
      });
  });
  it(`Should make a correct API post to /comments/id`, function () {
    const userComment = {
      comment: `Test text`,
      rating: 3
    };
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const onError = (state = true) => jest.fn(state);
    const reviewsUploader = Operation.uploadReviews(userComment.rating, userComment.review, 1, onError);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [{fake: true}]);

    return reviewsUploader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
