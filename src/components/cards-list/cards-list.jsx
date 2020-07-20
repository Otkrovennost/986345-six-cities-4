import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = ({offers, onItemMouseOver, onItemMouseOut, cardClass}) => {
  const cardsListName = cardClass === `cities` ? `cities__places-list places__list tabs__content` : `near-places__list places__list`;

  return (
    <div className={cardsListName}>
      {offers.map((offer) =>
        <Card
          offer={offer}
          key={offer.id}
          onItemMouseOver={onItemMouseOver}
          onItemMouseOut={onItemMouseOut}
          cardClass={cardClass}
        />
      )}
    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  onItemMouseOver: PropTypes.func,
  onItemMouseOut: PropTypes.func,
  cardClass: PropTypes.string
};

export default CardsList;
