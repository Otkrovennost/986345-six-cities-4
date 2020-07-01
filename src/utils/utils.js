export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersByCity = (city, offers) => {
  const offersByCity = offers.filter((offer) => offer.city === city);
  return offersByCity;
};
