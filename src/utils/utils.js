const REVIEWS_NUMBER = 10;

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

export const sortedReviews = (reviews) => {
  return reviews.slice(0, reviews.length).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, REVIEWS_NUMBER);
};

export const parseOffer = (data) => {
  return {
    id: data[`id`],
    city: data[`city`][`name`],
    title: data[`title`],
    coords: [data[`location`][`latitude`], data[`location`][`longitude`]],
    description: data[`description`],
    price: data[`price`],
    rating: data[`rating`],
    type: data[`type`],
    photo: data[`preview_image`],
    isPremium: data[`is_premium`],
    isFavorite: data[`is_favorite`],
    quantityBedrooms: data[`bedrooms`],
    maxAdults: data[`max_adults`],
    options: data[`goods`],
    images: data[`images`],
    host: {
      avatarUrl: data[`host`][`avatar_url`],
      isSuper: data[`host`][`is_pro`],
      name: data[`host`][`name`],
      id: data[`host`][`id`]
    }
  };
};

export const parseReview = (data) => {
  return {
    text: data[`comment`],
    date: data[`date`],
    id: data[`id`],
    rating: data[`rating`],
    user: {
      avatar: data[`user`][`avatar_url`],
      id: data[`user`][`id`],
      isPro: data[`user`][`is_pro`],
      name: data[`user`][`name`]
    }
  };
};
