import React from 'react';
import { shallow, mount } from 'enzyme';
import { mapDispatchToProps, mapStateToProps } from './BestEffortsContainer';

describe('mapStateToProps', () => {
  const mockStore = {
    bestEfforts: {
      one: {},
      five: {},
      ten: {},
      fifteen: {},
      twenty: {},
    },
  };

  const expected = mapStateToProps(mockStore);
  console.log(expected);
  expect(expected.bestEfforts).toEqual(mockStore.bestEfforts);
});

describe('mapDispatchToProps', () => {
  let mockDispatch;
  let result;

  beforeEach(() => {
    mockDispatch = jest.fn();
    result = mapDispatchToProps(mockDispatch);
  });

  it('should call dispatch if handleBestEfforts is called', () => {
    console.log(result);
    result.handleBestEfforts();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
