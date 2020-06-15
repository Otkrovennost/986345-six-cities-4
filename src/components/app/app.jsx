import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({quantity, titles}) => {
  return (
    <Main quantity={quantity} titles={titles}/>
  );
};

App.propTypes = {
  quantity: PropTypes.number.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
