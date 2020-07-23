import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import SignInPage from "./sign-in-page.jsx";
import NameSpace from "../../../reducer/name-space.js";
import {AuthorizationStatus} from "../../../reducer/user/user.js";

const mockStore = configureStore([]);

it(`Should authScreen component render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      isSignIn: true
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <SignInPage />
        </BrowserRouter>
      </Provider>, {
        createNodeMock: () => document.createElement(`div`)
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
