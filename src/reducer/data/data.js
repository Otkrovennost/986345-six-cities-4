import {extend, SORT_TYPES, parseOffer, parseReview} from "../../utils/utils";

const initialState = {
  offers: [],
  nearbyOffers: [],
  activeOffer: null,
  reviews: [],
  currentCity: ``,
  citiesOffersList: [],
  sortListIsOpen: false,
  currentSortType: SORT_TYPES.POPULAR
};

export const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  TOGGLE_SORT: `TOGGLE_SORT`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: city
  }),
  changeOffer: (city) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: city
  }),
  sortListToggle: () => ({
    type: ActionType.TOGGLE_SORT,
    payload: null
  }),
  changeSortType: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort
  }),
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    };
  },
  loadNearbyOffers: (nearbyOffers) => {
    return {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: nearbyOffers
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    };
  },
};

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  loadNearbyOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearbyOffers(response.data));
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  changeOffer: (offer) => (dispatch) => {
    return dispatch(Operation.loadNearbyOffers(offer.id))
            .then(() => dispatch(Operation.loadReviews(offer.id)))
            .then(() => dispatch(ActionCreator.changeOffer(offer)));
  }
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload,
        currentSortType: SORT_TYPES.POPULAR
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });
    case ActionType.TOGGLE_SORT:
      return extend(state, {
        sortListIsOpen: !state.sortListIsOpen
      });
    case ActionType.CHANGE_SORT:
      return extend(state, {
        currentSortType: action.payload
      });
    case ActionType.LOAD_OFFERS:
      let parsedOffers = action.payload.map((offer) => parseOffer(offer));
      let parseCity = parsedOffers[0].city;
      return extend(state, {
        offers: parsedOffers,
        currentCity: parseCity,
        citiesOffersList: [...new Set(parsedOffers.map((offer) => offer.city))],
      });
    case ActionType.LOAD_NEARBY_OFFERS:
      let parsedNearbyOffers = action.payload.map((offer) => parseOffer(offer));
      return extend(state, {
        nearbyOffers: parsedNearbyOffers
      });
    case ActionType.LOAD_REVIEWS:
      let parsedReviews = action.payload.map((review) => parseReview(review));
      return extend(state, {
        reviews: parsedReviews
      });
  }

  return state;
};
