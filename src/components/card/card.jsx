import React from "react";
import PropTypes from "prop-types";

const Card = ({offer, onTitleClick, onMouseOver}) => {
  const {id, title, price, type, rating, photo, isPremium} = offer;

  const ratingPercentage = `${rating * 20}%`;
  const premiumClass = isPremium ? `place-card__mark` : `place-card__mark visually-hidden`;

  return (
    <article className="cities__place-card place-card"
      key={id}
      onMouseOver={() => {
        onMouseOver(id);
      }}
    >
      <div className={premiumClass}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={photo} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercentage}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name"
          onClick={() => {
            onTitleClick(offer);
          }}>
          <a href="#">
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired
  }),
  onTitleClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired
};

export default Card;