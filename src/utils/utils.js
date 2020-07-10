export const SORT_TYPES = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  RATED: `Top rated first`
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersByCity = (city, offers) => {
  const offersByCity = offers.filter((offer) => offer.city === city);
  return offersByCity;
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
