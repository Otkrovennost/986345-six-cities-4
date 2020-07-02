import {offers, citiesOffersList} from "./mocks/offers";
import {extend} from "./utils/utils";

const SORT_TYPES = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  RATED: `Top rated first`
};

export const getSortedOffers = (offersList, sortType) => {
  switch (sortType) {
    case SORT_TYPES.LOW_TO_HIGH:
      return offersList.slice().sort((a, b) => a.price - b.price);
    case SORT_TYPES.HIGH_TO_LOW:
      return offersList.slice().sort((a, b) => b.price - a.price);
    case SORT_TYPES.RATED:
      return offersList.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offersList.slice();
  }
};

const initialState = {
  currentCity: `Amsterdam`,
  offers,
  currentCard: {},
  citiesOffersList,
  sortListIsOpen: false,
  currentSortType: SORT_TYPES.POPULAR
};

export const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  TOGGLE_SORT: `TOGGLE_SORT`,
  CARD_HOVER: `CARD_HOVER`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
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
  hoverCurrentCard: (card) => ({
    type: ActionType.CARD_HOVER,
    payload: card
  })
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload,
        currentSortType: SORT_TYPES.POPULAR
      });
    case ActionType.TOGGLE_SORT:
      return extend(state, {
        sortListIsOpen: !state.sortListIsOpen
      });
    case ActionType.CHANGE_SORT:
      return extend(state, {
        currentSortType: action.payload
      });
    case ActionType.CARD_HOVER:
      return extend(state, {
        currentCard: action.payload
      });
  }

  return state;
};
