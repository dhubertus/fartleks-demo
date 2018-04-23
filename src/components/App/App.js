import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import { calcEffort } from '../../actions/actions';
import HandleDataApi from '../../helpers/HandleDataApi';
import sampleData from '../../test-data/workout-data.json'

export default class App extends Component {
  constructor() {
    super();
    this.dataApi = new HandleDataApi();
  }

  componentWillMount() {
    const check = sampleData.samples.filter(item => {
      if ((typeof item.values.power) == 'number') {
        return item;
      }
    });
    console.log(check);
    console.log(sampleData.samples.length);

    const test = this.dataApi.calculateBestEffort(check, 1200);
    console.log(test);
  }

  render() {
    return (
      <div className="App">
        TEXT
      </div>
    );
  }
}
