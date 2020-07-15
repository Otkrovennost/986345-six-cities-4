import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import {Operation as DataOperation, ActionCreator} from "../../reducer/data/data.js";
import {getActiveOffer} from "../../reducer/data/selectors.js";
import SignIn from "../sign-in/sign-in.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {activeOffer, onTitleClick, authorizationStatus} = this.props;
    if (activeOffer) {
      return (
        <Offer
          offer={activeOffer}
        />
      );
    }

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <SignIn />
      );
    }

    return (
      <Main
        onTitleClick={onTitleClick}
        authorizationStatus={authorizationStatus}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-auth">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  activeOffer: getActiveOffer(state)
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
  onTitleClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
