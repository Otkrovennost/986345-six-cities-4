import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

const offer = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  price: 120,
  type: `Apartment`,
  rating: 4,
  photo: `img/apartment-01.jpg`,
  isPremium: false,
  bookmark: true
};

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Card`, () => {
  it(`Should hovers the card with onMouseOver and onMouseOut work correctly`, () => {
    const onItemMouseOver = jest.fn();
    const onItemMouseOut = jest.fn();

    const card = shallow(
        <Card
          offer={offer}
          onItemMouseOver={onItemMouseOver}
          onItemMouseOut={onItemMouseOut}
          cardClass={`cities`}
        />
    );

    card.find(`.place-card`).simulate(`mouseOver`);

    expect(onItemMouseOver).toHaveBeenCalledTimes(1);
    expect(onItemMouseOver).toHaveBeenCalledWith(offer);

    card.find(`.place-card`).simulate(`mouseOut`);
    expect(onItemMouseOut).toHaveBeenCalledTimes(1);
  });
});
