import * as actions from './actions.js';


describe('Actions tests', () => {
  it('should store calculated best efforts in store', () => {
    const efforts = {
      one: {},
      two: {},
      three: {},
    };

    const expectedAction = {
      type: 'CALCULATE_EFFORT',
      efforts,
    };

    expect(actions.calcEffort(efforts)).toEqual(expectedAction);
  });

  it('should store user selected data in store', () => {
    const data = [
      [40.07016, -105.17841],
      [40.07023, -105.17842],
      [40.0703, -105.17842],
      [40.07037, -105.17843],
      [40.07045, -105.17843],
    ];

    const expectedAction = {
      type: 'SELECT_DATA',
      data,
    };

    expect(actions.selectData(data)).toEqual(expectedAction);
  });
});
