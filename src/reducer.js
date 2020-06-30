import {offers, citiesOffersList} from "./mocks/offers";
import {extend} from "./utils/utils";

const initialState = {
  currentCity: `Amsterdam`,
  offers,
  citiesOffersList
};

export const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: city
  })
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload
      });
  }

  return state;
};

