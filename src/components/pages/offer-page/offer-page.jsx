import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReviewsList from "../../reviews-list/reviews-list.jsx";
import Map from "../../map/map.jsx";
import CardsList from "../../cards-list/cards-list.jsx";
import Header from "../../header/header.jsx";
import {CardClass, ButtonCardClass} from "../../../const.js";
import {getNearbyOffers, getReviews, getNearbyOffersStatus, getReviewsStatus, getCurrentOffer} from "../../../reducer/data/selectors.js";
import {getSignInStatus} from "../../../reducer/user/selectors.js";
import {Operation as DataOperation} from "../../../reducer/data/data.js";
import ButtonFavorite from "../../button-favorite/button-favorite.jsx";
import ReviewsForm from "../../reviews-form/reviews-form.jsx";
import withAddReviews from "../../../hocs/with-add-reviews/with-add-reviews.js";

const AddReviewsWrapper = withAddReviews(ReviewsForm);

class OfferPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offerId, loadOfferData} = this.props;
    loadOfferData(offerId);
  }

  componentDidUpdate(prevProps) {
    const {offerId, loadOfferData} = this.props;

    if (this.props.offerId !== prevProps.offerId) {
      loadOfferData(offerId);
    }
  }

  render() {
    const {offer, offerId, nearbyOffers, reviews, isNearbyOffersLoading, isReviewsLoading, isSignIn} = this.props;

    if (isReviewsLoading || isNearbyOffersLoading) {
      return false;
    }

    const {title, description, price, rating, type, isPremium, isFavorite, quantityBedrooms, maxAdults, options, images, host} = offer;

    const ratingPercentage = `${rating * 20}%`;
    const premiumClass = isPremium ? `property__mark` : `property__mark visually-hidden`;

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image, index) => {
                  return (
                    <div className="property__image-wrapper" key={index}>
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  );
                }).slice(0, 6)
                }
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className={premiumClass}>
                  <span>Premium</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <ButtonFavorite
                    isFavorite={isFavorite}
                    offer={offer}
                    className={ButtonCardClass.PROPERTY}
                  />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: ratingPercentage}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {quantityBedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {options.map((option, i) => {
                      return (<li className="property__inside-item" key={`option-${i}`}>
                        {option}
                      </li>);
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${host.isSuper ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={`/` + host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList reviews={reviews} />
                  {isSignIn &&
                    <AddReviewsWrapper offerId={offerId}/>
                  }
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers={nearbyOffers}
                activeOffer={offer}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <CardsList offers={nearbyOffers} cardClass={CardClass.NEAR_PLACES} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferPage.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    quantityBedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    })
  }),
  reviews: PropTypes.array.isRequired,
  nearbyOffers: PropTypes.array.isRequired,
  isNearbyOffersLoading: PropTypes.bool.isRequired,
  isReviewsLoading: PropTypes.bool.isRequired,
  loadOfferData: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  offerId: PropTypes.string.isRequired,
  isSignIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state, {offerId}) => ({
  offer: getCurrentOffer(offerId)(state),
  nearbyOffers: getNearbyOffers(state),
  reviews: getReviews(state),
  isNearbyOffersLoading: getNearbyOffersStatus(state),
  isReviewsLoading: getReviewsStatus(state),
  isSignIn: getSignInStatus(state)
});


const mapDispatchToProps = (dispatch) => ({
  loadOfferData(id) {
    dispatch(DataOperation.loadNearbyOffers(id));
    dispatch(DataOperation.loadReviews(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
