import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";
import {sortedReviews} from "../../utils/utils.js";

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {sortedReviews(reviews).map((review) =>
        <Review
          review={review}
          key={review.id}
        />
      )}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
