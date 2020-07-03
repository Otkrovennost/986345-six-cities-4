import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this._layer = null;
    this.mapRef = createRef();
  }

  componentDidMount() {
    this._setupMap();
  }

  componentDidUpdate() {
    this._map.off();
    this._map.remove();
    this._setupMap();
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this.mapRef}/>
    );
  }

  _setupMap() {
    const {offers, currentCard} = this.props;
    const city = offers[0].coords;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    const iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });
    const zoom = 12;
    this._map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._layer = leaflet.layerGroup().addTo(this._map);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);

    this._map.setView(city, zoom);

    offers.map((offer) => {
      if (offer.id === currentCard.id) {
        leaflet
        .marker(currentCard.coords, {icon: iconActive})
        .addTo(this._layer);
      } else {
        leaflet
        .marker(offer.coords, {icon})
        .addTo(this._layer);
      }
    });
  }
}

const mapStateToProps = (state) => ({
  currentCard: state.currentCard
});

Map.propTypes = {
  offers: PropTypes.array,
  currentCard: PropTypes.object
};

export default connect(mapStateToProps)(Map);
