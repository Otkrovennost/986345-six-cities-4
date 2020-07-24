import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {ratingSettings} from "../../const.js";

const RatingList = ({rating, onChangeRating}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {ratingSettings.map((elem) => {
        return (
          <Fragment key={elem.value}>
            <input className="form__rating-input visually-hidden" name="rating" value={elem.value} id={`${elem.value}-stars`} type="radio" checked= {rating === String(elem.value)}
              onChange={(evt) => {
                onChangeRating(evt.target.value);
              }} />
            <label htmlFor={`${elem.value}-stars`} className="reviews__rating-label form__rating-label" title={elem.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </div>
  );
};

RatingList.propTypes = {
  rating: PropTypes.string,
  onChangeRating: PropTypes.func
};

export default RatingList;
