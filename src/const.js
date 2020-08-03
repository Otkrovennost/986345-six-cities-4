export const Months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

export const CardClass = {
  CITIES: `cities`,
  NEAR_PLACES: `near-places`,
  FAVORITES: `favorites`
};

export const AppRoute = {
  SIGN_IN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`,
  MAIN: `/`,
};

export const ButtonCardClass = {
  PLACE_CARD: `place-card`,
  PROPERTY: `property`
};

export const ratingSettings = [
  {
    value: 5,
    title: `perfect`
  },
  {
    value: 4,
    title: `good`
  },
  {
    value: 3,
    title: `not bad`
  },
  {
    value: 2,
    title: `badly`
  },
  {
    value: 1,
    title: `terribly`
  },
];

export const errorBlockStyle = {
  position: `fixed`,
  top: 0,
  right: 0,
  width: `100%`,
  color: `white`,
  backgroundColor: `#2219B2`,
  boxShadow: `0 10px 20px #554DD8`,
  fontSize: `24px`,
  textAlign: `center`
};
