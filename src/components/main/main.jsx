import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CardsList from "../cards-list/cards-list.jsx";
import Map from "../map/map.jsx";
import {CardClass} from "../../const.js";
import CitiesList from "../cities-list/cities-list.jsx";
import {getCurrentOffers} from "../../reducer/data/selectors.js";
import Sorting from "../sorting/sorting.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import NameSpace from "../../reducer/name-space.js";

const Main = ({onTitleClick, currentCity, citiesOffersList, currentOffers, currentItem, onItemMouseOver, onItemMouseOut}) => {
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
                  <Sorting/>
                  <CardsList offers={currentOffers} onTitleClick={onTitleClick} onItemMouseOver={onItemMouseOver} onItemMouseOut={onItemMouseOut} cardClass={CardClass.CITIES}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      offers={currentOffers}
                      currentItem={currentItem}
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
  citiesOffersList: state[NameSpace.DATA].citiesOffersList,
  currentOffers: getCurrentOffers(state)
});

Main.propTypes = {
  currentCity: PropTypes.string,
  onTitleClick: PropTypes.func.isRequired,
  currentItem: PropTypes.object.isRequired,
  onItemMouseOver: PropTypes.func.isRequired,
  onItemMouseOut: PropTypes.func.isRequired,
  currentOffers: PropTypes.array,
  citiesOffersList: PropTypes.array
};

export default connect(mapStateToProps)(withActiveItem(Main));
