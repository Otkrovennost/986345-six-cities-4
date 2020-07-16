import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/data/data";
import {getCurrentCity} from "../../reducer/data/selectors.js";

const CitiesList = ({currentCity, citiesOffersList, onCityClick}) => {
  const listOfCities = citiesOffersList.map((city) =>
    <li className="locations__item" key={city}>
      <a className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`} href="#" onClick={() => onCityClick(city)}>
        <span>{city}</span>
      </a>
    </li>
  );

  return (
    <ul className="locations__list tabs__list">
      {listOfCities}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

CitiesList.propTypes = {
  currentCity: PropTypes.string,
  citiesOffersList: PropTypes.array,
  onCityClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
