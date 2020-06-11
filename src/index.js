import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  OFFERS_QUANTITY: 420
};

ReactDOM.render(
    <App quantity={Settings.OFFERS_QUANTITY}/>,
    document.getElementById(`root`)
);
