import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Operation as UserOperation} from "../../../reducer/user/user";
import {getEmail} from "../../../reducer/user/selectors.js";
import Header from "../../header/header.jsx";
import {getSignInStatus} from "../../../reducer/user/selectors.js";

class SignInPage extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {login} = this.props;

    evt.preventDefault();

    login({
      email: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {isSignIn} = this.props;

    if (isSignIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="page page--gray page--login">
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={this.handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" ref={this.loginRef} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={this.passwordRef} />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignInPage.propTypes = {
  login: PropTypes.func.isRequired,
  isSignIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  email: getEmail(state),
  isSignIn: getSignInStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(data) {
    dispatch(UserOperation.login(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
