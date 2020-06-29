import {offers, citiesOffersList} from "./mocks/offers";
import {extend, getOffersByCity} from "./utils/utils";

const initialState = {
  currentCity: `Amsterdam`,
  offers,
  currentOffers: getOffersByCity(`Amsterdam`, offers),
  citiesOffersList
};

export const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  CHANGE_CURRENT_OFFERS: `CHANGE_CURRENT_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: city
  }),
  changeOffers: (city) => ({
    type: ActionType.CHANGE_CURRENT_OFFERS,
    payload: city
  })
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return extend(state, {
        currentCity: action.payload
      });
    case ActionType.CHANGE_CURRENT_OFFERS:
      return extend(state, {
        currentOffers: getOffersByCity(action.payload, state.offers)
      });
  }

  return state;
};

