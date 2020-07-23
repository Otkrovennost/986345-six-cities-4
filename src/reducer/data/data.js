import {extend, SORT_TYPES, parseOffer, parseReview} from "../../utils/utils";

const initialState = {
  offers: [],
  nearbyOffers: [],
  activeOffer: null,
  reviews: [],
  currentCity: ``,
  citiesOffersList: [],
  sortListIsOpen: false,
  currentSortType: SORT_TYPES.POPULAR,
  isNearbyOffersLoading: true,
  isReviewsLoading: true,
  favoriteOffers: [],
};

export const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  TOGGLE_SORT: `TOGGLE_SORT`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  ADD_TO_FAVORITE: `ADD_TO_FAVORITE`
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
  addToFavorite: (offer) => {
    return {
      type: ActionType.ADD_TO_FAVORITE,
      payload: offer,
    };
  },
  loadFavoriteOffers: (favoriteOffers) => {
    return {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffers
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
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteOffers(response.data));
      });
  },
  addToFavorite: (offer) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offer.id}/${+!offer.isFavorite}`, {})
      .then((response) => {
        dispatch(Operation.loadFavoriteOffers());
        dispatch(ActionCreator.addToFavorite(response.data));
      });
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
        nearbyOffers: parsedNearbyOffers,
        isNearbyOffersLoading: false
      });
    case ActionType.LOAD_REVIEWS:
      let parsedReviews = action.payload.map((review) => parseReview(review));
      return extend(state, {
        reviews: parsedReviews,
        isReviewsLoading: false
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      let parsedFavoriteOffers = action.payload.map((offer) => parseOffer(offer));
      return extend(state, {
        favoriteOffers: parsedFavoriteOffers
      });
    case ActionType.ADD_TO_FAVORITE:
      let parsedOffer = parseOffer(action.payload);
      const reloadedOffers = state.offers.slice();
      const index = reloadedOffers.findIndex((el) => el.id === parsedOffer.id);
      reloadedOffers.splice(index, 1, parsedOffer);
      const reloadFavoriteOffers = reloadedOffers.filter((offer) => offer.bookmark === true);
      return extend(state, {
        offers: reloadedOffers,
        favoriteOffers: reloadFavoriteOffers
      });
  }

  return state;
};
