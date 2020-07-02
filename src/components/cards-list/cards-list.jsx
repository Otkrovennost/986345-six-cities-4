import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = ({offers, onTitleClick, onCardHover, cardClass}) => {
  const cardsListName = cardClass === `cities` ? `cities__places-list places__list tabs__content` : `near-places__list places__list`;

  return (
    <div className={cardsListName}>
      {offers.map((offer) =>
        <Card
          offer={offer}
          key={offer.id}
          onTitleClick={onTitleClick}
          onCardHover={onCardHover}
          cardClass={cardClass}
        />
      )}
    </div>
  );
};

// class CardsList extends PureComponent {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const {offers, onTitleClick, onCardHover, cardClass} = this.props;

//     const cardsListName = cardClass === `cities` ? `cities__places-list places__list tabs__content` : `near-places__list places__list`;

//     return (
//       <div className={cardsListName}>
//         {offers.map((offer) =>
//           <Card
//             offer={offer}
//             key={offer.id}
//             onTitleClick={onTitleClick}
//             onCardHover={onCardHover}
//             cardClass={cardClass}
//           />
//         )}
//       </div>
//     );
//   }
// }

CardsList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  onTitleClick: PropTypes.func,
  onCardHover: PropTypes.func,
  cardClass: PropTypes.string
};

export default CardsList;
