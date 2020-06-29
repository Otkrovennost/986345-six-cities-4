import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
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
    const {currentOffers} = this.props;
    const city = currentOffers[0].coords;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    const zoom = 12;
    this._map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);

    leaflet
    .marker(city, {icon})
    .addTo(this._map);

    currentOffers.map((offer) => {
      leaflet
        .marker(offer.coords, {icon})
        .addTo(this._map);
    });
  }
}

Map.propTypes = {
  currentOffers: PropTypes.array
};

export default Map;
