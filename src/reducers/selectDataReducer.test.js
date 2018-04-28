import { selectDataReducer as reducer } from './selectDataReducer';

describe('selectedDataReducer', () => {
  it('should return an empty array on default', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('reduce selected data', () => {
    const action = {
      type: 'SELECT_DATA',
      data: [
        [40.07016, -105.17841],
        [40.07023, -105.17842],
        [40.0703, -105.17842],
        [40.07037, -105.17843],
        [40.07045, -105.17843],
      ],
    };
    const expected = [
      [40.07016, -105.17841],
      [40.07023, -105.17842],
      [40.0703, -105.17842],
      [40.07037, -105.17843],
      [40.07045, -105.17843],
    ];

    expect(reducer(undefined, action)).toEqual(expected);
  });
});
