import React, { Component } from 'react';

import HandleDataApi from '../../helpers/HandleDataApi';
import DataSelectionContainer from '../../containers/DataSelectionContainer';

export class EffortCard extends Component {
  render() {
    const { title, bestAverage, bestValues } = this.props;
    const api = new HandleDataApi();
    const readyToMapData = api.getAllGPSLocations(bestValues);

    return (
      <div className="effort-card" onClick={() => this.props.handleSelectedData(readyToMapData)}>
        <div>{`${title} Minute`.toUpperCase()}</div>
        <div>{bestAverage.toFixed(2)}</div>
      </div>
    );
  }
}

export default DataSelectionContainer(EffortCard);
