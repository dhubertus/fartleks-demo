import React from 'react';
import { shallow, mount } from 'enzyme';

import { mapStateToProps, mapDispatchToProps } from './BestEffortsContainer';

describe('mapStateToProps for best efforts container', () => {
  const mockStore = {
    calcEffortReducer: 'test',
  };

  it('should recieve best efforts from the store', () => {
    const expected = mapStateToProps(mockStore);

    expect(expected.bestEfforts).toEqual(mockStore.calcEffortReducer);
  });
});

describe('mapDispatchToProps for best efforts container', () => {
  let mockDispatch;
  let result;

  beforeEach(() => {
    mockDispatch = jest.fn();
    result = mapDispatchToProps(mockDispatch);
  });

  it('should call dispatch if handleBestEfforts is called', () => {
    result.handleBestEfforts();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
