import React from "react";
import PropTypes from "prop-types";
import RatingList from "../rating-list/rating-list.jsx";
import ErrorBlock from "../error-block/error-block.jsx";

const ReviewsForm = ({onSubmitForm, isActiveSubmit, onChange, rating, isError}) => {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmitForm(evt);
      }}
      className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList
        rating={rating}
        onChange={onChange}
      />
      <textarea
        onChange={(evt) => {
          onChange(evt, evt.target.value);
        }}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" required></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isActiveSubmit ? false : true}>Submit</button>
        {isError && <ErrorBlock />}
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  isActiveSubmit: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired
};

export default ReviewsForm;

