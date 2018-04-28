import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { EffortDisplay } from './EffortDisplay';

describe('Effort Display Tests', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    selectedData: [],
    bestEfforts: {},
  };
  const bestEfforts = {
    one: {},
    five: {},
    ten: {},
    fifteen: {},
    twenty: {},
  };
  const store = mockStore(initialState);
  const wrapper = shallow(<EffortDisplay
                            store={store}
                            bestEfforts={bestEfforts}
                          />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single display', () => {
    expect(wrapper.find('#effort-card-display').length).toBe(1);
  });

  it('should render a single display title', () => {
    expect(wrapper.find('#effort-display-title').length).toBe(1);
  });

  it('should render 5 effort cards when passed 5 data points', () => {
    expect(wrapper.find('#effort-card-container').children().length).toBe(5);
  });
});
