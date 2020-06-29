import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import PropTypes from "prop-types";

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
    const {currentCity, currentOffers} = this.props;

    if (this.state.activeOffer) {
      return (
        <Offer
          offer={this.state.activeOffer}
        />
      );
    } else {
      return (
        <Main
          onTitleClick={this._titleClickHandler}
          currentCity={currentCity}
          currentOffers={currentOffers}
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
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  currentOffers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  currentOffers: state.currentOffers
});

export {App};
export default connect(mapStateToProps)(App);
