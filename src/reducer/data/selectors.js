import NameSpace from "../name-space.js";

export const getCurrentCity = (state) => {
  return state[NameSpace.DATA].currentCity;
};

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getActiveOffer = (state) => {
  return state[NameSpace.DATA].activeOffer;
};

export const getNearbyOffers = (state) => {
  return state[NameSpace.DATA].nearbyOffers;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};

export const getCurrentSortType = (state) => {
  return state[NameSpace.DATA].currentSortType;
};

export const getCitiesOffersList = (state) => {
  return state[NameSpace.DATA].citiesOffersList;
};

export const getSortListIsOpen = (state) => {
  return state[NameSpace.DATA].sortListIsOpen;
};
