import React, { Component } from 'react';

import EffortCard from '../EffortCard/EffortCard';
import BestEffortsContainer from '../../containers/BestEffortsContainer';

class EffortDisplay extends Component {
  render() {
    const { bestEfforts } = this.props;
    const cardArray = Object.keys(bestEfforts).map((key) => {
      return (
        <EffortCard
          title={bestEfforts[key].title}
          bestAverage={bestEfforts[key].bestAverage}
          bestValues={bestEfforts[key].bestValues}
        />
      );
    });

    return (
      <div id="effort-card-display">
        <div id='effort-display-title'>
          <h4>Top Power Averages By Time</h4>
        </div>
        <div id='effort-card-container'>
          {cardArray}
        </div>
      </div>
    );
  }
}

export default BestEffortsContainer(EffortDisplay);
