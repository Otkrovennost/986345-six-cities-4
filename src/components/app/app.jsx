import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../pages/main-page/main-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getActiveOffer} from "../../reducer/data/selectors.js";
import SignInPage from "../pages/sign-in-page/sign-in-page.jsx";
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
        <OfferPage
          offer={activeOffer}
        />
      );
    }

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <SignInPage />
      );
    }

    return (
      <MainPage
        onTitleClick={onTitleClick}
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
            <SignInPage />
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
    dispatch(DataOperation.changeOffer(offer));
  }
});

App.propTypes = {
  activeOffer: PropTypes.object,
  onTitleClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
