import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { Graph } from './Graph';

describe('Graph Tests', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    selectedData: [],
    bestEfforts: {},
  };
  const store = mockStore(initialState);
  const wrapper = shallow(<Graph
                            store={store}
                            chartType="LineChart"
                            rows={[]}
                            columns={[]}
                            options={{}}
                            graph_id="LineChart"
                            width="100%"
                            height="400px"
                            chartEvents={[]}
                          />);
  const options = {
    titlePosition: 'none',
    hAxis: { title: 'Time (Minutes)', minValue: 0, maxValue: 'auto' },
    vAxis: { title: 'Power (Watts)', minValue: 0, maxValue: 'auto' },
    legend: { position: 'bottom', alignment: 'start', textStyle: { color: '#3d3e42', fontSize: 16 } },
    lineWidth: 0.4,
    selectionMode: 'multiple',
    colors: ['#ffa100'],
    crosshair: { color: '#00aced', trigger: 'both', orientation: 'vertical' },
  };

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single graph', () => {
    expect(wrapper.find('#graph').length).toBe(1);
  });

  it('should have access to dependent props', () => {
    const wrapperProps = wrapper.find('#graph').props();
    expect(wrapperProps.id).toBe('graph');
    expect(wrapperProps.chartType).toBe('LineChart');
    expect(wrapperProps.rows.length).not.toBe(0);
    expect(wrapperProps.columns).not.toBe(0);
  });

  it('should have a specific set of options', () => {
    const wrapperOptions = wrapper.find('#graph').props().options;
    expect(wrapperOptions.titlePosition).toBe(options.titlePosition);
    expect(wrapperOptions.hAxis).toEqual(options.hAxis);
    expect(wrapperOptions.vAxis).toEqual(options.vAxis);
    expect(wrapperOptions.legend).toEqual(options.legend);
    expect(wrapperOptions.fontSize).toBe(options.fontSize);
    expect(wrapperOptions.lineWidth).toBe(options.lineWidth);
    expect(wrapperOptions.selectionMode).toBe(options.selectionMode);
    expect(wrapperOptions.colors).toEqual(options.colors);
    expect(wrapperOptions.crosshair).toEqual(options.crosshair);
  });
});
