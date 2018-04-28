import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import sampleData from '../../test-data/workout-data.json';

import HandleDataApi from '../../helpers/HandleDataApi';
import DataSelectionContainer from '../../containers/DataSelectionContainer';

export class Graph extends Component {
  constructor(props) {
    super(props);
    this.api = new HandleDataApi();
    this.state = {
      options: {
        titlePosition: 'none',
        hAxis: { title: 'Time (Minutes)', minValue: 0, maxValue: 'auto' },
        vAxis: { title: 'Power (Watts)', minValue: 0, maxValue: 'auto' },
        legend: { position: 'bottom', alignment: 'start', textStyle: { color: '#3d3e42', fontSize: 16 } },
        lineWidth: 0.4,
        selectionMode: 'multiple',
        colors: ['#ffa100'],
        crosshair: { color: '#00aced', trigger: 'both', orientation: 'vertical' },
      },
      rows: this.api.getPowerData(sampleData.samples),
      columns: [
        {
          type: 'number',
          label: 'Minutes',
        },
        {
          type: 'number',
          label: 'Output',
        },
      ],
    };
  }

  render() {
    const superClass = this;
    const chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
          const selection = Chart.chart.getSelection();
          const rows = superClass.api.getAllGPSLocations(sampleData.samples);

          if (selection.length > 1) {
            selection.sort((itemA, itemB) => {
              return itemA.row > itemB.row;
            });

            const newSet = rows.slice(selection[0].row, selection[selection.length - 1].row);

            superClass.props.handleSelectedData(newSet);
            Chart.chart.setSelection();
          }
        },
      },
    ];

    return (
      <Chart
        id='graph'
        chartType="LineChart"
        rows={this.state.rows}
        columns={this.state.columns}
        options={this.state.options}
        graph_id="LineChart"
        width="100%"
        height="400px"
        chartEvents={chartEvents}
      />
    );
  }
}

export default DataSelectionContainer(Graph);
