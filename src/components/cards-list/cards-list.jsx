import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = ({titles}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {titles.map((name, index) =>
        <Card name={name} key={index} />
      )}
    </div>
  );
};

CardsList.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CardsList;
