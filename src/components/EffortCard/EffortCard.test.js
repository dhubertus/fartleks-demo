import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { EffortCard } from './EffortCard';

describe('Effort Card Tests', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const mockFn = jest.fn();
  const initialState = {
    selectedData: [],
    bestEfforts: {},
  };
  const store = mockStore(initialState);
  const wrapper = shallow(<EffortCard
                            store={store}
                            key={0}
                            title={'ten'}
                            bestAverage={100}
                            bestValues={[]}
                            handleSelectedData={mockFn}
                          />);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single effort card', () => {
    wrapper.find('.effort-card').simulate(
      'click',
      { preventDefault() {} },
    );
    expect(wrapper.find('.effort-card').length).toBe(1);
  });

  it('should trigger this.props.handleSelectedData when clicked', () => {
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
