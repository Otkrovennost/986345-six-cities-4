import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CardsList from "../../cards-list/cards-list.jsx";
import Map from "../../map/map.jsx";
import {CardClass} from "../../../const.js";
import CitiesList from "../../cities-list/cities-list.jsx";
import Header from "../../header/header.jsx";
import {getCurrentOffers, getCitiesOffersList} from "../../../reducer/data/selectors.js";
import Sorting from "../../sorting/sorting.jsx";
import withActiveItem from "../../../hocs/with-active-item/with-active-item.js";

const MainPage = ({onTitleClick, currentCity, citiesOffersList, currentOffers, currentItem, onItemMouseOver, onItemMouseOut}) => {
  const mainClass = currentOffers.length > 0 ? `page__main page__main--index` : `page__main page__main--index page__main--index-empty`;

  return (
    <div className="page page--gray page--main">
      <Header />
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
  citiesOffersList: getCitiesOffersList(state),
  currentOffers: getCurrentOffers(state)
});

MainPage.propTypes = {
  currentCity: PropTypes.string,
  onTitleClick: PropTypes.func.isRequired,
  currentItem: PropTypes.object.isRequired,
  onItemMouseOver: PropTypes.func.isRequired,
  onItemMouseOut: PropTypes.func.isRequired,
  currentOffers: PropTypes.array,
  citiesOffersList: PropTypes.array
};

export default connect(mapStateToProps)(withActiveItem(MainPage));