import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {CardClass, ButtonCardClass} from "../../const.js";
import ButtonFavorite from "../button-favorite/button-favorite.jsx";

const Card = ({offer, onItemMouseOver, onItemMouseOut, cardClass}) => {
  const {id, title, price, type, rating, photo, isPremium, isFavorite} = offer;

  const getCardClass = (currentClass) => {
    switch (currentClass) {
      case CardClass.CITIES:
        return (`cities__place-card place-card`);
      case CardClass.NEAR_PLACES:
        return (`near-places__card place-card`);
      case CardClass.FAVORITES:
        return (`favorites__card place-card`);
    }
    return false;
  };

  const ratingPercentage = `${rating * 20}%`;
  const premiumClass = isPremium ? `place-card__mark` : `place-card__mark visually-hidden`;

  return (
    <article className={getCardClass(cardClass)}
      key={id}
      onMouseOver={() => {
        if (cardClass === CardClass.CITIES) {
          onItemMouseOver(offer);
        } else {
          return;
        }
      }}
      onMouseOut={() => {
        if (cardClass === CardClass.CITIES) {
          onItemMouseOut();
        } else {
          return;
        }
      }}
    >
      <div className={premiumClass}>
        <span>Premium</span>
      </div>
      <div className={cardClass + `__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={photo} width={`${cardClass === CardClass.FAVORITES ? `150` : `260`}`} height={`${cardClass === CardClass.FAVORITES ? `110` : `200`}`} alt="Place image" />
        </a>
      </div>
      <div className={`${cardClass === CardClass.FAVORITES ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavorite
            isFavorite={isFavorite}
            offer={offer}
            className={ButtonCardClass.PLACE_CARD}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercentage}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
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
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool
  }),
  onItemMouseOver: PropTypes.func,
  onItemMouseOut: PropTypes.func,
  cardClass: PropTypes.string
};

export default Card;
