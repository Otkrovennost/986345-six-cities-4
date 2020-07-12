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

export const parseOffer = (data) => {
  let offer = {};
  offer.id = data[`id`];
  offer.city = data[`city`][`name`];
  offer.title = data[`title`];
  offer.coords = [];
  offer.coords[0] = data[`location`][`latitude`];
  offer.coords[1] = data[`location`][`longitude`];
  offer.zoom = data[`location`][`zoom`];
  offer.description = data[`description`];
  offer.price = data[`price`];
  offer.rating = data[`rating`];
  offer.type = data[`type`];
  offer.photo = data[`preview_image`];
  offer.isPremium = data[`is_premium`];
  offer.bookmark = data[`is_favorite`];
  offer.quantityBedrooms = data[`bedrooms`];
  offer.maxAdults = data[`max_adults`];
  offer.options = data[`goods`];
  offer.images = data[`images`];
  offer.host = {};
  offer.host.avatarUrl = data[`host`][`avatar_url`];
  offer.host.isSuper = data[`host`][`is_pro`];
  offer.host.name = data[`host`][`name`];
  offer.host.id = data[`host`][`id`];
  offer.location = data[`location`];

  return offer;
};

export const parseReview = (data) => {
  let review = {};
  review.text = data[`comment`];
  review.date = data[`date`];
  review.id = data[`id`];
  review.rating = data[`rating`];
  review.user = {};
  review.user.avatar = data[`user`][`avatar_url`];
  review.user.id = data[`user`][`id`];
  review.user.isPro = data[`user`][`is_pro`];
  review.user.name = data[`user`][`name`];

  return review;
};
