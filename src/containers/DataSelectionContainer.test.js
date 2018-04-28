import React from 'react';
import { shallow, mount } from 'enzyme';

import { mapStateToProps, mapDispatchToProps } from './DataSelectionContainer';

describe('mapStateToProps for data selection container', () => {
  const mockStore = {
    selectDataReducer: 'test',
  };

  it('should recieve selected data from the store', () => {
    const expected = mapStateToProps(mockStore);

    expect(expected.selectedData).toEqual(mockStore.selectDataReducer);
  });
});

describe('mapDispatchToProps for data selection container', () => {
  let mockDispatch;
  let result;

  beforeEach(() => {
    mockDispatch = jest.fn();
    result = mapDispatchToProps(mockDispatch);
  });

  it('should call dispatch if handleBestEfforts is called', () => {
    result.handleSelectedData();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
