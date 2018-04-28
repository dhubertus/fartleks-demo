import { calcEffortReducer as reducer } from './calcEffortReducer';

describe('calcEffortReducer', () => {
  it('should return an empty object on default', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('reduce selected data', () => {
    const action = {
      type: 'CALCULATE_EFFORT',
      efforts: {
        one: {},
        two: {},
        three: {},
      },
    };
    const expected = {
      one: {},
      three: {},
      two: {}, 
    };

    expect(reducer(undefined, action)).toEqual(expected);
  });
});
