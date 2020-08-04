import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {ButtonCardClass, AppRoute} from "../../const.js";
import {getSignInStatus} from "../../reducer/user/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

class ButtonFavorite extends PureComponent {
  constructor(props) {
    super(props);

    this._onFavoriteClick = this._onFavoriteClick.bind(this);
  }

  _onFavoriteClick() {
    const {history, onFavoriteButtonClick, isSignIn, offer} = this.props;
    if (!isSignIn) {
      return history.push(AppRoute.SIGN_IN);
    }

    onFavoriteButtonClick(offer);
    return false;
  }

  render() {
    const {isFavorite, className} = this.props;
    const buttonClassName = className === ButtonCardClass.PLACE_CARD ? `place-card__bookmark-button` : `property__bookmark-button`;
    return (
      <button
        className={isFavorite ? `${buttonClassName} ` + `${buttonClassName}` + `--active` + ` button` : `${buttonClassName}` + ` button`}
        type="button"
        onClick={this._onFavoriteClick}
      >
        <svg
          className={`${className === ButtonCardClass.PLACE_CARD ? `place-card__bookmark-icon` : `property__bookmark-icon`}`}
          width={`${className === ButtonCardClass.PLACE_CARD ? `18` : `31`}`}
          height={`${className === ButtonCardClass.PLACE_CARD ? `19` : `33`}`}
        >
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }
}

ButtonFavorite.propTypes = {
  onFavoriteButtonClick: PropTypes.func,
  isSignIn: PropTypes.bool,
  offer: PropTypes.object,
  history: PropTypes.object,
  isFavorite: PropTypes.bool,
  className: PropTypes.string
};

const mapStateToProps = (state) => ({
  isSignIn: getSignInStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(offer) {
    dispatch(DataOperation.addToFavorite(offer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ButtonFavorite));
