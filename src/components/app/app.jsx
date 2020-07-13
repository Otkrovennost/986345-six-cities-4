import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import {Operation as DataOperation, ActionCreator} from "../../reducer/data/data.js";
import {getActiveOffer} from "../../reducer/data/selectors.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    if (this.props.activeOffer) {
      return (
        <Offer
          offer={this.props.activeOffer}
        />
      );
    } else {
      return (
        <Main
          onTitleClick={this.props.onTitleClick}
        />
      );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(offer) {
    dispatch(DataOperation.loadNearbyOffers(offer.id))
      .then(() => dispatch(DataOperation.loadReviews(offer.id)))
      .then(() => dispatch(ActionCreator.changeOffer(offer)));
  }
});

App.propTypes = {
  activeOffer: PropTypes.object,
  onTitleClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
