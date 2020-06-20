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
  isPremium: false
};

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Card`, () => {
  it(`Should title be pressed and when user hovers the card with onMouseOver the handler should get information about the offer`, () => {
    const onTitleClick = jest.fn();
    const onMouseOver = jest.fn();

    const card = shallow(
        <Card
          offer={offer}
          onTitleClick={onTitleClick}
          onMouseOver={onMouseOver}
        />
    );

    const title = card.find(`h2.place-card__name`);

    title.simulate(`click`);

    expect(onTitleClick).toHaveBeenCalledTimes(1);
    expect(onTitleClick).toHaveBeenCalledWith(offer);

    card.find(`.place-card`).simulate(`mouseOver`);

    expect(onMouseOver).toHaveBeenCalledTimes(1);
    expect(onMouseOver).toHaveBeenCalledWith(offer.id);
  });
});
