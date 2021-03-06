import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

const ZOOM = 12;
const icon = leaflet.icon({
  iconUrl: `../img/pin.svg`,
  iconSize: [27, 39]
});
const iconActive = leaflet.icon({
  iconUrl: `../img/pin-active.svg`,
  iconSize: [27, 39]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this._layer = null;
    this._mapRef = createRef();
  }

  componentDidMount() {
    const {offers, currentItem, activeOffer} = this.props;
    const city = offers[0].coords;

    const zoom = ZOOM;
    this._map = leaflet.map(this._mapRef.current, {
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

    if (activeOffer) {
      leaflet
      .marker(activeOffer.coords, {icon: iconActive})
      .addTo(this._layer);
    }

    offers.map((offer) => {
      if (currentItem && offer.id === currentItem.id) {
        leaflet
        .marker(offer.coords, {icon: iconActive})
        .addTo(this._layer);
      } else {
        leaflet
        .marker(offer.coords, {icon})
        .addTo(this._layer);
      }
    });
  }

  componentDidUpdate() {
    const {offers, currentItem, activeOffer} = this.props;
    const zoom = 12;
    this._layer.clearLayers();

    offers.map((offer) => {
      if (currentItem && offer.id === currentItem.id) {
        leaflet
        .marker(offer.coords, {icon: iconActive})
        .addTo(this._layer);
      } else {
        leaflet
        .marker(offer.coords, {icon})
        .addTo(this._layer);
      }
    });

    if (activeOffer) {
      leaflet
      .marker(activeOffer.coords, {icon: iconActive})
      .addTo(this._layer);
    }

    this._map.setView(offers[0].coords, zoom);
  }

  componentWillUnmount() {
    this._mapRef.current = null;
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this._mapRef}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array,
  activeOffer: PropTypes.object,
  currentItem: PropTypes.object
};

export default Map;
