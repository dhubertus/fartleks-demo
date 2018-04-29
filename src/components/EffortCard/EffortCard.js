import React, { Component } from 'react';
import Scroll from 'react-scroll';
import HandleDataApi from '../../helpers/HandleDataApi';
import DataSelectionContainer from '../../containers/DataSelectionContainer';

export class EffortCard extends Component {
  constructor() {
    super();
    this.api = new HandleDataApi();
  }

  scroll() {
    Scroll.scroller.scrollTo('route-map', {
      duration: 700,
      delay: 100,
      smooth: true,
    });
  }

  handleCardClick(values) {
    const readyToMapData = this.api.getAllGPSLocations(values);

    this.props.handleSelectedData(readyToMapData);
    this.scroll();
  }

  render() {
    const { title, bestAverage, bestValues } = this.props;

    return (
      <div className="effort-card" onClick={() => this.handleCardClick(bestValues)}>
        <div>{`${title} Minute`.toUpperCase()}</div>
        <div>{bestAverage.toFixed(2)}</div>
      </div>
    );
  }
}

export default DataSelectionContainer(EffortCard);
