import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  OFFERS_QUANTITY: 420,
  TITLES: [`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]
};

ReactDOM.render(
    <App
      quantity={Settings.OFFERS_QUANTITY}
      titles={Settings.TITLES}
    />,
    document.getElementById(`root`)
);
