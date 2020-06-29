import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";

const CITIES_LIST = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];

const CitiesList = ({currentCity, onCityClick}) => {
  const listOfCities = CITIES_LIST.map((city) =>
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

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeOffers(city));
  },
});

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
