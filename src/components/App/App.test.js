import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import BestEffortsContainer from '../../containers/BestEffortsContainer';
import configureMockStore from 'redux-mock-store';

import App from './App';

const mockStore = configureMockStore()({
  bestEfforts: {
    one: [
      [1, 2],
      [2, 3],
    ],
    five: [
      [1, 2],
      [2, 3],
    ],
    ten: [
      [1, 2],
      [2, 3],
    ],
    fifteen: [
      [1, 2],
      [2, 3],
    ],
    twenty: [
      [1, 2],
      [2, 3],
    ],
  },
  selectedData: [],
});

const wrapper = mount(<Provider store={mockStore}><App /></Provider>);
const Component = wrapper.find(App);


// Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    console.log(Component);
    // expect(wrapper.find('.App').length).toEqual(1);
  });
});
