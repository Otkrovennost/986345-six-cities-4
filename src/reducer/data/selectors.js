import NameSpace from "../name-space.js";
import {createSelector} from "reselect";
import {getSortedOffers, getOffersByCity} from "../../utils/utils.js";

const getCurrentCity = (state) => state[NameSpace.DATA].currentCity;
const getOffers = (state) => state[NameSpace.DATA].offers;
const getCurrentSortType = (state) => state[NameSpace.DATA].currentSortType;

export const getCurrentOffers = createSelector(
    getCurrentCity,
    getOffers,
    getCurrentSortType,
    (curCity, offers, sortType) => {
      return getSortedOffers(getOffersByCity(curCity, offers), sortType);
    }
);
