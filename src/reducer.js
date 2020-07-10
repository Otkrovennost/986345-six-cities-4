import {offers, citiesOffersList} from "./mocks/offers";
import {extend, SORT_TYPES} from "./utils/utils";

const initialState = {
  currentCity: citiesOffersList[0],
  offers,
  citiesOffersList,
  sortListIsOpen: false,
  currentSortType: SORT_TYPES.POPULAR
};

export const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  TOGGLE_SORT: `TOGGLE_SORT`
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
  }

  return state;
};
