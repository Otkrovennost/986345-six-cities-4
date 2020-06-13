import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({quantity, title}) => {
  return (
    <Main quantity={quantity} title={title}/>
  );
};

App.propTypes = {
  quantity: PropTypes.number.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
