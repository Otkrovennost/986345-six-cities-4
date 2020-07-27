import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const ValidReviewLength = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
};

const withAddReviews = (Component) => {
  class WithAddReviews extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        review: ``,
        isActiveSubmit: false,
        isError: false
      };

      this.onSubmitForm = this.onSubmitForm.bind(this);
      this.onChange = this.onChange.bind(this);
      this._onErrorFormSubmit = this._onErrorFormSubmit.bind(this);
    }

    onSubmitForm(evt) {
      const {uploadReviews, offerId} = this.props;
      const {rating, review} = this.state;
      uploadReviews(rating, review, offerId, this.onErrorFormSubmit);
      this._clearState();
      evt.target.reset();
    }

    onChange(evt, value) {
      const target = evt.target.name;
      this._setState({[target]: value});
      this._activeForm();
    }

    _activeForm() {
      if (this.state.review.length > ValidReviewLength.MIN_LENGTH && this.state.review.length <
        ValidReviewLength.MAX_LENGTH && this.state.rating) {
        this.setState({isActiveSubmit: true});
      } else {
        this.setState({isActiveSubmit: false});
      }
    }

    _clearState() {
      this.setState(
          {
            rating: null,
            review: ``,
            isActiveSubmit: false,
            isError: false
          }
      );
    }

    _onErrorFormSubmit(state = true) {
      if (state) {
        this.setState({
          isError: true
        });
      } else {
        this.setState({
          isError: false
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmitForm={this.onSubmitForm}
          isActiveSubmit={this.state.isActiveSubmit}
          onChange={this.onChange}
          rating={this.state.rating}
          isError={this.state.isError}
        />
      );
    }
  }

  WithAddReviews.propTypes = {
    uploadReviews: PropTypes.func,
    offerId: PropTypes.string
  };

  const mapStateToProps = () => ({});

  const mapDispatchToProps = (dispatch) => ({
    uploadReviews(rating, review, offerId, onError) {
      dispatch(DataOperation.uploadReviews(rating, review, offerId, onError));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAddReviews);
};

export default withAddReviews;
