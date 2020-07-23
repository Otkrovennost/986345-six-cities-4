import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import MainPage from "../pages/main-page/main-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import SignInPage from "../pages/sign-in-page/sign-in-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";
import {AppRoute} from "../../const.js";
import {getSignInStatus} from "../../reducer/user/selectors.js";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route.js";

const App = ({isSignIn}) => {
  const FavoritesPagePrivate = withPrivateRoute(FavoritesPage, isSignIn, `/login`);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={MainPage} />
        <Route exact path={AppRoute.SIGN_IN} component={SignInPage}/>
        <Route exact path={AppRoute.FAVORITES} component={FavoritesPagePrivate}/>
        <Route exact path={AppRoute.ROOM}
          render={({match}) => {
            const {id} = match.params;
            return <OfferPage offerId={id} />;
          }}
        />
        <Redirect to={AppRoute.MAIN} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  isSignIn: getSignInStatus(state)
});

App.propTypes = {
  isSignIn: PropTypes.bool
};


export default connect(mapStateToProps)(App);
