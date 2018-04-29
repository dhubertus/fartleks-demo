import React, { Component } from 'react';
import Scroll from 'react-scroll';
import sampleData from '../../test-data/workout-data.json';

import HandleDataApi from '../../helpers/HandleDataApi';
import RouteMap from '../RouteMap/RouteMap';
import Graph from '../Graph/Graph';
import EffortDisplay from '../EffortDisplay/EffortDisplay';
import BestEffortsContainer from '../../containers/BestEffortsContainer';


export class App extends Component {
  constructor() {
    super();
    this.dataApi = new HandleDataApi();
  }

  componentWillMount() {
    const cleanData = this.dataApi.cleanData(sampleData);
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

  scroll() {
    Scroll.scroller.scrollTo('split', {
      duration: 700,
      delay: 100,
      smooth: true,
    });
  }

  render() {
    return (
      <div className="App">
        <nav id="page-nav">
          <div id="logo"></div>
          <h1>Fartleks</h1>
        </nav>
        <div id="nav-spacer"></div>
        <RouteMap />
        <div id="split">
          <div className="split-line"></div>
          <div id="arrow" onClick={() => this.scroll()}></div>
          <div className="split-line"></div>
        </div>
        <EffortDisplay />
        <h3 id="graph-title">Power vs Time</h3>
        <h5 id="graph-use">Select Range Of Data To Display On Map</h5>
        <Graph />
        <footer></footer>
      </div>
    );
  }
}

export default BestEffortsContainer(App);
