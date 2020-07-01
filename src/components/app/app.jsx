import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";

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

export default App;

