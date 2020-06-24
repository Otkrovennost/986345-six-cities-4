import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import PropTypes from "prop-types";

const CardClass = {
  CITIES: `cities`,
  NEAR_PLACES: `near-places`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };

    this._titleClickHandler = this._titleClickHandler.bind(this);
  }

  _titleClickHandler(offer) {
    this.setState({
      activeOffer: offer
    });
  }

  _renderApp() {
    const {quantity, offers} = this.props;

    if (this.state.activeOffer) {
      return (
        <Offer
          offer={this.state.activeOffer}
          cardClass={CardClass.NEAR_PLACES}
        />
      );
    } else {
      return (
        <Main
          quantity={quantity}
          offers={offers}
          cardClass={CardClass.CITIES}
          onTitleClick={this._titleClickHandler}
        />
      );
    }
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Offer
              offer={offers[0]}
              cardClass={CardClass.NEAR_PLACES}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  quantity: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;
