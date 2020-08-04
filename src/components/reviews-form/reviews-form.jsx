import React from "react";
import PropTypes from "prop-types";
import RatingList from "../rating-list/rating-list.jsx";
import ErrorBlock from "../error-block/error-block.jsx";

const ReviewsForm = ({onFormSubmit, isActiveSubmit, onChange, rating, isError}) => {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onFormSubmit(evt);
      }}
      className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList
        rating={rating}
        onChange={onChange}
      />
      <textarea
        onChange={onChange}
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
  onFormSubmit: PropTypes.func,
  isActiveSubmit: PropTypes.bool,
  onChange: PropTypes.func,
  rating: PropTypes.string,
  isError: PropTypes.bool
};

export default ReviewsForm;

