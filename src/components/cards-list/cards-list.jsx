import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

class CardsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(offerId) {
    this.setState({
      activeCard: offerId
    });
  }

  render() {
    const {currentOffers, onTitleClick, cardClass} = this.props;

    const cardsListName = cardClass === `cities` ? `cities__places-list places__list tabs__content` : `near-places__list places__list`;

    return (
      <div className={cardsListName}>
        {currentOffers.map((offer) =>
          <Card
            offer={offer}
            key={offer.id}
            onTitleClick={onTitleClick}
            onMouseOver={this.handleCardHover}
            cardClass={cardClass}
          />
        )}
      </div>
    );
  }
}


CardsList.propTypes = {
  currentOffers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  onTitleClick: PropTypes.func,
  cardClass: PropTypes.string
};

export default CardsList;
