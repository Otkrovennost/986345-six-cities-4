import React from "react";
import {errorBlockStyle} from "../../const.js";

const ErrorBlock = () => {
  return (
    <div style={errorBlockStyle}>
      Sorry! No comment send. Check your internet connection.
    </div>
  );
};

export default ErrorBlock;
