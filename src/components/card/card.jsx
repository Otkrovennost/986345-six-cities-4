import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {CardClass} from "../../const.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const Card = ({onTitleClick, offer, onItemMouseOver, onItemMouseOut, cardClass}) => {
  const {id, title, price, type, rating, photo, isPremium, bookmark} = offer;

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
  const bookmarkClass = bookmark ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;

  return (
    <article className={getCardClass(cardClass)}
      key={id}
      onMouseOver={() => {
        if (cardClass === CardClass.FAVORITES) {
          return;
        } else {
          onItemMouseOver(offer);
        }
      }}
      onMouseOut={() => {
        if (cardClass === CardClass.FAVORITES) {
          return;
        } else {
          onItemMouseOut();
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
          <button className={bookmarkClass} type="button">
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
          onClick={
            () => {
              onTitleClick(id);
            }}>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(id) {
    dispatch(DataOperation.loadNearbyOffers(id));
    dispatch(DataOperation.loadReviews(id));
  }
});

Card.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    bookmark: PropTypes.bool.isRequired
  }),
  onItemMouseOver: PropTypes.func,
  onItemMouseOut: PropTypes.func,
  onTitleClick: PropTypes.func,
  cardClass: PropTypes.string,
  authorizationStatus: PropTypes.string
};
export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
