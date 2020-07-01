import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CardsList from "../cards-list/cards-list.jsx";
import Map from "../map/map.jsx";
import {CardClass} from "../../const.js";
import CitiesList from "../cities-list/cities-list.jsx";
import {getOffersByCity} from "../../utils/utils";

const Main = ({onTitleClick, currentCity, citiesOffersList, currentOffers}) => {

  const mainClass = currentOffers.length > 0 ? `page__main page__main--index` : `page__main page__main--index page__main--index-empty`;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentCity} citiesOffersList={citiesOffersList} />
          </section>
        </div>
        <div className="cities">
          {
            (currentOffers.length > 0)
              ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex="0">
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"/>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex="0">Popular</li>
                      <li className="places__option" tabIndex="0">Price: low to high</li>
                      <li className="places__option" tabIndex="0">Price: high to low</li>
                      <li className="places__option" tabIndex="0">Top rated first</li>
                    </ul>
                  </form>
                  <CardsList offers={currentOffers} onTitleClick={onTitleClick} cardClass={CardClass.CITIES}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      offers={currentOffers}
                    />
                  </section>
                </div>
              </div>
              : <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property availbale at the moment in {currentCity}</p>
                  </div>
                </section>
                <div className="cities__right-section"/>
              </div>
          }
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  citiesOffersList: state.citiesOffersList,
  currentOffers: getOffersByCity(state.currentCity, state.offers)
});

Main.propTypes = {
  onTitleClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string,
  currentOffers: PropTypes.array,
  citiesOffersList: PropTypes.array
};

export default connect(mapStateToProps)(Main);
