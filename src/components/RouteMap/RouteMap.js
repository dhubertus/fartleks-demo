import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import sampleData from '../../test-data/workout-data.json';

import HandleDataApi from '../../helpers/HandleDataApi';
import DataSelectionContainer from '../../containers/DataSelectionContainer';

export class RouteMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 40.043546,
      lng: -105.158913,
      zoom: 12,
    };
  }

  render() {
    const api = new HandleDataApi();
    const polyline = api.getAllGPSLocations(sampleData.samples);
    const start = polyline[0];
    const end = polyline[polyline.length - 1];

    return (
      <Map id="route-map" center={this.state} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
        <Polyline color="#00aced" positions={polyline} />
        <Polyline color="#ffa100" positions={this.props.selectedData} />
        <Marker position={start} opacity={0.9} riseOnHover="true">
          <Popup>
            <span>
              Start Route
            </span>
          </Popup>
        </Marker>
        <Marker position={end} opacity={0.9} riseOnHover="true">
          <Popup>
            <span>
              End Route
            </span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default DataSelectionContainer(RouteMap);
