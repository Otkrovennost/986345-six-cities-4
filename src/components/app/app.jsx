import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import MainPage from "../pages/main-page/main-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import SignInPage from "../pages/sign-in-page/sign-in-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={SignInPage}/>
          <Route exact path="/favorites" component={FavoritesPage}/>
          <Route exact path="/offer/:id"
            render={({match}) => {
              const {id} = match.params;
              return <OfferPage offerId={id} />;
            }}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
