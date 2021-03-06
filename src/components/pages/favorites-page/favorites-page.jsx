import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from "../../header/header.jsx";
import FavoritesEmpty from "../../favorites-empty/favorites-empty.jsx";
import Card from "../../card/card.jsx";
import {CardClass} from "../../../const.js";
import {getFavoriteOffers, getCitiesOffersList} from "../../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../../reducer/data/data.js";

class FavoritesPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteOffers} = this.props;
    loadFavoriteOffers();
  }

  render() {
    const {favoriteOffers, citiesOffersList} = this.props;

    if (!favoriteOffers.length) {
      return <FavoritesEmpty />;
    }

    return (
      <div className="page page--favorites-empty">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {citiesOffersList.map((city) => {
                  return (
                    favoriteOffers.filter((offer) => offer.city === city).length !== 0 ?
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {favoriteOffers.filter((offer) => offer.city === city).map((card) => {
                            return (
                              <Card
                                key={card.id}
                                offer={card}
                                cardClass={CardClass.FAVORITES}
                              />);
                          })}
                        </div>
                      </li> : ``
                  );
                }
                )}
              </ul>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

FavoritesPage.propTypes = {
  loadFavoriteOffers: PropTypes.func,
  favoriteOffers: PropTypes.array,
  citiesOffersList: PropTypes.array
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  citiesOffersList: getCitiesOffersList(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
