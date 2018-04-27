import React, { Component } from 'react';
import sampleData from '../../test-data/workout-data.json';

import HandleDataApi from '../../helpers/HandleDataApi';
import RouteMap from '../RouteMap/RouteMap';
import Graph from '../Graph/Graph';
import EffortDisplay from '../EffortDisplay/EffortDisplay';
import BestEffortsContainer from '../../containers/BestEffortsContainer';


class App extends Component {
  constructor() {
    super();
    this.dataApi = new HandleDataApi();
  }

  componentWillMount() {
    const cleanData = sampleData.samples.filter((item) => {
      if ((typeof item.values.power) === 'number') {
        return item;
      }
    });

    const twenty = this.dataApi.calculateBestEffort(cleanData, 1200, 'twenty');
    const fifteen = this.dataApi.calculateBestEffort(cleanData, 900, 'fifteen');
    const ten = this.dataApi.calculateBestEffort(cleanData, 600, 'ten');
    const five = this.dataApi.calculateBestEffort(cleanData, 300, 'five');
    const one = this.dataApi.calculateBestEffort(cleanData, 60, 'one');

    const bestEfforts = {
      one,
      five,
      ten,
      fifteen,
      twenty,
    };

    this.props.handleBestEfforts(bestEfforts);
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div id="logo"></div>
          <h1>Fartleks</h1>
        </nav>
        <div id="nav-spacer"></div>
        <RouteMap />
        <div id="split">
          <div class="split-line"></div>
          <div id="arrow"></div>
          <div class="split-line"></div>
        </div>
        <EffortDisplay />
        <h3 id="graph-title">Power vs Time</h3>
        <h5 id="graph-use">Select two points to trace data on map</h5>
        <Graph />
        <footer></footer>
      </div>
    );
  }
}

export default BestEffortsContainer(App);
