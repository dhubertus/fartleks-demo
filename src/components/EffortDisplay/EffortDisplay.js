import React, { Component } from 'react';

import EffortCard from '../EffortCard/EffortCard';
import BestEffortsContainer from '../../containers/BestEffortsContainer';

export class EffortDisplay extends Component {
  render() {
    const { bestEfforts } = this.props;
    const cardArray = Object.keys(bestEfforts).map((key, i) => {
      return (
        <EffortCard
          key={i}
          title={bestEfforts[key].title}
          bestAverage={bestEfforts[key].bestAverage}
          bestValues={bestEfforts[key].bestValues}
        />
      );
    });

    return (
      <div id="effort-card-display">
        <div id='effort-display-title'>
          <h4>Your Best Efforts</h4>
        </div>
        <div id='effort-card-container'>
          {cardArray}
        </div>
      </div>
    );
  }
}

export default BestEffortsContainer(EffortDisplay);
