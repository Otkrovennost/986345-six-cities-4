import NameSpace from "../name-space.js";
import {createSelector} from "reselect";
import {getSortedOffers, getOffersByCity} from "../../utils/utils.js";

const getOffers = (state) => state[NameSpace.DATA].offers;
export const getCurrentCity = (state) => state[NameSpace.DATA].currentCity;
export const getCurrentSortType = (state) => state[NameSpace.DATA].currentSortType;
export const getActiveOffer = (state) => state[NameSpace.DATA].activeOffer;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getCitiesOffersList = (state) => state[NameSpace.DATA].citiesOffersList;
export const getSortListIsOpen = (state) => state[NameSpace.DATA].sortListIsOpen;

export const getCurrentOffers = createSelector(
    getCurrentCity,
    getOffers,
    getCurrentSortType,
    (curCity, offers, sortType) => {
      return getSortedOffers(getOffersByCity(curCity, offers), sortType);
    }
);
