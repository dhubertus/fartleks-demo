import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { RouteMap } from './RouteMap';

describe('Graph Tests', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    selectedData: [],
    bestEfforts: {},
  };
  const store = mockStore(initialState);
  const wrapper = shallow(<RouteMap
                            store={store}
                            positions={[]}
                            selectedData={[]}
                          />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single map container', () => {
    expect(wrapper.find('#route-map').length).toBe(1);
  });

  it('should render a single map tile layer', () => {
    expect(wrapper.find('TileLayer').length).toBe(1);
  });

  it('should render two polylines when positions and selectedData both contain data', () => {
    expect(wrapper.find('Polyline').length).toBe(2);
  });

  it('should render two markers for start and finish on the map', () => {
    expect(wrapper.find('Marker').length).toBe(2);
  });

  it('each marker should also contain a popup', () => {
    expect(wrapper.find('Marker').first().find('Popup').length).toBe(1);
  });
});
