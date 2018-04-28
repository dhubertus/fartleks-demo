import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { App } from './App';

describe('Effort Display Tests', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const mockFn = jest.fn();
  const initialState = {
    selectedData: [],
    bestEfforts: {},
  };
  const store = mockStore(initialState);
  const wrapper = shallow(<App
                            store={store}
                            handleBestEfforts={mockFn}
                          />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single application', () => {
    expect(wrapper.find('.App').length).toBe(1);
  });
  
  it('should render a single nav', () => {
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('the nav should contatin a logo and a title', () => {
    expect(wrapper.find('nav').children().find('h1').length).toBe(1);
    expect(wrapper.find('nav').children().find('#logo').length).toBe(1);
  });

  it('should render a graph title', () => {
    expect(wrapper.find('#graph-title').length).toBe(1);
    expect(wrapper.find('#graph-use').length).toBe(1);
  });
});
