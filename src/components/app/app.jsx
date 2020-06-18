import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleClickHandler = () => {};

const App = ({quantity, offers}) => {
  return (
    <Main
      quantity={quantity}
      offers={offers}
      onTitleClick={titleClickHandler}
    />
  );
};

App.propTypes = {
  quantity: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;
